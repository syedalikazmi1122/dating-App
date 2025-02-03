import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Header } from "../../Components/Login/headers";
import { ProgressBar } from "../../Components/Login/progress-bar";
import ContinueButton from "../../Components/Login/continue-button";
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from "expo-router";

const LookingForScreen = ({  }) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('casual');

  const options = [
    { id: 'relationship', label: 'A relationship' },
    { id: 'casual', label: 'Something casual' },
    { id: 'unsure', label: "I'm not sure yet" },
    { id: 'prefer_not', label: 'Prefer not to say' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header onBack={() => navigation.goBack()} />
        <ProgressBar currentStep={7} totalSteps={10} />
      </View>

      <Text style={styles.title}>I Am Looking For...</Text>
      <Text style={styles.subtitle}>Provide us with further insights into your preferences</Text>

      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionButton,
              selected === option.id && styles.selectedOption
            ]}
            onPress={() => setSelected(option.id)}
          >
            <Text style={[
              styles.optionText,
              selected === option.id && styles.selectedOptionText
            ]}>
              {option.label}
            </Text>
            <View style={[
              styles.radioButton,
              selected === option.id && styles.selectedRadio
            ]}>
              {selected === option.id && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.svgContainer}>
        <Svg width="375" height="99" viewBox="0 22 375 99" fill="none">
          <Path opacity="0.25" d="M0 1C7.64493 39.3817 84.537 114.909 183.478 79.3462C282.557 43.7343 345.032 67.1364 375 98" stroke="#F64775" strokeWidth="2" strokeDasharray="8 8" />
        </Svg>
      </View>

      <View style={styles.buttonContainer}>
        <ContinueButton
          onPress={() => navigation.navigate("interests")}
          disabled={!selected}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 44,
    paddingHorizontal: 16,
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
    paddingHorizontal: 40,
  },
  optionsContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    backgroundColor: 'white',
  },
  selectedOption: {
    borderColor: '#68D391',
  },
  optionText: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '400',
  },
  selectedOptionText: {
    color: 'black',
    fontWeight: '800',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E5EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadio: {
    borderColor: '#68D391',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#68D391',
    backgroundColor: 'white',
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

export default LookingForScreen;