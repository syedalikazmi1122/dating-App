import { ArrowLeft } from 'lucide-react-native';
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

const religions = [
  "Hinduism",
  "Islam",
  "Christianity",
  "Judaism"
];

const ReligionScreen = ({ onContinue, onBack }) => {
  const [selectedReligion, setSelectedReligion] = useState("Islam");

  const handleContinue = () => {
    if (onContinue && selectedReligion) {
      onContinue(selectedReligion);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} >
          <ArrowLeft 
            size={16} 
            color="black" 
            
          />
        </TouchableOpacity>
        
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressFilled} />
          </View>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>What's Your Religion?</Text>

      {/* Religion Options */}
      <ScrollView style={styles.optionsContainer}>
        {religions.map((religion, index) => (
          <TouchableOpacity 
            key={index}
            style={[
              styles.optionContainer, 
              selectedReligion === religion && styles.optionContainerSelected
            ]}
            onPress={() => setSelectedReligion(religion)}
          >
            <Text style={[
              styles.optionText,
              selectedReligion === religion && styles.optionTextSelected
            ]}>
              {religion}
            </Text>
            <View style={[
              styles.radioButton,
              selectedReligion === religion && styles.radioButtonSelected
            ]}>
              {selectedReligion === religion && <View style={styles.radioButtonInner} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Background SVG (represented as a View with styles) */}
      <View style={styles.backgroundSvg} />
    </SafeAreaView>
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
    width: 32,
    height: 32,
    backgroundColor: '#0084FF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
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
    width: '40%', // Adjust based on progress
    height: 8,
    backgroundColor: '#76CABB',
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 25,
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
    position: 'absolute',
    width: '100%',
    height: 100,
    bottom: 150,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#F64775',
    borderRadius: 50,
    opacity: 0.25,
    zIndex: -1,
  },
});

export default ReligionScreen;