import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EventsScreen = () => {
  const events = [
    {
      id: '1',
      title: 'Designers Meetup 2022',
      date: '03 October, 22',
      location: 'Gulshan, Dhaka',
      price: '$10 USD',
      image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLmarjSIkrQ5m6rarOzOZkSJIB533Cs1Djg&s' },
    },
    {
      id: '2',
      title: 'Dribblers Meetup 2022',
      date: '07 October, 22',
      location: 'Banani, Dhaka',
      price: '$15 USD',
      image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSsTbST_KojUvhS_da6TA-Eb0vDxAkMW98g&s' },
    },
    {
      id: '3',
      title: 'Food Competition Event',
      date: '10 October, 22',
      location: 'Mirpur, Dhaka',
      price: '$25 USD',
      image: { uri: 'https://i.ytimg.com/vi/JTk9dUHNjek/maxresdefault.jpg' },
    },
    {
      id: '4',
      title: 'Basketball Final Match',
      date: '15 October, 22',
      location: 'Uttara, Dhaka',
      price: '$20 USD',
      image: { uri: 'https://i.ytimg.com/vi/JTk9dUHNjek/maxresdefault.jpg' },
    },
    {
      id: '5',
      title: 'ARB Stunt Riders Event',
      date: '22 October, 22',
      location: 'N Badda, Dhaka',
      price: '$30 USD',
      image: { uri: 'https://img.freepik.com/free-photo/black-silhouettes-music-concert-poster-concept_1194-617147.jpg?semt=ais_hybrid&w=740' },
    },
    {
      id: '6',
      title: 'International Music Concert',
      date: '25 October, 22',
      location: 'Dhanmondi, Dhaka',
      price: '$12 USD',
      image: { uri: 'https://img.freepik.com/free-photo/black-silhouettes-music-concert-poster-concept_1194-617147.jpg?semt=ais_hybrid&w=740' },
    },
    {
      id: '7',
      title: 'Football Final Match',
      date: '29 October, 22',
      location: 'Gulshan, Dhaka',
      price: '$10 USD',
      image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7Ctg7wOXpgY0l6TloeqzWUBABH6htCPHcw&s' },
    },
  ];

  const renderEvent = ({ item }) => (
    <View style={styles.eventCard}>
      <Image source={item.image} style={styles.eventImage} />
      <View style={styles.eventDetails}>
        <View>
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventDateTime}>
            {item.date} • {item.location}
          </Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>JOIN NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#4ED1BA" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Events</Text>
        <View style={styles.headerRightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search" size={24} color="#4ED1BA" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="ellipsis-vertical" size={24} color="#4ED1BA" />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home-outline" size={24} color="#757575" />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
          <Ionicons name="calendar" size={24} color="#4ED1BA" />
          <Text style={[styles.tabText, styles.activeTabText]}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="add-circle-outline" size={24} color="#757575" />
          <Text style={styles.tabText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person-outline" size={24} color="#757575" />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#4ED1BA',
  },
  headerRightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  listContainer: {
    padding: 16,
  },
  eventCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  eventDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  eventDateTime: {
    fontSize: 12,
    color: '#777777',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  joinButton: {
    backgroundColor: '#4ED1BA',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  joinButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#ffffff',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderTopWidth: 2,
    borderTopColor: '#4ED1BA',
  },
  tabText: {
    fontSize: 12,
    color: '#757575',
    marginTop: 4,
  },
  activeTabText: {
    color: '#4ED1BA',
  },
});

export default EventsScreen;