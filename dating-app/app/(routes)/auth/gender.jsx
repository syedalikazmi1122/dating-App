import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Header } from "./../../Components/Login/headers";
import { ProgressBar } from "./../../Components/Login/progress-bar";
import ContinueButton from "../../Components/Login/continue-button";
import MaleIcon from "./../../../assets/icons/malegenderselectionicon.png";
import FemaleIcon from "./../../../assets/icons/femalegenderselectionicon.png";
import Svg, { Path, Mask, Rect, G } from 'react-native-svg';

const GenderPickerScreen = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.backButton}>
          <Header onBack={() => navigation.goBack()} />
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar currentStep={6} totalSteps={10} />
        </View>
      </View>

      <Text style={styles.title}>What's Your Gender?</Text>
      <Text style={styles.subtitle}>Tell us about your gender</Text>

      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            styles.maleButton,
            selectedGender === 'male' && styles.selectedButton
          ]}
          onPress={() => setSelectedGender('male')}
        >
          <Image source={MaleIcon} style={styles.icon} />
          <Text style={[styles.genderText, styles.maleText]}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderButton,
            styles.femaleButton,
            selectedGender === 'female' && styles.selectedButton
          ]}
          onPress={() => setSelectedGender('female')}
        >
          <Image source={FemaleIcon} style={styles.icon} />
          <Text style={[styles.genderText, styles.femaleText]}>Female</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.svgContainer}>
        <Svg width="375" height="198" viewBox="0 0 375 198" fill="none">
          <Mask id="mask0_51_2454" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="375" height="198">
            <Rect width="375" height="198" fill="#D9D9D9" />
          </Mask>
          <G mask="url(#mask0_51_2454)">
            <Path opacity="0.55" d="M-85 0C-75.0922 38.3817 24.56 113.909 152.788 78.3462C281.193 42.7343 362.161 66.1364 401 97" stroke="#F64775" strokeWidth="2" strokeDasharray="8 8" />
          </G>
        </Svg>
      </View>

      <View style={styles.buttonContainer}>
        <ContinueButton
          onPress={() => navigation.navigate("preferences")}
          disabled={!selectedGender}
        />
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
    paddingTop: 44,
    paddingHorizontal: 16,
  },
  backButton: {
    flex: 0,
    marginRight: 16,
  },
  progressBarContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 8,
    color: '#000000',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 17,
    color: "#8E8E93",
    textAlign: "center",
    marginBottom: 40,
    letterSpacing: -0.5,
  },
  genderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  genderButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  maleButton: {
    backgroundColor: '#76CABB',
  },
  femaleButton: {
    backgroundColor: '#F0E4E6',
  },
  selectedButton: {
    transform: [{ scale: 1.05 }],
  },
  genderText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  maleText: {
    color: 'white',
  },
  femaleText: {
    color: 'black',
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  svgContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 32,
    backgroundColor: 'white',
  },
});

export default GenderPickerScreen;