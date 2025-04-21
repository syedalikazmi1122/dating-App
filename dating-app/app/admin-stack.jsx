import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./(routes)/admin/Dashboard/index";
import Users from "./(routes)/admin/userprofiles";
import IndividualProfile from"./(routes)/admin/individualprofile/index"
// import Events from "../(routes)/admin/events"
// import Subscription from "../(routes)/admin/subscription"
import AdminTabBar from "./Components/admin/admin-tabbar";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function AdminTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <AdminTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Users" component={Users} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="IndividualProfile" component={IndividualProfile} options={{ unmountOnBlur: true }} />
      {/* <Tab.Screen name="Events" component={Events} options={{ unmountOnBlur: true }} /> */}
      {/* <Tab.Screen name="Subscription" component={Subscription} options={{ unmountOnBlur: true }} /> */}
    </Tab.Navigator>
  )
}

export function AdminStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminTabs" component={AdminTabNavigator} />
      {/* Add other admin screens here */}
    </Stack.Navigator>
  )
}

