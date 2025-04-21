import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const DiscoverCard = ({ name, age, location, distance, image }) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.gradientOverlay} />
    <Image 
      source={image}  
      style={styles.cardImage}
    />
    <View style={styles.newTag}>
      <Text style={styles.newTagText}>NEW</Text>
    </View>
    <View style={styles.cardContent}>
      <Text style={styles.distance}>{distance} km away</Text>
      <Text style={styles.name}>{name}, {age}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  </TouchableOpacity>
);

const DiscoverCards = () => {
  const cards = [
    {
      id: 1,
      name: 'Halima',
      age: 19,
      location: 'BERLIN',
      distance: '16',
      image: require( './../../../assets/images/placeholder-profile.png')
    },
    {
      id: 2,
      name: 'Vanessa',
      age: 18,
      location: 'MUNICH',
      distance: '4,8',
      image: require('./../../../assets/images/placeholder-profile.png')
    },
    {
      id: 3,
      name: 'James',
      age: 20,
      location: 'HANOVER',
      distance: '2,2',
      image: require( './../../../assets/images/placeholder-profile.png')
    }
  ];

  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {cards.map(card => (
        <DiscoverCard key={card.id} {...card} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 181,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
  },
  card: {
    width: 120,
    height: 181,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'transparent',
    zIndex: 1,
    // Using rgba for gradient simulation since RN doesn't support linear-gradient
    backgroundImage: 'linear-gradient(180deg, rgba(118, 202, 187, 0) 34.22%, #76CABB 93.83%)',
  },
  newTag: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FF5862',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 2,
  },
  newTagText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  cardContent: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 12,
    zIndex: 2,
  },
  distance: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  location: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.8,
  }
});

export default DiscoverCards;