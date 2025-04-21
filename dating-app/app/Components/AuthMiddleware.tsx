import React, { useEffect } from 'react';
import { useAuthStore } from '../stores/authStore';
import useUserProfileStore from '../zustand/Profilee';
import { useRouter } from 'expo-router';
import { LoadingScreen } from './LoadingScreen';

export const AuthMiddleware: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading, checkSession } = useAuthStore();
  const { profile, isCompleted } = useUserProfileStore();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = checkSession();
    
    // Check session every hour
    const sessionCheck = setInterval(() => {
      checkSession();
    }, 3600000);

    return () => {
      unsubscribe();
      clearInterval(sessionCheck);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.replace('/(auth)/login' as any);
      } else if (!isCompleted) {
        router.replace('/(auth)/onboarding' as any);
      }
    }
  }, [user, isLoading, isCompleted]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}; 