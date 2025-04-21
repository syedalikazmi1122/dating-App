import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet,
  TextInput,
  SafeAreaView
} from 'react-native';
import { ArrowLeft, RotateCcw, ChevronDown } from 'lucide-react-native';

const FilterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <ArrowLeft color="#FF5862" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Filters</Text>
          <TouchableOpacity style={styles.resetButton}>
            <RotateCcw color="#FF5862" size={20} />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.filterOptionsTitle}>Filter Options</Text>
        <Text style={styles.filterDescription}>
          Manage and set your preferences to find the best matches for you, keep swiping!
        </Text>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabel}>Age</Text>
          <Text style={styles.filterValue}>16-25 years</Text>
          <View style={styles.sliderContainer}>
            <View style={styles.sliderFilled} />
            <View style={styles.sliderEmpty} />
            <View style={styles.sliderKnob} />
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabelPink}>Height</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>6.1</Text>
            <ChevronDown color="#FF5862" size={24} />
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabelPink}>Marital Status</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>Single</Text>
            <ChevronDown color="#FF5862" size={24} />
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabelPink}>Location</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>Indian</Text>
            <ChevronDown color="#FF5862" size={24} />
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.locationTitle}>Current Location</Text>
          <Text style={styles.distanceText}>0 - 10 km</Text>
          <View style={styles.distanceSliderContainer}>
            <View style={styles.distanceSliderTrack} />
            <View style={styles.distanceSliderFilled} />
            <View style={styles.distanceSliderKnob} />
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabelPink}>Interest Match</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>70-80 %</Text>
            <ChevronDown color="#FF5862" size={24} />
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabelPink}>Hobbies</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>XYZ</Text>
            <ChevronDown color="#FF5862" size={24} />
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabelPink}>Alcohol Preference</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>Drink alcohol</Text>
            <ChevronDown color="#FF5862" size={24} />
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabelPink}>Smoking Preference</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>Some</Text>
            <ChevronDown color="#FF5862" size={24} />
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabelPink}>Relationship Intent</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>Serious</Text>
            <ChevronDown color="#FF5862" size={24} />
          </View>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabelPink}>Casual Dating And Matrimony</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>Not Sure</Text>
            <ChevronDown color="#FF5862" size={24} />
          </View>
        </View>

        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Filter</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpacer} />
      </ScrollView>
      <View style={styles.navigationBar}>
        <View style={styles.homeDivider} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  backButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FDFDFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
  resetButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FDFDFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterOptionsTitle: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 22,
    color: '#FF6D75',
    textAlign: 'center',
    marginBottom: 10,
  },
  filterDescription: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    color: '#FF5862',
    textAlign: 'center',
    lineHeight: 21,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  filterGroup: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  filterLabel: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  filterValue: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
    position: 'absolute',
    right: 20,
    top: 0,
  },
  filterLabelPink: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 12.5,
    color: '#EE6983',
    letterSpacing: 0.6,
    marginBottom: 8,
  },
  sliderContainer: {
    flexDirection: 'row',
    height: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  sliderFilled: {
    flex: 0.6,
    height: 5,
    backgroundColor: '#FF5862',
    borderRadius: 9,
  },
  sliderEmpty: {
    flex: 0.4,
    height: 5,
    backgroundColor: '#D9D9D9',
    borderRadius: 9,
  },
  sliderKnob: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FF5862',
    position: 'absolute',
    left: '60%',
    marginLeft: -9,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 54,
    borderWidth: 2,
    borderColor: '#76CABB',
    borderRadius: 100,
    paddingHorizontal: 20,
  },
  dropdownText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 13.4,
    color: '#000000',
  },
  locationTitle: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 15,
    color: '#FF626C',
    opacity: 0.9,
    marginBottom: 5,
  },
  distanceText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 17,
    color: '#FF626C',
    opacity: 0.9,
    marginBottom: 8,
  },
  distanceSliderContainer: {
    position: 'relative',
    marginVertical: 10,
    height: 20,
  },
  distanceSliderTrack: {
    height: 3,
    backgroundColor: '#CB5197',
    width: '100%',
    position: 'absolute',
    top: 10,
  },
  distanceSliderFilled: {
    height: 3,
    backgroundColor: '#FF626C',
    width: '20%',
    position: 'absolute',
    top: 10,
  },
  distanceSliderKnob: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: '#FF626C',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: '20%',
    marginLeft: -9,
  },
  applyButton: {
    backgroundColor: '#FF5862',
    height: 56,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 32.5,
    marginTop: 15,
    marginBottom: 20,
  },
  applyButtonText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 16,
    color: '#FFFFFF',
  },
  bottomSpacer: {
    height: 24,
  },
  navigationBar: {
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  homeDivider: {
    width: 108,
    height: 4,
    backgroundColor: '#000000',
    borderRadius: 4,
  },
});

export default FilterScreen;