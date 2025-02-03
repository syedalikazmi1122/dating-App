
import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { ArrowLeft, Heart, Star, X, Send, MapPin, CheckCheck } from 'lucide-react-native';
import uri from './../../../../assets/images/placeholder-profile.png';

    
const ProfilePage = ({navigation}) => {
    const handlenavigateBack=(event)=>
        {event.stopPropagation();
            navigation.goBack();
       }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* Main Photo Section */}
                <View style={styles.photoSection}>
                    <Image
                        source={require('./../../../../assets/images/placeholder-profile.png')}
                        style={styles.mainPhoto}
                    />
                    
                    {/* Back Button */}
                    <TouchableOpacity style={styles.backButton}
                         onPress={(event)=>handlenavigateBack(event)}
                    >
                        <ArrowLeft color="#FFFFFF" size={24} />
                    </TouchableOpacity>
                </View>

                {/* Content Container */}
                <View style={styles.contentContainer}>
                    {/* Action Buttons */}
                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={styles.dislikeButton}>
                            <X color="#76CABB" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.likeButtonLarge}>
                            <Heart color="#FFFFFF" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.starButton}>
                            <Star color="#76CABB" size={25} />
                        </TouchableOpacity>
                    </View>

                    {/* Profile Info */}
                    <View style={styles.profileInfo}>
                        <View style={styles.nameSection}>
                            <View>
                                <Text style={styles.name}>Jessica Parker, 23</Text>
                                <Text style={styles.profession}>Professional model</Text>
                            </View>
                            <TouchableOpacity style={styles.messageButton}>
                                <Send color="#FF5862" size={24} />
                            </TouchableOpacity>
                        </View>

                        {/* Location */}
                        <View style={styles.locationSection}>
                            <Text style={styles.sectionTitle}>Location</Text>
                            <Text style={styles.locationText}>Chicago, IL United States</Text>
                            <View style={styles.distanceContainer}>
                                <MapPin color="#FF5862" size={14} />
                                <Text style={styles.distanceText}>1 km</Text>
                            </View>
                        </View>

                        {/* About */}
                        <View style={styles.aboutSection}>
                            <Text style={styles.sectionTitle}>About</Text>
                            <Text style={styles.aboutText}>
                                My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading..
                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.readMore}>Read more</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Interests */}
                        <View style={styles.interestsSection}>
                            <Text style={styles.sectionTitle}>Interests</Text>
                            <View style={styles.interestsGrid}>
                                <View style={[styles.interestTag, styles.activeInterest]}>
                                    <CheckCheck color="#FF5862" size={16} />
                                    <Text style={styles.activeInterestText}>Travelling</Text>
                                </View>
                                <View style={[styles.interestTag, styles.activeInterest]}>
                                    <CheckCheck color="#FF5862" size={16} />
                                    <Text style={styles.activeInterestText}>Books</Text>
                                </View>
                                <View style={styles.interestTag}>
                                    <Text style={styles.interestText}>Music</Text>
                                </View>
                                <View style={styles.interestTag}>
                                    <Text style={styles.interestText}>Dancing</Text>
                                </View>
                                <View style={styles.interestTag}>
                                    <Text style={styles.interestText}>Modeling</Text>
                                </View>
                            </View>
                        </View>

                        {/* Gallery */}
                        <View style={styles.gallerySection}>
                            <View style={styles.galleryHeader}>
                                <Text style={styles.sectionTitle}>Gallery</Text>
                                <TouchableOpacity>
                                    <Text style={styles.readMore}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.galleryGrid}>
                                <Image
                                    source={require('./../../../../assets/images/placeholder-profile.png')}
                                    style={styles.galleryImageLarge}
                                />
                                <View style={styles.galleryRow}>
                                    <Image
                                        source={require('./../../../../assets/images/placeholder-profile.png')}
                                        style={styles.galleryImageSmall}
                                    />
                                    <Image
                                        source={require('./../../../../assets/images/placeholder-profile.png')}
                                        style={styles.galleryImageSmall}
                                    />
                                    <Image
                                        source={require('./../../../../assets/images/placeholder-profile.png')}
                                        style={styles.galleryImageSmall}
                                    />
                                </View>
                            </View>
                        </View>
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
    scrollView: {
        flex: 1,
    },
    photoSection: {
        height: 415,
        position: 'relative',
    },
    mainPhoto: {
        width: '100%',
        height: '100%',
    },
    backButton: {
        position: 'absolute',
        top: 44,
        left: 40,
        width: 52,
        height: 52,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E8E6EA',
    },
    contentContainer: {
        marginTop: -30,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 40,
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -40,
        paddingHorizontal: 40,
    },
    dislikeButton: {
        width: 60,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 39,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.07,
        shadowRadius: 50,
    },
    likeButtonLarge: {
        width: 70,
        height: 70,
        backgroundColor: '#FF5862',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 8,
        shadowColor: '#E94057',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
    },
    starButton: {
        width: 60,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 39,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.07,
        shadowRadius: 50,
    },
    profileInfo: {
        paddingHorizontal: 40,
        paddingTop: 20,
    },
    nameSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    name: {
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
    },
    profession: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.7)',
        marginTop: 4,
    },
    messageButton: {
        width: 52,
        height: 52,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E8E6EA',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 12,
    },
    locationText: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    distanceContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 88, 98, 0.1)',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 7,
    },
    distanceText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FF5862',
        marginLeft: 4,
    },
    locationSection: {
        position: 'relative',
        marginBottom: 30,
    },
    aboutSection: {
        marginBottom: 30,
    },
    aboutText: {
        fontSize: 14,
        lineHeight: 21,
        color: 'rgba(0, 0, 0, 0.7)',
        marginBottom: 8,
    },
    readMore: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FF5862',
    },
    interestsSection: {
        marginBottom: 30,
    },
    interestsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    interestTag: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E8E6EA',
    },
    activeInterest: {
        borderColor: '#FF5862',
    },
    interestText: {
        fontSize: 14,
        color: '#000000',
    },
    activeInterestText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FF5862',
        marginLeft: 4,
    },
    gallerySection: {
        marginBottom: 30,
    },
    galleryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    galleryGrid: {
        gap: 10,
    },
    galleryImageLarge: {
        width: '100%',
        height: 190,
        borderRadius: 5,
    },
    galleryRow: {
        flexDirection: 'row',
        gap: 10,
    },
    galleryImageSmall: {
        flex: 1,
        height: 122,
        borderRadius: 5,
    },
});

export default ProfilePage;