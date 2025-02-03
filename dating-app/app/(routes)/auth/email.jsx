import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import { Header } from "./../../Components/Login/headers";
import { ProgressBar } from "./../../Components/Login/progress-bar";
import ContinueButton from "../../Components/Login/continue-button";
import Svg, { Path, Mask, Rect, G } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const EmailInputScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    // Implement email submission logic
    navigation.navigate("dob"); // Replace with your next screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Header onBack={() => navigation.goBack()} />
        <ProgressBar currentStep={4} totalSteps={10} />
      </View>

      <Text style={styles.title}>Email Address</Text>
      <Text style={styles.subtitle}>We will need your email to stay in touch</Text>

      <TextInput
        style={styles.textInput}
        placeholder="example@email.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <ContinueButton onPress={handleContinue} disabled={!email} />
      <View style={styles.svgContainer}>
        <Svg width={width} height={height * 0.3} viewBox={`18 1 ${width} ${height * 0.3}`} fill="none">
          <Mask id="mask0_51_2426" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height * 0.3}>
            <Rect width={width} height={height * 0.3} fill="#D9D9D9" />
          </Mask>
          <G mask="url(#mask0_51_2426)">
            <Path opacity="0.75" d="M393 114C384.833 145.655 302.689 207.945 196.99 178.615C91.1446 149.245 32.015 228.545 1.07288e-05 254" stroke="#F64775" strokeWidth="2" strokeDasharray="8 8" />
          </G>
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: height * 0.05,
    paddingHorizontal: width * 0.04,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "700",
    textAlign: "center",
    marginTop: height * 0.04,
    marginBottom: height * 0.01,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: "#666666",
    textAlign: "center",
    marginBottom: height * 0.03,
  },
  textInput: {
    fontSize: width * 0.04,
    padding: height * 0.02,
    borderWidth: 1,
    borderColor: "#76CABB",
    borderRadius: 24,
    marginHorizontal: width * 0.06,
    marginBottom: height * 0.03,
  },
  svgContainer: {
    alignItems: 'center',
    marginTop: height * 0.08,
  },
});

export default EmailInputScreen;