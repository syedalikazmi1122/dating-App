import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '../../Components/Login/headers';
import { ProgressBar } from '../../Components/Login/progress-bar';
import ContinueButton from '../../Components/Login/continue-button';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const PhotoUploadScreen = ({ navigation }) => {
  const [photos, setPhotos] = useState([null, null, null]);

  const handlePhotoUpload = (index) => {
    console.log('Upload photo at index:', index);
  };

  const renderPhotoSlot = (index) => {
    if (photos[index]) {
      return (
        <Image
          source={{ uri: photos[index] }}
          style={styles.photoPreview}
        />
      );
    }

    return (
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handlePhotoUpload(index)}
      >
        <Text style={styles.plusIcon}>+</Text>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#D1FAF3']}
      style={styles.container}
    >
      <View style={styles.headerRow}>
        <Header onBack={() => navigation.goBack()} />
        <ProgressBar currentStep={9} totalSteps={10} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Upload Your Photo</Text>
        <Text style={styles.subtitle}>
          We'd love to see you. Upload a photo for{'\n'}your dating journey.
        </Text>

        {/* Main Photo Preview */}
        <View style={styles.mainPhotoContainer}>
          <Image
            source={require('./../../../assets/images/placeholder-profile.png')}
            style={styles.mainPhoto}
          />
        </View>

        {/* Photo Upload Buttons Row */}
        <View style={styles.photoButtonsRow}>
          {[0, 1, 2].map((index) => (
            <View key={index} style={styles.photoSlotContainer}>
              {renderPhotoSlot(index)}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
      {/* SVG */}
      <View style={styles.svgContainer}>
        <Svg width={width} height={height * 0.1} viewBox={`0 26 ${width} ${height * 0.1}`} fill="none">
          <Path opacity="0.55" d="M0 1C7.64493 39.3817 84.537 114.909 183.478 79.3462C282.557 43.7343 345.032 67.1364 375 98" stroke="#F64775" strokeWidth="2" strokeDasharray="8 8" />
        </Svg>
      </View>

        <ContinueButton
          onPress={() => navigation.navigate("addlocation")}
          style={styles.continueButton}
          textStyle={styles.continueText}
          text="Continue"
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: height * 0.05,
    paddingHorizontal: width * 0.04,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.05,
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
  },
  mainPhotoContainer: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: height * 0.03,
  },
  mainPhoto: {
    width: '100%',
    height: '100%',
  },
  photoButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: width * 0.04,
  },
  photoSlotContainer: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#FF5862',
    overflow: 'hidden',
  },
  uploadButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  plusIcon: {
    fontSize: width * 0.06,
    color: '#FF5862',
  },
  photoPreview: {
    width: '100%',
    height: '100%',
  },
  svgContainer: {
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: height * 0.03,
  },
  continueButton: {
    backgroundColor: '#63C5BA',
    borderRadius: 12,
    marginHorizontal: width * 0.06,
  },
  continueText: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: '600',
  },
});

export default PhotoUploadScreen;