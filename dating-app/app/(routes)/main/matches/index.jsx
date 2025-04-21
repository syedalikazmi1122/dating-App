import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MatchCard = ({ name, age, imageUrl }) => (
  <View style={styles.cardContainer}>
    <Image 
      source={imageUrl} 
      style={styles.cardImage}
    />
    <View style={styles.cardInfo}>
      <Text style={styles.nameText}>{`${name}, ${age}`}</Text>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="close" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="heart-outline" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const MatchesScreen = () => {
  const todayMatches = [
    { id: 1, name: 'Leilani', age: 19, imageUrl: require('./../../../../assets/images/placeholder-profile.png') },
    { id: 2, name: 'Annabelle', age: 20, imageUrl: require('./../../../../assets/images/placeholder-profile.png') },
    { id: 3, name: 'Reagan', age: 24, imageUrl: require('./../../../../assets/images/placeholder-profile.png') },
    { id: 4, name: 'Hadley', age: 25, imageUrl: require('./../../../../assets/images/placeholder-profile.png') },
  ];
  
  const yesterdayMatches = [
    { id: 5, name: 'Kyle', age: 24, imageUrl: require('./../../../../assets/images/placeholder-profile.png') },
    { id: 6, name: 'Kyle', age: 24, imageUrl: require('./../../../../assets/images/placeholder-profile.png') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Matches</Text>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialCommunityIcons name="sort" size={24} color="#FF5862" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>
        This is a list of people who have liked you and your matches.
      </Text>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.dateSection}>
          <View style={styles.dateDivider}>
            <View style={styles.line} />
            <Text style={styles.dateText}>Today</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.cardsGrid}>
            {todayMatches.map(match => (
              <MatchCard key={match.id} {...match} />
            ))}
          </View>
        </View>

        <View style={styles.dateSection}>
          <View style={styles.dateDivider}>
            <View style={styles.line} />
            <Text style={styles.dateText}>Yesterday</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.cardsGrid}>
            {yesterdayMatches.map(match => (
              <MatchCard key={match.id} {...match} />
            ))}
          </View>
        </View>
      </ScrollView>
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
    paddingHorizontal: 40,
    paddingTop: 44,
  },
  title: {
    fontFamily: 'Sk-Modernist',
    fontSize: 34,
    fontWeight: '700',
    color: '#000000',
  },
  filterButton: {
    width: 52,
    height: 52,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8E6EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontFamily: 'Sk-Modernist',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 40,
    paddingTop: 8,
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
  },
  dateSection: {
    marginBottom: 20,
  },
  dateDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  dateText: {
    fontFamily: 'Sk-Modernist',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E8E6EA',
  },
  cardsGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20, // Adjusted padding
    justifyContent: 'space-between', // Added to distribute space evenly
  },
  cardContainer: {
    width: '45%', // Adjusted width to fit two cards in a row
    height: 200,
    marginHorizontal: 5,
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  cardInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  nameText: {
    fontFamily: 'Sk-Modernist',
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    paddingHorizontal: 16,
    paddingBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
  actionContainer: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  },
});

export default MatchesScreen;