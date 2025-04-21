import { create } from 'zustand';
import { storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sendRequest from '../utils/api';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  interests: string[];
  photos: string[];
  videos: string[];
  bio: string;
  location: {
    latitude: number;
    longitude: number;
  };
  profileCompleted: boolean;
}

interface UserProfileState {
  profile: UserProfile | null;
  isCompleted: boolean;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  uploadMedia: (file: File, type: 'photo' | 'video') => Promise<string>;
  fetchProfile: () => Promise<void>;
  setProfile: (profile: UserProfile) => void;
}

export const useUserProfileStore = create<UserProfileState>((set) => ({
  profile: null,
  isCompleted: false,

  setProfile: (profile) => {
    set({ 
      profile,
      isCompleted: profile?.profileCompleted || false
    });
  },

  updateProfile: async (data) => {
    try {
      const response = await sendRequest('PUT', '/profile', data);
      set((state) => ({
        profile: state.profile ? { ...state.profile, ...response.data } : null,
        isCompleted: true
      }));
      await AsyncStorage.setItem('profile', JSON.stringify(response.data));
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  },

  uploadMedia: async (file, type) => {
    try {
      const storageRef = ref(storage, `users/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.error('Error uploading media:', error);
      throw error;
    }
  },

  fetchProfile: async () => {
    try {
      const response = await sendRequest('GET', '/profile');
      set({ 
        profile: response.data,
        isCompleted: response.data?.profileCompleted || false
      });
      await AsyncStorage.setItem('profile', JSON.stringify(response.data));
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  }
})); 