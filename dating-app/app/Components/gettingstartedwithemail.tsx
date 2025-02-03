import React from "react";
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import BackgroundGirl from "./../../assets/images/homebackgroundgirl.png";
import GoogleIcon from "./../../assets/icons/google_icon.png";
import AppleIcon from "./../../assets/icons/apple_icon.png";

const { width, height } = Dimensions.get("window");

export default function Index() {
  return (
    <ImageBackground source={BackgroundGirl} style={styles.background}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.topHeader}>
          <View style={styles.languageContainer}>
            <FontAwesome5 name="globe-americas" size={18} color="white" />
            <Text style={styles.languageText}>English</Text>
          </View>
          <FontAwesome5 name="question-circle" size={20} style={{ marginTop: 6 }} color="white" />
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={styles.iconContainer}>
                <Image source={GoogleIcon} style={{ width: 20, height: 20 }} />
              </View>
              <Text style={styles.buttonText}>Login with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={styles.iconContainer}>
                <Image source={AppleIcon} style={{ width: 20, height: 20 }} />
              </View>
              <Text style={styles.buttonText}>Login with Apple</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.emailButtonText}>Continue with Email</Text>

          {/* Footer Section */}
          <Text style={styles.footerText}>
            By Continuing you agree to our <Text style={styles.link}>Terms</Text>
            {" & "}
            <Text style={styles.link}>Privacy</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 44, // Accounts for iOS status bar
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  languageText: {
    color: "white",
    fontSize: 14,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 44,
    left: 20,
    right: 20,
  },
  button: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.29)",
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    backgroundColor: "white",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  buttonText: {
    color: "#FF5862",
    fontSize: 16,
    fontWeight: "800",
    marginLeft: 12,
    flex: 1,
  },
  emailButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  footerText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  link: {
    color: "#FF5862",
    textDecorationLine: "underline",
  },
});

