import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CustomTabBar from "./Components/CustomTabbar"
import Home from "./(routes)/home/index"
import ExploreScreen from "./(routes)/main/explore"
import UploadScreen from "./(routes)/main/upload"
import ConnectScreen from "./(routes)/main/connect"
import ChatScreen from "./(routes)/main/chat"
import ConenctDetails from "./(routes)/main/connect/connectdetails"
import StoryViewer from "./(routes)/story/index"
import ChatInterface from "./(routes)/main/chat/chatinterface"
import ViewFullPost from "./Components/Home/ViewFullpost"
import Profile from "./zustand/Profilee";
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function TabNavigator() {
  const profile = Profile(state => state.profile)
  console.log("Profile", profile)
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeTab" component={Home} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Upload" component={UploadScreen} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Connect" component={ConnectScreen} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ unmountOnBlur: true }} />
    </Tab.Navigator>
  )
}
export function MainStackNavigator() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="ConnectDetails" component={ConenctDetails} />
      <Stack.Screen name="StoryViewer" component={StoryViewer} />
      <Stack.Screen name="Chatinterface" component={ChatInterface} />
      <Stack.Screen name="ViewfullPost" component={ViewFullPost} />
    </Stack.Navigator>
  )
}