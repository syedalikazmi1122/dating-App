import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Svg,G,Mask,Rect, Path } from 'react-native-svg';

const DatingPreferenceScreen = () => {
  const [selectedOption, setSelectedOption] = useState('casual');
  
  const options = [
    { id: 'relationship', label: 'A relationship' },
    { id: 'casual', label: 'Something casual' },
    { id: 'unsure', label: 'I\'m not sure yet' },
    { id: 'marriage', label: 'Marriage' },
  ];

  return (
    <View style={styles.container}>
      {/* Background with blur effect */}
      <View style={styles.backgroundRect} />
      <View style={styles.blurCircle} />
      
      {/* Back button */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>I Am Looking For...</Text>
        <Text style={styles.subheading}>Provide us with further insights into your preferences</Text>
        
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionItem,
                selectedOption === option.id && styles.selectedOption,
              ]}
              onPress={() => setSelectedOption(option.id)}
            >
              <Text style={styles.optionText}>{option.label}</Text>
              <View style={styles.radioButton}>
                {selectedOption === option.id && (
                  <View style={styles.radioButtonInner} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* SVG Path */}
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
        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundRect: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
  },
  
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 15,
    backgroundColor: 'white',
  },
  selectedOption: {
    borderColor: '#76CABB',
    borderWidth: 1,
  },
  optionText: {
    fontSize: 16,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonInner: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#76CABB',
  },
  svgContainer: {
  
  },
  continueButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: '#76CABB',
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DatingPreferenceScreen;