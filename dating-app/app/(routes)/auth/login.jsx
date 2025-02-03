import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import  ContinueButton  from "../../Components/Login/continue-button";
import { useNavigation } from "expo-router";
import PhoneInput from "react-native-phone-number-input";

import AppleIcon from "./../../../assets/icons/apple_icon.png";
import GoogleIcon from "./../../../assets/icons/google_icon.png";

export default function LoginScreen() {
  const navigation = useNavigation();
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async () => {
    if (phoneInput.current?.isValidNumber(phoneNumber)) {
      navigation.navigate("verification");
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's start with your{"\n"}number</Text>

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

      <ContinueButton onPress={handleSubmit} disabled={!phoneNumber} />

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.socialButton}>
        <View style={styles.socialIcon}>
          <Image source={GoogleIcon} style={{ width: 20, height: 20 }} />
        </View>
        <Text style={styles.socialText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <View style={styles.socialIcon}>
          <Image source={AppleIcon} style={{ width: 20, height: 20 }} />
        </View>
        <Text style={styles.socialText}>Login with Apple</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.footerLink}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
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
});
