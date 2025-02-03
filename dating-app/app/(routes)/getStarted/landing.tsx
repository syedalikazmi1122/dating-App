import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions, Animated } from "react-native";
import LandingwithEmail from "@/app/Components/gettingstartedwithemail";
import Landing2 from "@/app/Components/gettingstartedwithphone";

const { width, height } = Dimensions.get("window");

export default function Landing() {
  const [showFirst, setShowFirst] = useState(true);
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
      Animated.timing(translateX, {
        toValue: showFirst ? -width : 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 3000); // Change component every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [showFirst]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedContainer, { transform: [{ translateX }] }]}>
        <View style={styles.page}>
          <LandingwithEmail />
        </View>
        <View style={styles.page}>
          <Landing2 />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
  },
  animatedContainer: {
    flexDirection: "row",
    width: width * 2, // Two pages
    height: '100%', // Ensure it takes full height
  },
  page: {
    width: width,
    height: height, // Ensure each page takes full height
    justifyContent: "center",
    alignItems: "center",
  },
});