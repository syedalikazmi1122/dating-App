import { create } from 'zustand';
import { auth } from '../config/firebase';
import { 
  signInWithCredential,
  GoogleAuthProvider,
  OAuthProvider,
  PhoneAuthProvider,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';
import { maybeCompleteAuthSession } from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sendRequest from '../utils/api';
import { router } from 'expo-router';
import { useUserProfileStore } from './userProfileStore';

// Ensure authentication is completed
maybeCompleteAuthSession();

interface AuthState {
  user: User | null;
  isAdmin: boolean;
  isLoading: boolean;
  onboardingCompleted: boolean;
  token: string | null;
  profile: any | null;
  setAuthState: (state: { token: string; user: any; profile: any }) => void;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGoogle: (authentication: any) => Promise<void>;
  signInWithApple: () => Promise<void>;
  signInWithPhone: (phoneNumber: string, verificationCode: string) => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAdmin: false,
  isLoading: true,
  onboardingCompleted: false,
  token: null,
  profile: null,

  setAuthState: async (state) => {
    try {
      await AsyncStorage.setItem('token', state.token);
      set({
        token: state.token,
        user: state.user,
        profile: state.profile,
        isAdmin: state.user?.isAdmin || false
      });
    } catch (error) {
      console.error('Error setting auth state:', error);
    }
  },

  signInWithEmail: async (email, password) => {
    try {
      set({ isLoading: true });
      const response = await sendRequest('POST', '/auth/login', {
        email,
        password
      });
      
      if (response.data.token) {
        await AsyncStorage.setItem('token', response.data.token);
        
        // Check if user has completed profile
        const profileResponse = await sendRequest('GET', '/profile');
        console.log('Profile Response:', profileResponse.data);

        // Update profile store
        useUserProfileStore.getState().setProfile(profileResponse.data);

        // Check if all required profile fields are completed
        const isProfileComplete = profileResponse.data.name && 
                                profileResponse.data.email && 
                                profileResponse.data.phone;

        if (!isProfileComplete) {
          // Navigate to the appropriate screen based on missing fields
          if (!profileResponse.data.name) {
            console.log('Redirecting to name page');
            router.replace('/(auth)/name' as any);
          } else if (!profileResponse.data.email) {
            console.log('Redirecting to email page');
            router.replace('/(auth)/email' as any);
          } else if (!profileResponse.data.phone) {
            console.log('Redirecting to phone page');
            router.replace('/(auth)/phone' as any);
          }
        } else {
          set({ 
            user: response.data.user,
            isAdmin: response.data.user.isAdmin || false,
            token: response.data.token,
            profile: profileResponse.data,
            onboardingCompleted: true
          });
          console.log('Profile complete, redirecting to tabs');
          router.replace('/(tabs)' as any);
        }
      }
    } catch (error) {
      console.error('Sign in with email error:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  signInWithGoogle: async (authentication) => {
    try {
      if (!authentication?.accessToken) {
        throw new Error('No access token found');
      }

      const credential = GoogleAuthProvider.credential(
        null,
        authentication.accessToken
      );

      const userCredential = await signInWithCredential(auth, credential);
      
      // Check if user exists in backend
      try {
        const response = await sendRequest('POST', '/auth/google', {
          email: userCredential.user.email || '',
          name: userCredential.user.displayName || '',
          photoURL: userCredential.user.photoURL || ''
        });

        if (response.data.token) {
          await AsyncStorage.setItem('token', response.data.token);
          
          // Check if user has completed profile
          const profileResponse = await sendRequest('GET', '/profile');
          console.log('Google Profile Response:', profileResponse.data);

          // Update profile store
          useUserProfileStore.getState().setProfile(profileResponse.data);

          // Check if all required profile fields are completed
          const isProfileComplete = profileResponse.data.name && 
                                  profileResponse.data.email && 
                                  profileResponse.data.phone;

          if (!isProfileComplete) {
            // Navigate to the appropriate screen based on missing fields
            if (!profileResponse.data.name) {
              console.log('Google: Redirecting to name page');
              router.replace('/(auth)/name' as any);
            } else if (!profileResponse.data.email) {
              console.log('Google: Redirecting to email page');
              router.replace('/(auth)/email' as any);
            } else if (!profileResponse.data.phone) {
              console.log('Google: Redirecting to phone page');
              router.replace('/(auth)/phone' as any);
            }
          } else {
            set({ 
              user: userCredential.user,
              token: response.data.token,
              profile: profileResponse.data,
              onboardingCompleted: true
            });
            console.log('Google: Profile complete, redirecting to tabs');
            router.replace('/(tabs)' as any);
          }
        }
      } catch (error) {
        console.error('Backend authentication error:', error);
        throw error;
      }
    } catch (error) {
      console.error('Sign in with Google error:', error);
      throw error;
    }
  },

  signInWithApple: async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential) {
        const { identityToken } = credential;
        const provider = new OAuthProvider('apple.com');
        const oAuthCredential = provider.credential({
          idToken: identityToken!,
          rawNonce: Math.random().toString(36).substring(2, 15),
        });

        const userCredential = await signInWithCredential(auth, oAuthCredential);
        
        // Check if user exists in backend
        try {
          const response = await sendRequest('POST', '/auth/apple', {
            email: userCredential.user.email || '',
            name: userCredential.user.displayName || ''
          });

          if (response.data.token) {
            await AsyncStorage.setItem('token', response.data.token);
            
            // Check if user has completed profile
            const profileResponse = await sendRequest('GET', '/profile');
            console.log('Apple Profile Response:', profileResponse.data);

            // Update profile store
            useUserProfileStore.getState().setProfile(profileResponse.data);

            // Check if all required profile fields are completed
            const isProfileComplete = profileResponse.data.name && 
                                    profileResponse.data.email && 
                                    profileResponse.data.phone;

            if (!isProfileComplete) {
              // Navigate to the appropriate screen based on missing fields
              if (!profileResponse.data.name) {
                console.log('Apple: Redirecting to name page');
                router.replace('/(auth)/name' as any);
              } else if (!profileResponse.data.email) {
                console.log('Apple: Redirecting to email page');
                router.replace('/(auth)/email' as any);
              } else if (!profileResponse.data.phone) {
                console.log('Apple: Redirecting to phone page');
                router.replace('/(auth)/phone' as any);
              }
            } else {
              set({ 
                user: userCredential.user,
                token: response.data.token,
                profile: profileResponse.data,
                onboardingCompleted: true
              });
              console.log('Apple: Profile complete, redirecting to tabs');
              router.replace('/(tabs)' as any);
            }
          }
        } catch (error) {
          console.error('Backend authentication error:', error);
          throw error;
        }
      }
    } catch (error) {
      console.error('Sign in with Apple error:', error);
      throw error;
    }
  },

  signInWithPhone: async (phoneNumber, verificationCode) => {
    try {
      const credential = PhoneAuthProvider.credential(phoneNumber, verificationCode);
      const userCredential = await signInWithCredential(auth, credential);
      
      // Check if user exists in backend
      try {
        const response = await sendRequest('POST', '/auth/phone', {
          phoneNumber: userCredential.user.phoneNumber || ''
        });

        if (response.data.token) {
          await AsyncStorage.setItem('token', response.data.token);
          
          // Check if user has completed profile
          const profileResponse = await sendRequest('GET', '/profile');

          if (!profileResponse.data.name) {
            router.replace('/(auth)/name' as any);
          } else {
            set({ 
              user: userCredential.user,
              token: response.data.token,
              profile: profileResponse.data
            });
            router.replace('/(tabs)' as any);
          }
        }
      } catch (error) {
        console.error('Backend authentication error:', error);
        throw error;
      }
    } catch (error) {
      console.error('Sign in with phone error:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem('token');
      set({ 
        user: null, 
        token: null, 
        profile: null,
        isAdmin: false,
        onboardingCompleted: false 
      });
      router.replace('/(routes)/getStarted/landing' as any);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  checkSession: () => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await AsyncStorage.getItem('token');
          if (token) {
            const profileResponse = await sendRequest('GET', '/profile');
            set({ 
              user, 
              token,
              profile: profileResponse.data,
              isAdmin: profileResponse.data?.isAdmin || false,
              onboardingCompleted: profileResponse.data?.name && 
                                 profileResponse.data?.email && 
                                 profileResponse.data?.phone
            });
            useUserProfileStore.getState().setProfile(profileResponse.data);
          }
        } catch (error) {
          console.error('Session check error:', error);
          set({ user: null, token: null, profile: null, isAdmin: false });
        }
      } else {
        set({ user: null, token: null, profile: null, isAdmin: false });
      }
      set({ isLoading: false });
    });

    return unsubscribe;
  }
})); 