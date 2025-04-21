import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, StatusBar } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

const CreateGroupScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <View style={styles.backButtonCircle}>
           <ArrowLeft size={24} color="#FF5862" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create a Group</Text>
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        {/* Select members field */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Select members (Max: 4)</Text>
          <View style={styles.iconContainer}>
            <Svg width="24" height="24" viewBox="0 0 24 24">
              <Path 
                d="M8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z" 
                fill="#FF5862" 
              />
              <Path 
                d="M4 13C1.79086 13 0 14.7909 0 17V19C0 19.5523 0.447715 20 1 20H15C15.5523 20 16 19.5523 16 19V17C16 14.7909 14.2091 13 12 13H4Z" 
                fill="#FF5862" 
              />
            </Svg>
          </View>
        </View>

        {/* What is your interested field */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>What is your interested</Text>
          <View style={styles.iconContainer}>
            <Svg width="24" height="24" viewBox="0 0 24 24">
              <Path 
                d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM15 10.5V14.5C15 15.33 14.33 16 13.5 16H10.5C9.67 16 9 15.33 9 14.5V10.5C9 9.67 9.67 9 10.5 9H13.5C14.33 9 15 9.67 15 10.5ZM8 5C8 6.1 7.1 7 6 7C4.9 7 4 6.1 4 5C4 3.9 4.9 3 6 3C7.1 3 8 3.9 8 5ZM20 17C20 18.1 19.1 19 18 19C16.9 19 16 18.1 16 17C16 15.9 16.9 15 18 15C19.1 15 20 15.9 20 17ZM19 10C17.9 10 17 9.1 17 8C17 6.9 17.9 6 19 6C20.1 6 21 6.9 21 8C21 9.1 20.1 10 19 10Z" 
                fill="#FF5862" 
              />
            </Svg>
          </View>
        </View>

        {/* Gender field */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Gender</Text>
          <View style={styles.iconContainer}>
            <Svg width="24" height="24" viewBox="0 0 24 24">
              <Path 
                d="M7 10L12 15L17 10" 
                stroke="#FF5862" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </Svg>
          </View>
        </View>
      </View>

      {/* Create Group Button */}
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create a Group</Text>
      </TouchableOpacity>

      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        <View style={styles.navigationBarIndicator} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  header: {
    width: '100%',
    paddingTop: 59,
    paddingBottom: 20,
    alignItems: 'center',
    position: 'relative',
  },
  headerTitle: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
    color: '#000000',
  },
  backButton: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 20,
    top: 59,
  },
  backButtonCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FDFDFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  inputContainer: {
    boxSizing: 'border-box',
    width: 325,
    height: 54,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#76CABB',
    borderRadius: 100,
    marginBottom: 21,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  inputText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 13.4,
    lineHeight: 16,
    color: '#000000',
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButton: {
    position: 'absolute',
    width: 295,
    height: 56,
    left: 33,
    bottom: 97,
    backgroundColor: '#FF5862',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButtonText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  navigationBar: {
    position: 'absolute',
    height: 24,
    left: 1,
    right: 1,
    bottom: 0,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navigationBarIndicator: {
    width: 108,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
});

export default CreateGroupScreen;