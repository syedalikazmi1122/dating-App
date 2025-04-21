import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 2 columns with padding
import uri from './../../../../assets/images/placeholder-profile.png';
import { useNavigation } from "@react-navigation/native";

const MatchesScreen = () => {
  const navigation = useNavigation();
  const topMatches = [
    { id: 1, type: 'likes', count: 32 },
    { id: 2, type: 'connect', count: 15 }
  ];

  const matches = [
    { id: 1, name: 'James', age: 20, location: 'Hanover', match: 100, distance: '16 km', image: require('./../../../../assets/images/placeholder-profile.png') },
    { id: 2, name: 'Eddie', age: 23, location: 'Dortmund', match: 94, distance: '16 km', image: require('./../../../../assets/images/placeholder-profile.png') },
    { id: 3, name: 'Brandon', age: 20, location: 'Hamburg', match: 89, distance: '16 km', image: require('./../../../../assets/images/placeholder-profile.png') },
    { id: 4, name: 'Jessica', age: 23, location: 'Hamburg', match: 80, distance: '16 km', image: require('./../../../../assets/images/placeholder-profile.png') },
    { id: 5, name: 'Chris', age: 24, location: 'Leipzig', match: 88, distance: '16 km', image: require('./../../../../assets/images/placeholder-profile.png') },
    { id: 6, name: 'Finn', age: 21, location: 'Cologne', match: 92, distance: '16 km', image: require('./../../../../assets/images/placeholder-profile.png') }
  ];

  const renderTopMatchesItem = ({ type, count }) => (
    <View style={styles.topMatchItem}>
      <View style={styles.topMatchCircle}>
        <View style={[styles.iconContainer, type === 'likes' ? styles.likesIcon : styles.connectIcon]} />
      </View>
      <Text style={styles.topMatchCount}>{`${type} ${count}`}</Text>
    </View>
  );

  const renderMatchCard = ({ item }) => (
    <TouchableOpacity 
     onPress={() => navigation.navigate("ConnectDetails")}
    style={styles.matchCard}>
      <Image source={item.image} style={styles.matchImage} />
      <View style={styles.matchPercentage}>
        <Text style={styles.matchPercentageText}>{`${item.match}% Match`}</Text>
      </View>
      <View style={styles.matchInfo}>
        <View style={styles.distanceTag}>
          <Text style={styles.distanceText}>{item.distance}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{`${item.name}, ${item.age}`}</Text>
          <View style={styles.onlineDot} />
        </View>
        <Text style={styles.locationText}>{item.location.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <View style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Matches</Text>
        <TouchableOpacity style={styles.optionsButton}>
          <View style={styles.optionsIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.topMatchesContainer}>
          {topMatches.map((match) => renderTopMatchesItem(match))}
        </View>

        <Text style={styles.sectionTitle}>Your Matches</Text>
        
        <View style={styles.matchesGrid}>
          {matches.map((match) => renderMatchCard({ item: match }))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        {/* Bottom navigation items */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF7FD',
  },
  header: {
    height: 92,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#76CABB',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 88, 98, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 88, 98, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  topMatchesContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 20,
  },
  topMatchItem: {
    alignItems: 'center',
    gap: 8,
  },
  topMatchCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#76CABB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topMatchCount: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#76CABB',
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#76CABB',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  matchesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 16,
  },
  matchCard: {
    width: cardWidth,
    height: 232,
    borderRadius: 24,
    overflow: 'hidden',
  },
  matchImage: {
    width: '100%',
    height: '100%',
  },
  matchPercentage: {
    position: 'absolute',
    // bottom: 0,
    left: '12%',
    backgroundColor: '#FF5862',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  matchPercentageText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  matchInfo: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  distanceTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 32,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 4,
  },
  distanceText: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderWidth: 2,
  borderRadius:16,
  borderColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(12px)',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight:'medium',
    fontFamily: 'Poppins-Medium',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  
nameText: {
  color: '#FFFFFF',
  fontSize: 20,
  fontWeight: '800',
  fontFamily: 'Poppins-Bold',
},
  onlineDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#13E398',
  },
  locationText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 2,
    opacity: 0.7,
  },
  bottomNav: {
    height: 64,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginBottom: 12,
    borderRadius: 40,
    shadowColor: '#752277',
    shadowOffset: { width: 8, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 40,
    elevation: 5,
  },
});

export default MatchesScreen;
