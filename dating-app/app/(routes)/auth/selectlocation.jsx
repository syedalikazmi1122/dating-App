import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import { Header } from '../../Components/Login/headers';
import { ProgressBar } from '../../Components/Login/progress-bar';
import ContinueButton from '../../Components/Login/continue-button';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const LocationScreen = ({ navigation }) => {
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [locationData, setLocationData] = useState({
    country: '',
    state: '',
    city: '',
    postalCode: '',
  });

  const handleLocationAccess = () => {
    // Implement location access logic here
    console.log('Requesting location access');
  };

  const handleManualSubmit = () => {
    // Handle manual location submission
    console.log('Manual location data:', locationData);
    navigation.navigate('next-screen');
  };

  const renderManualEntry = () => (
    <ScrollView style={styles.manualEntryContainer}>
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={locationData.country}
        onChangeText={(text) => setLocationData({ ...locationData, country: text })}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="State/Province"
        value={locationData.state}
        onChangeText={(text) => setLocationData({ ...locationData, state: text })}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={locationData.city}
        onChangeText={(text) => setLocationData({ ...locationData, city: text })}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Postal Code"
        value={locationData.postalCode}
        onChangeText={(text) => setLocationData({ ...locationData, postalCode: text })}
        placeholderTextColor="#999"
        keyboardType="number-pad"
      />
      <ContinueButton
        onPress={handleManualSubmit}
        style={styles.continueButton}
        textStyle={styles.continueText}
        text="Continue"
        disabled={!Object.values(locationData).every(value => value.trim())}
      />
    </ScrollView>
  );

  const renderInitialView = () => (
    <View style={styles.content}>
      <Image
        source={require('./../../../assets/images/selectlocation.png')}
        style={styles.locationIcon}
        resizeMode="contain"
      />
      <Text style={styles.title}>Enable Your Location</Text>
      <Text style={styles.subtitle}>Choose your location to start find people around you</Text>
      
      <TouchableOpacity
        style={styles.allowButton}
        onPress={handleLocationAccess}
      >
        <Text style={styles.allowButtonText}>Allow Location Access</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => setShowManualEntry(true)}
        style={styles.manualButton}
      >
        <Text style={styles.manualButtonText}>Enter Location Manually</Text>
      </TouchableOpacity>

      {/* Add SVG here */}
      <View style={styles.svgContainer}>
        <Svg width={width} height={height * 0.1} viewBox={`0 20 ${width} ${height * 0.1}`} fill="none">
          <Path opacity="0.55" d="M0 1C7.64493 39.3817 84.537 114.909 183.478 79.3462C282.557 43.7343 345.032 67.1364 375 98" stroke="#F64775" strokeWidth="2" strokeDasharray="8 8" />
        </Svg>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Header onBack={() => navigation.goBack()} />
        <ProgressBar currentStep={9} totalSteps={10} />
      </View>

      {showManualEntry ? renderManualEntry() : renderInitialView()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.1,
    justifyContent :'space-around',
    paddingTop: height * 0.05,
    // paddingHorizontal: width * 0.05,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.05,
  },
  locationIcon: {
    width: width * 0.6,
    height: height * 0.3,
    marginBottom: height * 0.03,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: height * 0.01,
    color: '#000000',
  },
  subtitle: {
    fontSize: width * 0.04,
    color: '#666',
    textAlign: 'center',
    marginBottom: height * 0.03,
    paddingHorizontal: width * 0.05,
  },
  allowButton: {
    backgroundColor: '#63C5BA',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.08,
    borderRadius: 30,
    width: '100%',
    marginBottom: height * 0.02,
  },
  allowButtonText: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: '600',
    textAlign: 'center',
  },
  manualButton: {
    paddingVertical: height * 0.015,
  },
  manualButtonText: {
    color: '#63C5BA',
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  manualEntryContainer: {
    flex: 1,
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.03,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12,
    padding: height * 0.02,
    marginBottom: height * 0.02,
    fontSize: width * 0.04,
    backgroundColor: '#F8F8F8',
  },
  continueButton: {
    marginTop: height * 0.03,
    backgroundColor: '#63C5BA',
  },
  continueText: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: '600',
  },
  svgContainer: {
    alignItems: 'center',
    marginTop: height * 0.03,
  },
});

export default LocationScreen;