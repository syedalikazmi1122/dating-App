"use client"

import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, SafeAreaView, TextInput } from "react-native"
import { useNavigation, useRouter } from "expo-router"
import { useAuthStore } from "../../stores/authStore"
import { ArrowLeft } from "lucide-react-native"
import sendRequest from "../../../utils/sendRequest"

import ContinueButton from "../../Components/Login/continue-button"
import AppleIcon from "./../../../assets/icons/apple_icon.png"
import GoogleIcon from "./../../../assets/icons/google_icon.png"

export default function SignupWithEmailScreen() {
  const navigation = useNavigation()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const { signInWithGoogle, signInWithApple, setAuthState } = useAuthStore()
  
  const handleBack = () => {
    router.back()
  }

  const handleSubmit = async () => {
    if (!email?.trim() || !password?.trim() || !confirmPassword?.trim() || !phone?.trim()) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match")
      return
    }

    // Basic phone number validation
    if (!/^\d{10,}$/.test(phone.replace(/\D/g, ''))) {
      Alert.alert("Error", "Please enter a valid phone number")
      return
    }

    setLoading(true)
    try {
      const response = await sendRequest.post('/users/auth/register', {
        email: email.trim(),
        password: password.trim(),
        phone: phone.trim().replace(/\D/g, ''),
      });

      // Update auth store with user data
      setAuthState({
        token: response.token,
        user: response.user,
        profile: response.profile
      });

      // Navigate to name screen for profile completion
      navigation.navigate("name");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.error || "Failed to sign up");
    } finally {
      setLoading(false);
    }
  }

  const handleGoogleSignup = async () => {
    try {
      setLoading(true)
      await signInWithGoogle()
      navigation.navigate("name")
    } catch (error) {
      console.error(error)
      Alert.alert("Error", error.message || "Failed to sign up with Google")
    } finally {
      setLoading(false)
    }
  }

  const handleAppleSignup = async () => {
    try {
      setLoading(true)
      await signInWithApple()
      navigation.navigate("name")
    } catch (error) {
      console.error(error)
      Alert.alert("Error", error.message || "Failed to sign up with Apple")
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <ArrowLeft size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Create an account</Text>

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
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phone || ''}
          onChangeText={(text) => setPhone(text?.replace(/\D/g, '') || '')}
          keyboardType="phone-pad"
          maxLength={15}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      <ContinueButton 
        onPress={handleSubmit} 
        text={loading ? "Creating account..." : "Sign Up"} 
        disabled={!email || !password || !confirmPassword || loading} 
      />

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity 
        style={styles.socialButton} 
        onPress={handleGoogleSignup}
        disabled={loading}
      >
        <View style={styles.socialIcon}>
          <Image source={GoogleIcon} style={{ width: 20, height: 20 }} />
        </View>
        <Text style={styles.socialText}>Sign up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.socialButton} 
        onPress={handleAppleSignup}
        disabled={loading}
      >
        <View style={styles.socialIcon}>
          <Image source={AppleIcon} style={{ width: 20, height: 20 }} />
        </View>
        <Text style={styles.socialText}>Sign up with Apple</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text style={styles.footerLink} onPress={() => navigation.navigate("login")}>
            Login
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