
import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { Feather } from "@expo/vector-icons"
import LoginImage from "./../../assets/images/login_with_phonescreen.png";
import PhoneImage from "./../../assets/icons/phone.png";
const { width } = Dimensions.get("window")
import { useNavigation } from "expo-router";
export default function Landing() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Images Container */}
   <Image source={LoginImage} style={styles.imagesContainer} />

      {/* Text Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Discover Love Where Your{"\n"}Story Begins.</Text>
        <Text style={styles.subtitle}>
          Join us to discover your ideal partner{"\n"}and ignite the sparks of romance in{"\n"}your journey.
        </Text>
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate("Login")}
        >
          <View style={styles.buttonContent}>
            <View style={styles.iconContainer}>
              <Image source={PhoneImage} style={{ width: 20, height: 20 }} />
            </View>
            <Text style={styles.buttonText}>Login with Phone</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40, // iOS status bar height
  },
  imagesContainer: {
    height: width * .9,
    width: width,
    position: "relative",
    marginTop: 20,
  },
  contentContainer: {
    paddingHorizontal: 24,
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    marginTop: 40,
  },
  button: {
    backgroundColor: "#76CABB",
    borderRadius: 25,
    height: 56,
  },

  buttonContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },

  iconContainer: {
    position: "absolute",
    backgroundColor: "white", // Set background color to white
    borderRadius: 20, // Half of the width/height to make it a circle
    width: 40,
    height: 40,
    left: 10,
    // top: 16.,
    justifyContent: "center",
    alignItems: "center", // Center the icon horizontally
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
    paddingVertical: 16,
  },
  signUpContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  signUpText: {
    fontSize: 14,
    color: "#333",
  },
  signUpLink: {
    color: "#7ACCC7",
    fontWeight: "600",
  },
})



