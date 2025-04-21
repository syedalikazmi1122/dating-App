import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const cardWidth = width / 3 - 20;

const UserDashboard = () => {
  const users = Array(9).fill({
    name: 'Alex Johnson',
    match_score: '95%',
    female: true
  });

  const renderPaginationButton = (direction) => (
    <TouchableOpacity style={styles.paginationButton}>
      <Text style={styles.paginationButtonText}>
        {direction === 'prev' ? '<' : '>'}
      </Text>
    </TouchableOpacity>
  );

  const renderPageNumber = (number, isActive) => (
    <TouchableOpacity 
      key={number}
      style={[
        styles.pageNumber,
        isActive && styles.activePageNumber
      ]}
    >
      <Text style={[
        styles.pageNumberText,
        isActive && styles.activePageNumberText
      ]}>
        {number}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>User</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.cardsContainer}>
          {users.map((user, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/100' }}
                  style={styles.avatar}
                />
                <TouchableOpacity style={styles.moreButton}>
                  <Text style={styles.moreButtonText}>...</Text>
                </TouchableOpacity>
              </View>
              
              <Text style={styles.userName}>{user.name}</Text>
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Match Score</Text>
                  <Text style={styles.statValue}>{user.match_score}</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Female</Text>
                  <View style={[styles.progressBar, { backgroundColor: '#FF5862' }]} />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.pagination}>
        {renderPaginationButton('prev')}
        <View style={styles.pageNumbers}>
          {[1, 2, 3, 4].map((num) => renderPageNumber(num, num === 1))}
        </View>
        {renderPaginationButton('next')}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: '#FF5862',
    fontSize: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FF5862',
    marginLeft: 20,
  },
  scrollContent: {
    padding: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  moreButton: {
    padding: 5,
  },
  moreButtonText: {
    fontSize: 20,
    color: '#666',
  },
  userName: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
  },
  statsContainer: {
    marginTop: 10,
  },
  statItem: {
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF5862',
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    marginTop: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  paginationButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C2C2C2',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  paginationButtonText: {
    color: '#FF5862',
    fontSize: 16,
  },
  pageNumbers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageNumber: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  activePageNumber: {
    backgroundColor: '#FF5862',
  },
  pageNumberText: {
    fontSize: 12,
    color: '#202020',
  },
  activePageNumberText: {
    color: '#FFFFFF',
  },
});

export default UserDashboard;