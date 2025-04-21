import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import imageee from './../../../../assets/images/placeholder-profile.png';
const UserProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Profile</Text>
        <TouchableOpacity style={styles.menuContainer}>
          <View style={styles.menuDot} />
          <View style={styles.menuDot} />
          <View style={styles.menuDot} />
        </TouchableOpacity>
      </View>

      {/* Profile Image */}
      <Image
  source={require('./../../../../assets/images/placeholder-profile.png')}
  style={styles.profileImage}
/>
      {/* User Info */}
      <Text style={styles.name}>Alex Johnson</Text>
      <Text style={styles.bio}>Love music and art...</Text>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statContainer}>
          <Text style={styles.statLabel}>Age : </Text>
          <Text style={styles.statValue}>23</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statLabel}>Gender : </Text>
          <Text style={styles.statValue}>Female</Text>
        </View>
      </View>

      {/* Match Score */}
      <View style={styles.matchScoreContainer}>
        <Text style={styles.matchLabel}>Match Score</Text>
        <Text style={styles.matchValue}>95%</Text>
      </View>

      {/* Contact Info */}
      <View style={styles.contactInfo}>
        <View style={styles.contactRow}>
          <View style={styles.iconBg}>
            <Text style={styles.icon}>📞</Text>
          </View>
          <Text style={styles.contactText}>+12 345 6789 0</Text>
        </View>
        <View style={styles.contactRow}>
          <View style={styles.iconBg}>
            <Text style={styles.icon}>✉️</Text>
          </View>
          <Text style={styles.contactText}>ahmadzayn@mail.com</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.approvedButton}>
          <Text style={styles.approvedText}>Approved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectedButton}>
          <Text style={styles.buttonText}>Rejected</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pendingButton}>
          <Text style={styles.pendingText}>Pending</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 26,
  },
  backButton: {
    fontSize: 24,
    color: '#FF5862',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF5862',
    fontFamily: 'Nunito Sans',
  },
  menuContainer: {
    width: 20,
    height: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuDot: {
    width: 4,
    height: 4,
    backgroundColor: '#FF5862',
    borderRadius: 2,
  },
  profileImage: {
    width: 186,
    height: 186,
    borderRadius: 46.07,
    alignSelf: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#202020',
    textAlign: 'center',
    marginTop: 40,
    fontFamily: 'Cairo',
  },
  bio: {
    fontSize: 16,
    color: '#A5A5A5',
    textAlign: 'center',
    marginTop: 12,
    fontFamily: 'Open Sans',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 37,
    gap: 88,
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF5862',
    fontFamily: 'Open Sans',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Open Sans',
  },
  matchScoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 10,
  },
  matchLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF5862',
    fontFamily: 'Open Sans',
  },
  matchValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Open Sans',
  },
  contactInfo: {
    marginTop: 36,
    paddingHorizontal: 16,
    gap: 15,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconBg: {
    width: 35.62,
    height: 35.62,
    backgroundColor: '#F6EEFF',
    borderRadius: 11.87,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 18,
  },
  contactText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#202020',
    fontFamily: 'Open Sans',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    marginTop: 70,
  },
  approvedButton: {
    width: 110,
    height: 29,
    backgroundColor: '#FF5862',
    borderRadius: 2.81,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rejectedButton: {
    width: 109,
    height: 29,
    backgroundColor: '#76CABB',
    borderRadius: 2.81,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pendingButton: {
    width: 110,
    height: 29,
    borderWidth: 1.31,
    borderColor: '#FF5862',
    borderRadius: 2.81,
    justifyContent: 'center',
    alignItems: 'center',
  },
  approvedText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  pendingText: {
    color: '#FF5862',
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
});

export default UserProfile;