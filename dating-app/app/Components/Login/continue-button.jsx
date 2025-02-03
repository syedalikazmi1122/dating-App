import React from "react"
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native"


export default function ContinueButton({ onPress, disabled = false, loading = false, text = "Continue" }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>{text}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#76CABB",
    borderRadius: 30,
    paddingVertical: 16,
    marginHorizontal: 24,
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})

