import { createStackNavigator } from "@react-navigation/stack"
import Landing from "./(routes)/getStarted/landing"
import Login from "./(routes)/auth/login"
import Loginwithemail from "./(routes)/auth/loginwithemail"
import Signupwithemail from "./(routes)/auth/signupwithemail"
import NameInputScreen from "./(routes)/auth/name"
import EmailInputScreen from "./(routes)/auth/email"
import DateofBirthScreen from "./(routes)/auth/dob"
import GenderPickerScreen from "./(routes)/auth/gender"
import LookingForScreen from "./(routes)/auth/preferences"
import Interests from "./(routes)/auth/interests"
import Uploadimage from "./(routes)/auth/uploadimage"
import AddLocation from "./(routes)/auth/selectlocation"
import { VerificationScreen } from "./(routes)/auth/verification"

const Stack = createStackNavigator()

export function AuthStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="LoginWithEmail" component={Loginwithemail} />
      <Stack.Screen name="SignupwithEmail" component={Signupwithemail} />
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
  )
}

