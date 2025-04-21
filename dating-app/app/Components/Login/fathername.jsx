
import { ArrowLeft } from 'lucide-react-native';
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  StatusBar
} from 'react-native';
import Svg, { Path, Mask, Rect, G } from "react-native-svg"

const FatherContactScreen = ({ onContinue, onBack }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  // Country code state (in a real app, you'd likely have a country picker)
  const [countryCode, setCountryCode] = useState('+91');

  const handleContinue = () => {
    if (onContinue && phoneNumber) {
      onContinue(`${countryCode}${phoneNumber}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <ArrowLeft size={20} color="#000" />
        </TouchableOpacity>
        
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressFilled} />
          </View>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>My father is</Text>
        <Text style={styles.subtitle}>Please enter your father's contact number</Text>

        {/* Phone Input */}
        <View style={styles.phoneInputContainer}>
          {/* Country Code Selector */}
          <TouchableOpacity style={styles.countryCodeContainer}>
            {/* <Image 
              source={require('./assets/india-flag.png')} 
              style={styles.flagIcon}
              // You'll need to add a flag image to your assets
            /> */}
            <Text style={styles.countryCodeText}>{countryCode}</Text>
            <Text style={styles.downArrow}>▼</Text>
          </TouchableOpacity>

          {/* Phone Number Input */}
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter phone number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      </View>

      {/* Continue Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={[
            styles.continueButton, 
            !phoneNumber && styles.continueButtonDisabled
          ]} 
          onPress={handleContinue}
          disabled={!phoneNumber}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

<View>
  <Svg width="361" height="341" viewBox="0 0 361 341" fill="none">
    <Mask id="mask0_666_12593" maskUnits="userSpaceOnUse" x="0" y="0" width="375" height="341">
      <Rect width="375" height="341" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_666_12593)">
      <Path
        opacity="0.25"
        d="M409 63C409 63 363 193 267 216C154.287 243.004 40.3186 220.324 19.5358 151.793C3.19054 97.8947 36.53 22.5529 128.037 27.2055C192.391 30.4775 222.293 82.3355 219.98 118.449C211.469 251.348 -28 307 -28 307"
        stroke="#F64775"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
    </G>
  </Svg>
</View>
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
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  progressContainer: {
    flex: 1,
    marginLeft: 15,
    height: 4,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#FFD6D6',
    borderRadius: 2,
  },
  progressFilled: {
    width: '30%', // Adjust based on progress
    height: 4,
    backgroundColor: '#76CABB',
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 25,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFE8E8',
    borderRadius: 25,
    marginTop: 10,
    overflow: 'hidden',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: '#FFCACA',
    paddingRight: 10,
  },
  flagIcon: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  countryCodeText: {
    fontSize: 14,
    color: '#333',
    marginRight: 5,
  },
  downArrow: {
    fontSize: 10,
    color: '#666',
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000000',
  },
  bottomContainer: {
    paddingHorizontal: 25,
    paddingBottom: 30,
  },
  continueButton: {
    backgroundColor: '#76CABB',
    borderRadius: 50,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonDisabled: {
    opacity: 0.7,
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

export default FatherContactScreen;