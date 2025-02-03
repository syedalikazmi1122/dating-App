import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from '../../Components/Login/headers';
import { ProgressBar } from '../../Components/Login/progress-bar';
import ContinueButton from '../../Components/Login/continue-button';
import Svg, { Path } from 'react-native-svg';

const InterestSelector = ({ navigation }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interests = [
    { id: 1, name: 'Reading', icon: '📚' },
    { id: 2, name: 'Photography', icon: '📷' },
    { id: 3, name: 'Gaming', icon: '🎮' },
    { id: 4, name: 'Music', icon: '🎵' },
    { id: 5, name: 'Travel', icon: '✈️' },
    { id: 6, name: 'Painting', icon: '🎨' },
    { id: 7, name: 'Politics', icon: '📢' },
    { id: 8, name: 'Charity', icon: '🎗' },
    { id: 9, name: 'Cooking', icon: '🍳' },
    { id: 10, name: 'Pets', icon: '🐾' },
    { id: 11, name: 'Sports', icon: '⚽' },
    { id: 12, name: 'Fashion', icon: '👗' }
  ];

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest.id)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest.id));
    } else if (selectedInterests.length < 3) {
      setSelectedInterests([...selectedInterests, interest.id]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Header onBack={() => navigation.goBack()} />
        <ProgressBar currentStep={8} totalSteps={10} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Select Up To 3 Interests</Text>
        <Text style={styles.subtitle}>Tell us what piques your curiosity and passions</Text>

        <View style={styles.interestsGrid}>
          {interests.map((interest) => (
            <TouchableOpacity
              key={interest.id}
              onPress={() => toggleInterest(interest)}
              style={[
                styles.interestButton,
                selectedInterests.includes(interest.id) && styles.selectedInterestButton
              ]}
            >
              <Text style={[
                styles.interestIcon,
                selectedInterests.includes(interest.id) && styles.selectedInterestIcon
              ]}>
                {interest.icon}
              </Text>
              <Text style={[
                styles.interestName,
                selectedInterests.includes(interest.id) && styles.selectedInterestText
              ]}>
                {interest.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.svgContainer}>
          <Svg width="375" height="99" viewBox="0 0 375 99" fill="none">
            <Path opacity="0.25" d="M0 1C7.64493 39.3817 84.537 114.909 183.478 79.3462C282.557 43.7343 345.032 67.1364 375 98" stroke="#F64775" strokeWidth="2" strokeDasharray="8 8" />
          </Svg>
        </View>

        <ContinueButton
          onPress={() => navigation.navigate("uploadimage")}
          disabled={selectedInterests.length === 0}
          style={styles.continueButton}
          textStyle={styles.continueText}
          text="Continue"
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  svgContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 8,
    color: '#000000',
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  interestButton: {
    width: '30%',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  selectedInterestButton: {
    backgroundColor: '#FF5862',
    paddingVertical: 3,
  },
  interestIcon: {
    fontSize: 14,
    marginRight: 4,
    color: '#333',
  },
  selectedInterestIcon: {
    color: 'white',
  },
  interestName: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  selectedInterestText: {
    color: 'white',
  },
  continueButton: {
    marginTop: 20,
  },
  continueText: {
    color: 'white',
  },
});

export default InterestSelector;