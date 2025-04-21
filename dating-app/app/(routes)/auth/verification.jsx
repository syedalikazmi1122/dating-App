"use client"

import { useState, useRef } from "react"
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from "react-native"
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth"
import { auth } from "../../config/firebase"

import { Header } from "../../Components/Login/headers"
import { ProgressBar } from "../../Components/Login/progress-bar"
import ContinueButton from "../../Components/Login/continue-button"
import Svg, { Path, Mask, Rect, G } from "react-native-svg"

export function VerificationScreen({ route, navigation }) {
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const [loading, setLoading] = useState(false)
  const inputRefs = useRef([])

  // Get the verification ID and phone number from route params
  const { verificationId, phoneNumber } = route.params || {}

  // Check if verificationId exists
  if (!verificationId) {
    Alert.alert("Error", "Verification ID is missing. Please go back and try again.", [
      { text: "Go Back", onPress: () => navigation.goBack() },
    ])
  }

  const handleCodeChange = (text, index) => {
    // Only allow digits
    if (!/^\d*$/.test(text)) return

    const newCode = [...code]
    newCode[index] = text
    setCode(newCode)

    // Auto-advance to next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyPress = (e, index) => {
    // Handle backspace to go to previous input
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async () => {
    const verificationCode = code.join("")
    if (verificationCode.length !== 6) {
      Alert.alert("Error", "Please enter the complete verification code")
      return
    }

    setLoading(true)
    try {
      // Create the credential
      const credential = PhoneAuthProvider.credential(verificationId, verificationCode)

      // Sign in with the credential
      const userCredential = await signInWithCredential(auth, credential)

      // Successfully verified and signed in
      console.log("User signed in:", userCredential.user)

      // Navigate to the next screen
      navigation.navigate("name")
    } catch (error) {
      console.error(error)
      Alert.alert("Error", error.message || "Invalid verification code")
    } finally {
      setLoading(false)
    }
  }

  const handleResendCode = () => {
    // Go back to the login screen to request a new code
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Header onBack={() => navigation.goBack()} />
        <ProgressBar currentStep={2} totalSteps={10} />
      </View>

      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>
        Please enter code we just sent to{"\n"}
        <Text style={{ fontWeight: "bold" }}>{phoneNumber || "+91 99292 77633"}</Text>
      </Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              if (ref) inputRefs.current[index] = ref
            }}
            style={styles.codeInput}
            value={digit}
            onChangeText={(text) => handleCodeChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>

      <TouchableOpacity onPress={handleResendCode}>
        <Text style={styles.resendText}>
          Didn't receive OTP?{"\n"}
          <Text style={styles.resendLink}>Resend Code</Text>
        </Text>
      </TouchableOpacity>

      <ContinueButton
        onPress={handleSubmit}
        text={loading ? "Verifying..." : "Verify"}
        disabled={code.some((digit) => !digit) || loading}
      />

      <View style={styles.svgContainer}>
        <Svg width="375" height="327" viewBox="0 0 375 327" fill="none">
          <Mask
            id="mask0_51_2305"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="375"
            height="327"
          >
            <Rect width="375" height="327" fill="#D9D9D9" />
          </Mask>
          <G mask="url(#mask0_51_2305)">
            <Path
              opacity="0.55"
              d="M383 163C374.417 129.762 288.093 64.3573 177.015 95.1538C65.7831 125.993 -4.35578 105.727 -38 79"
              stroke="#F64775"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </G>
        </Svg>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 32,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
  codeInput: {
    width: 45,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,98,88,0.15)",
    marginHorizontal: 5,
    fontSize: 24,
    textAlign: "center",
  },
  resendText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    marginBottom: 32,
  },
  resendLink: {
    color: "#7ACCC7",
    fontWeight: "600",
  },
  svgContainer: {
    alignItems: "center",
    marginTop: 32,
  },
})

export default VerificationScreen

