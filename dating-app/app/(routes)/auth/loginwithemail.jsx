  "use client"

  import { useState } from "react"
  import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, SafeAreaView, TextInput } from "react-native"
  import { useNavigation, useRouter } from "expo-router"
  import { useAuthStore } from "./../../stores/authStore"
  import { ArrowLeft } from "lucide-react-native"
  import sendRequest from "../../../utils/sendRequest"

  import ContinueButton from "../../Components/Login/continue-button"
  import AppleIcon from "./../../../assets/icons/apple_icon.png"
  import GoogleIcon from "./../../../assets/icons/google_icon.png"

  export default function LoginWithEmailScreen() {
    const navigation = useNavigation()
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const {
      signInWithGoogle,
      signInWithApple,
      setAuthState,
    } = useAuthStore();
    
    
    const handleBack = () => {
      router.back()
    }

    const handleSubmit = async () => {
      if (!email?.trim() || !password?.trim()) {
        Alert.alert("Error", "Please fill in all fields")
        return
      }

      setLoading(true)
      try {
        const response = await sendRequest.post('/users/auth/login', {
          email: email.trim(),
          password: password.trim()
        });

        // Update auth store with user data
        setAuthState({
          token: response.token,
          user: response.user,
          profile: response.profile
        });

        // Navigate based on profile completion status
        if (!response.user.profileCompleted) {
          navigation.navigate("name");
        } else {
          navigation.navigate("HomeTab");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Error", error.error || "Failed to login");
      } finally {
        setLoading(false);
      }
    }

    const handleGoogleLogin = async () => {
      try {
        setLoading(true);
        await signInWithGoogle();
        navigation.navigate("name");
      } catch (error) {
        console.error(error);
        Alert.alert("Error", error.message || "Failed to login with Google");
      } finally {
        setLoading(false);
      }
    }

    const handleAppleLogin = async () => {
      try {
        setLoading(true);
        await signInWithApple();
        navigation.navigate("name");
      } catch (error) {
        console.error(error);
        Alert.alert("Error", error.message || "Failed to login with Apple");
      } finally {
        setLoading(false);
      }
    }

    return (
      <SafeAreaView style={styles.container}>
        {/* Back button */}
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>Login to your account</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <ContinueButton 
          onPress={handleSubmit} 
          text={loading ? "Logging in..." : "Login"} 
          disabled={!email || !password || loading} 
        />

        <Text style={styles.orText}>OR</Text>

        <TouchableOpacity 
          style={styles.socialButton} 
          onPress={handleGoogleLogin}
          disabled={loading}
        >
          <View style={styles.socialIcon}>
            <Image source={GoogleIcon} style={{ width: 20, height: 20 }} />
          </View>
          <Text style={styles.socialText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.socialButton} 
          onPress={handleAppleLogin}
          disabled={loading}
        >
          <View style={styles.socialIcon}>
            <Image source={AppleIcon} style={{ width: 20, height: 20 }} />
          </View>
          <Text style={styles.socialText}>Login with Apple</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text style={styles.footerLink} onPress={() => navigation.navigate("SignupwithEmail")}>
              Sign Up
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: 20,
    },
    backButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 10,
      padding: 8,
    },
    title: {
      fontSize: 24,
      fontWeight: "700",
      textAlign: "center",
      marginTop: 60,
      marginBottom: 32,
    },
    inputContainer: {
      marginHorizontal: 24,
      marginBottom: 16,
    },
    label: {
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 8,
    },
    input: {
      backgroundColor: "rgba(255,95,88,0.15)",
      borderRadius: 8,
      padding: 16,
      fontSize: 16,
    },
    orText: {
      textAlign: "center",
      color: "#666",
      marginVertical: 24,
    },
    socialButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F5F5F5",
      marginHorizontal: 24,
      marginBottom: 16,
      padding: 16,
      borderRadius: 12,
    },
    socialIcon: {
      width: 24,
      height: 24,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 12,
    },
    socialText: {
      fontSize: 16,
      fontWeight: "600",
    },
    footer: {
      position: "absolute",
      bottom: 32,
      left: 0,
      right: 0,
      alignItems: "center",
    },
    footerText: {
      fontSize: 14,
      color: "#666",
    },
    footerLink: {
      color: "#7ACCC7",
      fontWeight: "600",
    },
  })