import React, { useState, useRef } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { Header } from "./../../Components/Login/headers";
import { ProgressBar } from "./../../Components/Login/progress-bar"
import ContinueButton from "../../Components/Login/continue-button"
import Svg, { Path, Mask, Rect, G } from 'react-native-svg';

export function VerificationScreen({ navigation }: any) {
  const [code, setCode] = useState(["", "", "", ""])
  const inputRefs = useRef<TextInput[]>([])

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code]
    newCode[index] = text
    setCode(newCode)

    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleSubmit = async () => {
    // Implement verification logic
    navigation.navigate("name")
  }

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Header onBack={() => navigation.goBack()} />
        <ProgressBar currentStep={2} totalSteps={10} />
      </View>

      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>Please enter code we just sent to{"\n"}
        <Text style={{ fontWeight: "bold" }}>+91 99292 77633</Text>
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
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>

      <Text style={styles.resendText}>
        Didn't receive OTP?{"\n"}<Text style={styles.resendLink}>Resend Code</Text>
      </Text>

      <ContinueButton onPress={handleSubmit} text="Verify" disabled={code.some((digit) => !digit)} />
      <View style={styles.svgContainer}>
        <Svg width="375" height="327" viewBox="0 0 375 327" fill="none">
          <Mask id="mask0_51_2305" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="375" height="327">
            <Rect width="375" height="327" fill="#D9D9D9" />
          </Mask>
          <G mask="url(#mask0_51_2305)">
            <Path opacity="0.55" d="M383 163C374.417 129.762 288.093 64.3573 177.015 95.1538C65.7831 125.993 -4.35578 105.727 -38 79" stroke="#F64775" strokeWidth="2" strokeDasharray="8 8" />
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
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,98,88,0.15)',
    marginHorizontal: 8,
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
    alignItems: 'center',
    marginTop: 32,
  },
})

export default VerificationScreen;