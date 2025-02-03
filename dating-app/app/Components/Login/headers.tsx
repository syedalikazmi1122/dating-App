import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

interface HeaderProps {
  onBack?: () => void
}

export function Header({ onBack }: HeaderProps) {
  return (
    <View style={styles.header}>
      {onBack && (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 44,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  backButton: {
    // padding: 2,
    marginRight: 16,
    marginTop: 12,
  },
})

