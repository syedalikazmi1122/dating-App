import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './Components/CustomTabbar';
import Landing from './(routes)/getStarted/landing';
import Home from './(routes)/home/index';
import Login from './(routes)/auth/login';
import NameInputScreen from './(routes)/auth/name';
import EmailInputScreen from './(routes)/auth/email';
import DateofBirthScreen from './(routes)/auth/dob';
import GenderPickerScreen from './(routes)/auth/gender';
import LookingForScreen from './(routes)/auth/preferences';
import Interests from './(routes)/auth/interests';
import Uploadimage from './(routes)/auth/uploadimage';
import AddLocation from './(routes)/auth/selectlocation';
import { VerificationScreen } from './(routes)/auth/verification';
import ExploreScreen from './(routes)/main/explore';
import UploadScreen from './(routes)/main/upload';
import ConnectScreen from './(routes)/main/connect';
import ChatScreen from './(routes)/main/chat';
import StoryViewer from './(routes)/story/index';
import ChatInterface from './(routes)/main/chat/chatinterface'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={Home}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen 
        name="Explore" 
        component={ExploreScreen}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen 
        name="Upload" 
        component={UploadScreen}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen 
        name="Connect" 
        component={ConnectScreen}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen 
        name="Chat" 
        component={ChatScreen}
        options={{ unmountOnBlur: true }}
      />
    </Tab.Navigator>
  );
}

function AuthStackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="verification" component={VerificationScreen} />
      <Stack.Screen name="name" component={NameInputScreen} />
      <Stack.Screen name="email" component={EmailInputScreen} />
      <Stack.Screen name="dob" component={DateofBirthScreen} />
      <Stack.Screen name="gender" component={GenderPickerScreen} />
      <Stack.Screen name="preferences" component={LookingForScreen} />
      <Stack.Screen name="interests" component={Interests} />
      <Stack.Screen name="uploadimage" component={Uploadimage} />
      <Stack.Screen name="addlocation" component={AddLocation} />
    </Stack.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="StoryViewer" component={StoryViewer} />
      <Stack.Screen name="Chatinterface" component={ChatInterface} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Check login status from async storage or API
    // For example: checkLoginStatus().then(status => setIsLoggedIn(status));
  }, []);

  return (   isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />);
}