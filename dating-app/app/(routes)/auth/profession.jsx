
import { Header } from '@/app/Components/Login/headers';
import Svg, { Path, Mask, Rect, G } from "react-native-svg"

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView
} from 'react-native';

const professions = [
  "IT & Software",
  "Doctor / Healthcare",
  "Engineer",
  "Business Owner",
  "Teacher / Professor",
  "Artist / Designer"
];

const ProfessionScreen = ({ onContinue, onBack }) => {
  const [selectedProfession, setSelectedProfession] = useState("Doctor / Healthcare");

  const handleContinue = () => {
    if (onContinue && selectedProfession) {
      onContinue(selectedProfession);
    }
  };

  return (
    <>

      {/* Main Container */}
      <SafeAreaView style={styles.container}>
        {/* Status Bar */}
        <StatusBar barStyle="dark-content" />

        {/* Header */}
        <View style={styles.header}>
          <Header />
          <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

        </View>

        {/* Title */}
        <Text style={styles.title}>What Is Your Profeession ?</Text>

        {/* Profession Options */}
        <ScrollView style={styles.optionsContainer}>
          {professions.map((profession, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionContainer,
                selectedProfession === profession && styles.optionContainerSelected
              ]}
              onPress={() => setSelectedProfession(profession)}
            >
              <Text style={[
                styles.optionText,
                selectedProfession === profession && styles.optionTextSelected
              ]}>
                {profession}
              </Text>
              <View style={[
                styles.radioButton,
                selectedProfession === profession && styles.radioButtonSelected
              ]}>
                {selectedProfession === profession && <View style={styles.radioButtonInner} />}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Continue Button */}
       

        {/* Background SVG (represented as a View with styles) */}
        <View style={styles.backgroundSvg} >
          <Svg width="375" height="99" viewBox="0 0 375 99" fill="none">
                     <Path opacity="0.25" d="M0 1C7.64493 39.3817 84.537 114.909 183.478 79.3462C282.557 43.7343 345.032 67.1364 375 98" stroke="#F64775" strokeWidth="2" strokeDasharray="8 8" />
                   </Svg>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  backButton: {
    padding: 5,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  progressContainer: {
    flex: 1,
    marginLeft: 15,
    marginRight: 20,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#FFE9F1',
    borderRadius: 4,
  },
  progressFilled: {
    width: '60%', // Adjust based on progress
    height: 8,
    backgroundColor: '#76CABB',
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000000',
    marginTop: 30,
    marginBottom: 30,
  },
  optionsContainer: {
    flex: 1,
    paddingHorizontal: 25,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 54,
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    // Adding a subtle shadow for non-selected items
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  optionContainerSelected: {
    borderColor: '#76CABB',
    borderWidth: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
  optionTextSelected: {
    fontWeight: '600',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#999999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: '#76CABB',
    borderWidth: 5,
  },
  radioButtonInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#76CABB',
  },
  bottomContainer: {
    paddingHorizontal: 25,
    paddingBottom: 30,
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: '#76CABB',
    borderRadius: 50,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  backgroundSvg: {

    alignItems: "center",
    marginTop: 32,
  },
});

export default ProfessionScreen;