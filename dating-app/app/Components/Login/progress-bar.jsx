// ProgressBar.tsx
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";


export function ProgressBar({ currentStep, totalSteps }) {
  return (
    <View style={styles.container}>
      <View 
        style={[
          styles.progress, 
          { width: `${(currentStep / totalSteps) * 100}%` }
        ]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 6,
    backgroundColor: "#F0F0F0",
    borderRadius: 3,
    overflow: "hidden",
    width: Dimensions.get('window').width * 0.5,
    marginTop: 16,
  },
  progress: {
    height: "100%",
    backgroundColor: "#5DD1BE",
    borderRadius: 3,
  },
});

// Usage in your screen component:
const HeaderRow = () => (
  <View style={headerRowStyles.container}>
    <View style={headerRowStyles.backButtonContainer}>
      <Header onBack={() => navigation.goBack()} />
    </View>
    <View style={headerRowStyles.progressContainer}>
      <ProgressBar currentStep={5} totalSteps={10} />
    </View>
  </View>
);

const headerRowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 44,
    paddingHorizontal: 16,
  },
  backButtonContainer: {
    flex: 0,
  },
  progressContainer: {
    flex: 1,
    alignItems: 'center',
  },
});