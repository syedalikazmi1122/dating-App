import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, SafeAreaView } from "react-native";
import { Header } from "./../../Components/Login/headers";
import { ProgressBar } from "./../../Components/Login/progress-bar";
import ContinueButton from "../../Components/Login/continue-button";
import Svg, { Path, Mask, Rect, G } from 'react-native-svg';

const ITEM_HEIGHT = 50;
const VISIBLE_ITEMS = 7;
const MIDDLE_INDEX = Math.floor(VISIBLE_ITEMS / 2);
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const AgePickerScreen = ({ navigation }) => {
  const [selectedAge, setSelectedAge] = useState(31);
  const scrollViewRef = useRef(null);
  const ages = Array.from({ length: 100 }, (_, i) => i + 18);

  useEffect(() => {
    if (scrollViewRef.current) {
      const initialY = (selectedAge - 18) * ITEM_HEIGHT;
      scrollViewRef.current.scrollTo({
        y: initialY,
        animated: false,
      });
    }
  }, []);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.floor(offsetY / ITEM_HEIGHT);
    const newAge = ages[index];
    if (newAge && newAge !== selectedAge) {
      setSelectedAge(newAge);
    }
  };

  const handleMomentumScrollEnd = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: index * ITEM_HEIGHT,
        animated: true,
      });

      const newAge = ages[index];
      if (newAge) {
        setSelectedAge(newAge);
      }
    }
  };

  const getAgeStyle = (age) => {
    if (age === selectedAge) {
      return {
        fontSize: 38,  // Increased size for selected
        color: '#5DD1BE',
        fontWeight: '700', // Made bolder
        opacity: 1,
      };
    }

    const distance = Math.abs(age - selectedAge);
    const opacity = Math.max(0.15, 1 - (distance * 0.25));

    // Gradually decrease size based on distance
    const fontSize = Math.max(20, 32 - (distance * 2));

    return {
      fontSize,
      color: '#8E8E93',
      fontWeight: '400',
      opacity,
    };
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <View style={styles.backButton}>
            <Header onBack={() => navigation.goBack()} />
          </View>
          <View style={styles.progressBarContainer}>
            <ProgressBar currentStep={5} totalSteps={10} />
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>How Old Are You?</Text>
          <Text style={styles.subtitle}>Please provide your age in years</Text>

          <View style={styles.pickerContainer}>
            <View style={styles.selectionIndicator}>
              <View style={styles.line} />
              <View style={[styles.line, styles.bottomLine]} />
            </View>

            <ScrollView
              ref={scrollViewRef}
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
              snapToInterval={ITEM_HEIGHT}
              decelerationRate="fast"
              onScroll={handleScroll}
              onMomentumScrollEnd={handleMomentumScrollEnd}
              scrollEventThrottle={16}
              contentContainerStyle={{
                paddingTop: ITEM_HEIGHT * MIDDLE_INDEX,
                paddingBottom: ITEM_HEIGHT * MIDDLE_INDEX
              }}
            >
              {ages.map((age) => (
                <View key={age} style={styles.ageItem}>
                  <Text style={[styles.ageText, getAgeStyle(age)]}>
                    {age}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.svgContainer}>
            <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT * 0.3} viewBox="0 0 375 219" fill="none">
              <Path opacity="0.55" d="M375 122C367.355 88.7622 290.463 23.3573 191.522 54.1538C92.4433 84.993 29.9681 64.7273 0 38" stroke="#76CABB" strokeWidth="2" strokeDasharray="8 8" />
              <Mask id="mask0_51_2431" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="33" y="0" width="335" height="219">
                <Rect x="33.848" width="334.026" height="219" fill="#D9D9D9" />
              </Mask>
              <G mask="url(#mask0_51_2431)">
              </G>
            </Svg>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <ContinueButton
            onPress={() => navigation.navigate("gender")}
            disabled={!selectedAge}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 44,
    paddingHorizontal: 16,
    height: 60,
  },
  backButton: {
    flex: 0,
    marginRight: 16,
  },
  progressBarContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: "center",
    marginBottom: 32,
  },
  pickerContainer: {
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    position: 'relative',
    marginBottom: 32,
  },
  selectionIndicator: {
    position: 'absolute',
    top: ITEM_HEIGHT * MIDDLE_INDEX,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    pointerEvents: 'none',
    zIndex: 1,
  },
  line: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#5DD1BE',
    top: 0,
  },
  bottomLine: {
    top: 'auto',
    bottom: 0,
  },
  scrollView: {
    flex: 1,
  },
  ageItem: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ageText: {
    textAlign: 'center',
  },
  svgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100, // Minimum height for SVG
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20, // Add padding at the bottom
    width: '100%',
  },
});

export default AgePickerScreen;