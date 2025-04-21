import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Loader2 } from 'lucide-react-native';

export const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Loader2 size={24} color="#000" />
    </View>
  );
}; 