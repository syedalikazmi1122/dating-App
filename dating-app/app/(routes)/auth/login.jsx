"use client"

import { useRef, useState, useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, SafeAreaView, TextInput } from "react-native"
import { useNavigation, useRouter } from "expo-router"
import PhoneInput from "react-native-phone-number-input"
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha"
import { PhoneAuthProvider } from "firebase/auth"
import { auth } from "../../config/firebase"
import { useAuthStore } from "../../stores/authStore"
import { ArrowLeft } from "lucide-react-native"
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import axios from 'axios'

import ContinueButton from "../../Components/Login/continue-button"
import AppleIcon from "./../../../assets/icons/apple_icon.png"
import GoogleIcon from "./../../../assets/icons/google_icon.png"

// Initialize WebBrowser for OAuth
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const navigation = useNavigation()
  const router = useRouter()
  const phoneInput = useRef(null)
  const recaptchaVerifier = useRef(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showEmailLogin, setShowEmailLogin] = useState(false)
  const { signInWithGoogle, signInWithApple, signInWithEmail } = useAuthStore()

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "949979854608-2vvqn0pj0ld0oo7g7h7vt6qvf8237p6r.apps.googleusercontent.com",
    iosClientId: "949979854608-2vvqn0pj0ld0oo7g7h7vt6qvf8237p6r.apps.googleusercontent.com",
    expoClientId: "949979854608-2vvqn0pj0ld0oo7g7h7vt6qvf8237p6r.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      handleGoogleResponse(authentication);
    }
  }, [response]);

  const handleBack = () => {
    router.back()
  }

  const handleEmailLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password")
      return
    }

    try {
      setLoading(true)
      const response = await axios.post('http://your-backend-url/api/auth/login', {
        email,
        password
      });
      await signInWithEmail(email, password)
      navigation.navigate("name")
    } catch (error) {
      console.error(error)
      Alert.alert("Error", error.message || "Failed to login with email")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async () => {
    if (!phoneInput.current?.isValidNumber(phoneNumber)) {
      Alert.alert("Error", "Please enter a valid phone number.")
      return
    }

    setLoading(true)
    try {
      if (!recaptchaVerifier.current) {
        throw new Error("reCAPTCHA not loaded")
      }

      const phoneProvider = new PhoneAuthProvider(auth)
      const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)

      navigation.navigate("verification", {
        verificationId,
        phoneNumber,
      })
    } catch (error) {
      console.error(error)
      Alert.alert("Error", error.message || "Failed to send verification code")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      setLoading(true)
      await promptAsync();
    } catch (error) {
      console.error(error)
      Alert.alert("Error", error.message || "Failed to login with Google")
      setLoading(false)
    }
  }

  const handleGoogleResponse = async (authentication) => {
    try {
      await signInWithGoogle(authentication);
      navigation.navigate("name")
    } catch (error) {
      console.error(error)
      Alert.alert("Error", error.message || "Failed to complete Google login")
    } finally {
      setLoading(false)
    }
  }

  const handleAppleLogin = async () => {
    try {
      setLoading(true)
      await signInWithApple()
      navigation.navigate("name")
    } catch (error) {
      console.error(error)
      Alert.alert("Error", error.message || "Failed to login with Apple")
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = () => {
    navigation.navigate("SignupwithEmail")
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <ArrowLeft size={24} color="#000" />
      </TouchableOpacity>

      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={auth.app.options}
        attemptInvisibleVerification={true}
      />

      <Text style={styles.title}>Let's start with your{"\n"}number</Text>

      {!showEmailLogin ? (
        <>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => setPhoneNumber(text)}
            onChangeFormattedText={(formattedText) => setPhoneNumber(formattedText)}
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.textContainer}
            textInputStyle={styles.textInput}
            withDarkTheme={false}
            withShadow={false}
            autoFocus
          />

          <ContinueButton 
            onPress={handleSubmit} 
            text={loading ? "Processing..." : "Continue"} 
            disabled={!phoneNumber || loading} 
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

          <TouchableOpacity 
            style={styles.emailButton}
            onPress={() => setShowEmailLogin(true)}
          >
            <Text style={styles.emailButtonText}>Login with Email</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <ContinueButton 
            onPress={handleEmailLogin} 
            text={loading ? "Processing..." : "Login"} 
            disabled={!email || !password || loading} 
          />
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => setShowEmailLogin(false)}
          >
            <Text style={styles.backButtonText}>Back to Phone Login</Text>
          </TouchableOpacity>
        </>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text style={styles.footerLink} onPress={handleSignUp}>Sign Up</Text>
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
  phoneInputContainer: {
    backgroundColor: "rgba(255,95,88,0.15)",
    borderRadius: 8,
    marginHorizontal: 24,
    marginBottom: 24,
    height: 55,
  },
  textContainer: {
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  textInput: {
    fontSize: 16,
    paddingVertical: 0,
  },
  input: {
    backgroundColor: "rgba(255,95,88,0.15)",
    borderRadius: 8,
    marginHorizontal: 24,
    marginBottom: 16,
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
  emailButton: {
    alignItems: "center",
    marginTop: 16,
  },
  emailButtonText: {
    color: "#7ACCC7",
    fontSize: 16,
    fontWeight: "600",
  },
  backButtonText: {
    color: "#666",
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
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

