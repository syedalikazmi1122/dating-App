
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Feather, Ionicons, MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';

export default function EventApp() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>12:30</Text>
        <View style={styles.statusIcons}>
          <Text>▶︎ ◼︎ ●</Text>
        </View>
      </View>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="#76CABB" />
        </TouchableOpacity>
        
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={20} color="#76CABB" style={styles.locationIcon} />
          <Text style={styles.locationText}>Rajkot, Gujarat</Text>
        </View>
        
        <View style={styles.profileSection}>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={20} color="#76CABB" />
          </TouchableOpacity>
          <Image 
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} 
            style={styles.profilePic} 
          />
        </View>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search Events, Creators, etc."
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Ionicons name="search-outline" size={18} color="#FF5862" />
        </TouchableOpacity>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Upcoming Event Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Event</Text>
        </View>
        
        <TouchableOpacity style={styles.upcomingEvent}>
          <View style={styles.eventTag}>
            <Text style={styles.tagText}>Upcoming</Text>
          </View>
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>"Melody Madness"</Text>
            <Text style={styles.eventDate}>Mon, 26th Feb</Text>
          </View>
          <View style={styles.eventLocation}>
            <Ionicons name="location-outline" size={16} color="#FFFFFF" />
            <Text style={styles.locationName}>Ahmedabad</Text>
          </View>
        </TouchableOpacity>
        
        {/* Creator's Shows Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Creator's Shows</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.creatorsContainer}>
          <TouchableOpacity style={[styles.creatorCard, styles.creator1]}>
            <View style={styles.creatorInfo}>
              <Text style={styles.showTitle}>Ghar</Text>
              <Text style={styles.creatorName}>Zakir Khan</Text>
              <Text style={styles.showDate}>13th Mar</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.creatorCard, styles.creator2]}>
            <View style={styles.creatorInfo}>
              <Text style={styles.showTitle}>Bassi kaun?</Text>
              <Text style={styles.creatorName}>Anubhav Bassi</Text>
              <Text style={styles.showDate}>19th Mar</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.creatorCard, styles.creator3]}>
            <View style={styles.creatorInfo}>
              <Text style={styles.showTitle}>Ham Ko Kya</Text>
              <Text style={styles.creatorName}>Abhishek</Text>
              <Text style={styles.showDate}>21th Mar</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        
        {/* Events in your city Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Events in your city</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        
        {/* Spacer to ensure content isn't hidden by nav bar */}
        <View style={styles.spacer} />
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="compass" size={23} color="#76CABB" />
          <Text style={styles.navTextActive}>Explore</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={23} color="#2C3550" style={{opacity: 0.2}} />
          <Text style={styles.navTextInactive}>Events</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="bookmark-outline" size={23} color="#D4D6DB" />
          <Text style={styles.navTextInactive}>Saved</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="ticket-outline" size={23} color="#D4D6DB" />
          <Text style={styles.navTextInactive}>Tickets</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    height: 48,
  },
  time: {
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.6,
  },
  statusIcons: {
    flexDirection: 'row',
    gap: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  locationIcon: {
    marginRight: 8,
  },
  locationText: {
    fontSize: 14,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  notificationBtn: {
    width: 37,
    height: 37,
    backgroundColor: '#FFFFFF',
    borderRadius: 37/2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: 33,
    height: 33,
    borderRadius: 33/2,
    borderWidth: 1.5,
    borderColor: '#76CABB',
  },
  searchBar: {
    margin: 16,
    flexDirection: 'row',
    backgroundColor: '#FDFDFD',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  searchIconContainer: {
    borderWidth: 1,
    borderColor: '#FF5862',
    borderRadius: 15,
    padding: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  viewAll: {
    fontSize: 12,
    color: '#FF5862',
  },
  upcomingEvent: {
    marginHorizontal: 16,
    height: 162,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#000',
  },
  upcomingEventBg: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
  },
  eventTag: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#FF5862',
  },
  eventDetails: {
    position: 'absolute',
    bottom: 8,
    left: 16,
  },
  eventTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 1,
    marginBottom: 8,
    fontWeight: '500',
  },
  eventDate: {
    color: '#FFFFFF',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  eventLocation: {
    position: 'absolute',
    bottom: 8,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationName: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 6,
  },
  creatorsContainer: {
    paddingHorizontal: 16,
  },
  creatorCard: {
    width: 135,
    height: 190,
    borderRadius: 16,
    marginRight: 15,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  creator1: {
    backgroundColor: '#2C3550',
  },
  creator2: {
    backgroundColor: '#493C3C',
  },
  creator3: {
    backgroundColor: '#5D4545',
  },
  creatorBg: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
  },
  creatorInfo: {
    padding: 10,
    alignItems: 'center',
  },
  showTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 2,
  },
  creatorName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 2,
  },
  showDate: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
  },
  spacer: {
    height: 80,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 56,
    backgroundColor: '#FEFEFE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#FF5862',
  },
  navItem: {
    alignItems: 'center',
  },
  navTextActive: {
    fontSize: 14,
    color: '#76CABB',
    marginTop: 2,
  },
  navTextInactive: {
    fontSize: 14,
    color: '#D4D6DB',
    marginTop: 2,
  },
});