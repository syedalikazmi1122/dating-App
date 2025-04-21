"use client"

import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, TextInput, ScrollView } from "react-native"
import { useNavigation, useRouter } from "expo-router"
import { ArrowLeft } from "lucide-react-native"
import axios from 'axios'
import PhoneInput from "react-native-phone-number-input"

export default function UserDetailsScreen() {
  const navigation = useNavigation()
  const router = useRouter()
  const phoneInput = useRef(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phoneNumber: "",
    interests: [],
    bio: ""
  })

  const handleBack = () => {
    router.back()
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.age || !formData.gender || !formData.phoneNumber) {
      Alert.alert("Error", "Please fill in all required fields")
      return
    }

    setLoading(true)
    try {
      const response = await axios.put('http://your-backend-url/api/users/profile', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.data) {
        Alert.alert("Success", "Profile updated successfully");
        navigation.navigate("home");
      }
    } catch (error) {
      console.error(error)
      Alert.alert("Error", error.response?.data?.error || "Failed to update profile")
    } finally {
      setLoading(false)
    }
  }

  const handleInterestSelect = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const interests = [
    "Travel", "Music", "Sports", "Movies", "Reading",
    "Cooking", "Photography", "Art", "Technology", "Fitness"
  ]

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <ArrowLeft size={24} color="#000" />
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Complete Your Profile</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={formData.name}
            onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Age *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            value={formData.age}
            onChangeText={(text) => setFormData(prev => ({ ...prev, age: text }))}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender *</Text>
          <View style={styles.genderContainer}>
            {["Male", "Female", "Other"].map((gender) => (
              <TouchableOpacity
                key={gender}
                style={[
                  styles.genderButton,
                  formData.gender === gender && styles.genderButtonSelected
                ]}
                onPress={() => setFormData(prev => ({ ...prev, gender }))}
              >
                <Text style={[
                  styles.genderText,
                  formData.gender === gender && styles.genderTextSelected
                ]}>
                  {gender}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number *</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={formData.phoneNumber}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => setFormData(prev => ({ ...prev, phoneNumber: text }))}
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.textContainer}
            textInputStyle={styles.textInput}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Interests</Text>
          <View style={styles.interestsContainer}>
            {interests.map((interest) => (
              <TouchableOpacity
                key={interest}
                style={[
                  styles.interestButton,
                  formData.interests.includes(interest) && styles.interestButtonSelected
                ]}
                onPress={() => handleInterestSelect(interest)}
              >
                <Text style={[
                  styles.interestText,
                  formData.interests.includes(interest) && styles.interestTextSelected
                ]}>
                  {interest}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={[styles.input, styles.bioInput]}
            placeholder="Tell us about yourself"
            value={formData.bio}
            onChangeText={(text) => setFormData(prev => ({ ...prev, bio: text }))}
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.submitButtonText}>
            {loading ? "Saving..." : "Complete Profile"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 32,
  },
  inputContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "rgba(255,95,88,0.15)",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderButton: {
    flex: 1,
    marginHorizontal: 4,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "rgba(255,95,88,0.15)",
    alignItems: 'center',
  },
  genderButtonSelected: {
    backgroundColor: "#7ACCC7",
  },
  genderText: {
    fontSize: 16,
    color: "#666",
  },
  genderTextSelected: {
    color: "white",
    fontWeight: "600",
  },
  phoneInputContainer: {
    backgroundColor: "rgba(255,95,88,0.15)",
    borderRadius: 8,
    height: 55,
  },
  textContainer: {
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  textInput: {
    fontSize: 16,
    paddingVertical: 0,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  interestButton: {
    margin: 4,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "rgba(255,95,88,0.15)",
  },
  interestButtonSelected: {
    backgroundColor: "#7ACCC7",
  },
  interestText: {
    fontSize: 14,
    color: "#666",
  },
  interestTextSelected: {
    color: "white",
    fontWeight: "600",
  },
  submitButton: {
    backgroundColor: "#7ACCC7",
    marginHorizontal: 24,
    marginBottom: 32,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
}) 