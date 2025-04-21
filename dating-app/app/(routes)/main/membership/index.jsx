
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const PricingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Plans & Pricing</Text>
          <Text style={styles.subtitle}>
            Whether your time-saving automation needs are large or small, we're here to help you scale.
          </Text>
        </View>
        
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabActiveText}>MONTHLY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>YEARLY</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.pricingCardsContainer}>
          {/* Starter Card */}
          <View style={styles.pricingCard}>
            <View style={styles.pricingHeader}>
              <Text style={styles.planName}>Starter</Text>
              <Text style={styles.planDescription}>Unleash the power of automation</Text>
            </View>
            <Text style={styles.price}>$19<Text style={styles.perMonth}>/month</Text></Text>
            
            <View style={styles.featuresList}>
              <View style={styles.featureItem}>
                <View style={styles.checkCircle}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <Text style={styles.featureText}>5-minute setup</Text>
              </View>
              <View style={styles.featureItem}>
                <View style={styles.checkCircle}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <Text style={styles.featureText}>5 basic users</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.choosePlanButton}>
              <Text style={styles.choosePlanButtonText}>Choose Plan</Text>
            </TouchableOpacity>
          </View>
          
          {/* Professional Card */}
          <View style={styles.pricingCard}>
            <View style={styles.pricingHeader}>
              <Text style={styles.planName}>Professional</Text>
              <Text style={styles.planDescription}>Advanced tools to take your business further</Text>
            </View>
            <Text style={styles.price}>$54<Text style={styles.perMonth}>/month</Text></Text>
            
            <View style={styles.featuresList}>
              <View style={styles.featureItem}>
                <View style={styles.checkCircle}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <Text style={styles.featureText}>All Starter Features</Text>
              </View>
              <View style={styles.featureItem}>
                <View style={styles.checkCircle}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <Text style={styles.featureText}>Unlimited Premium Access</Text>
              </View>
              <View style={styles.featureItem}>
                <View style={styles.checkCircle}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <Text style={styles.featureText}>Advanced Analytics</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.choosePlanButton}>
              <Text style={styles.choosePlanButtonText}>Choose Plan</Text>
            </TouchableOpacity>
          </View>
          
          {/* Company Card */}
          <View style={[styles.pricingCard, styles.featuredCard]}>
            <View style={styles.popularBadge}>
              <Text style={styles.popularBadgeText}>MOST POPULAR</Text>
            </View>
            <View style={styles.pricingHeader}>
              <Text style={styles.planNameFeatured}>Company</Text>
              <Text style={styles.planDescriptionFeatured}>Enterprise upgrade plan for growing teams</Text>
            </View>
            <Text style={styles.priceFeatured}>$89<Text style={styles.perMonthFeatured}>/month</Text></Text>
            
            <View style={styles.featuresListFeatured}>
              <View style={styles.featureItemFeatured}>
                <View style={styles.checkCircleFeatured}>
                  <Text style={styles.checkMarkFeatured}>✓</Text>
                </View>
                <Text style={styles.featureTextFeatured}>All limited links</Text>
              </View>
              <View style={styles.featureItemFeatured}>
                <View style={styles.checkCircleFeatured}>
                  <Text style={styles.checkMarkFeatured}>✓</Text>
                </View>
                <Text style={styles.featureTextFeatured}>Own analytics platform</Text>
              </View>
              <View style={styles.featureItemFeatured}>
                <View style={styles.checkCircleFeatured}>
                  <Text style={styles.checkMarkFeatured}>✓</Text>
                </View>
                <Text style={styles.featureTextFeatured}>Chat support</Text>
              </View>
              <View style={styles.featureItemFeatured}>
                <View style={styles.checkCircleFeatured}>
                  <Text style={styles.checkMarkFeatured}>✓</Text>
                </View>
                <Text style={styles.featureTextFeatured}>Optimize hashtags</Text>
              </View>
              <View style={styles.featureItemFeatured}>
                <View style={styles.checkCircleFeatured}>
                  <Text style={styles.checkMarkFeatured}>✓</Text>
                </View>
                <Text style={styles.featureTextFeatured}>Unlimited users</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.choosePlanButtonFeatured}>
              <Text style={styles.choosePlanButtonTextFeatured}>Choose plan</Text>
            </TouchableOpacity>
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
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#FF5862',
  },
  scrollView: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    color: '#FF5862',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 12,
    marginBottom: 30,
    overflow: 'hidden',
  },
  tab: {
    paddingVertical: 7,
    paddingHorizontal: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    paddingVertical: 7,
    paddingHorizontal: 13,
    backgroundColor: '#FF5862',
    borderRadius: 12,
    shadowColor: '#5243C2',
    shadowOffset: { width: 0, height: 2.7 },
    shadowOpacity: 0.23,
    shadowRadius: 3.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 0.4,
    color: '#FF5862',
  },
  tabActiveText: {
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 0.4,
    color: '#FFFFFF',
  },
  pricingCardsContainer: {
    paddingHorizontal: 20,
  },
  pricingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featuredCard: {
    backgroundColor: '#FF5862',
    shadowColor: '#5243C2',
    shadowOffset: { width: 0, height: 17 },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    elevation: 8,
    position: 'relative',
  },
  popularBadge: {
    position: 'absolute',
    top: 8,
    right: 12,
    backgroundColor: '#76CABB',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    zIndex: 1,
  },
  popularBadgeText: {
    color: '#FF5862',
    fontSize: 7,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  pricingHeader: {
    marginBottom: 10,
  },
  planName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF5862',
    marginBottom: 2,
  },
  planNameFeatured: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  planDescription: {
    fontSize: 10,
    fontWeight: '500',
    color: '#848199',
    lineHeight: 14,
  },
  planDescriptionFeatured: {
    fontSize: 10,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 14,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF5862',
    marginBottom: 15,
  },
  priceFeatured: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  perMonth: {
    fontSize: 10,
    fontWeight: '500',
    color: '#848199',
  },
  perMonthFeatured: {
    fontSize: 10,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  featuresList: {
    marginBottom: 15,
  },
  featuresListFeatured: {
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  featureItemFeatured: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  checkCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(82, 67, 194, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkCircleFeatured: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkMark: {
    color: '#76CABB',
    fontSize: 10,
    fontWeight: 'bold',
  },
  checkMarkFeatured: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 11,
    color: '#848199',
  },
  featureTextFeatured: {
    fontSize: 11,
    color: '#FFFFFF',
  },
  choosePlanButton: {
    height: 35,
    backgroundColor: 'rgba(255, 88, 98, 0.5)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choosePlanButtonFeatured: {
    height: 35,
    backgroundColor: '#76CABB',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choosePlanButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '500',
  },
  choosePlanButtonTextFeatured: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '500',
  },
});

export default PricingScreen;