import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  SafeAreaView
} from 'react-native';

import { Header } from "../../Components/Login/headers"
import { ProgressBar } from "../../Components/Login/progress-bar"

import Svg, { Path, Mask, Rect, G } from "react-native-svg"
const SelectionScreen = ({}) => {
  const [selected, setSelected] = useState('father'); // Default selection

  const handleContinue = () => {
    // if (onContinue) {
    //   onContinue(selected);
    // }
  };

  return (
    <>

    <SafeAreaView style={styles.container}>
       <View style={{ display: "flex", flexDirection: "row" }}>
              <Header onBack={() => navigation.goBack()} />
              <ProgressBar currentStep={2} totalSteps={10} />
            </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Are You Handling This Yourself Or Is Your Father?
        </Text>

        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={[
              styles.optionContainer, 
              selected === 'myself' && styles.optionContainerSelected
            ]}
            onPress={() => setSelected('myself')}
          >
            <Text style={[
              styles.optionText,
              selected === 'myself' && styles.optionTextSelected
            ]}>
              Myself
            </Text>
            <View style={[
              styles.radioButton,
              selected === 'myself' && styles.radioButtonSelected
            ]}>
              {selected === 'myself' && <View style={styles.radioButtonInner} />}
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.optionContainer, 
              selected === 'father' && styles.optionContainerSelected
            ]}
            onPress={() => setSelected('father')}
          >
            <Text style={[
              styles.optionText,
              selected === 'father' && styles.optionTextSelected
            ]}>
              Father
            </Text>
            <View style={[
              styles.radioButton,
              selected === 'father' && styles.radioButtonSelected
            ]}>
              {selected === 'father' && <View style={styles.radioButtonInner} />}
            </View>
          </TouchableOpacity>
        </View>
      </View>
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

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
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
  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
    color: '#000000',
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 54,
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'transparent',
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
    backgroundColor: 'transparent',
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
  svgContainer: {
    alignItems: "center",
    marginTop: 32,
  },
});

export default SelectionScreen;