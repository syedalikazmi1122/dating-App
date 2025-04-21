import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const PostCard = ({ 
  category,
  image,
  userName,
  location,
  userAvatar 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
   const navigation = useNavigation();
  const toggleSidebar = () => {
    const toValue = isExpanded ? 0 : 1;
    setIsExpanded(!isExpanded);
    
    Animated.spring(slideAnim, {
      toValue,
      useNativeDriver: true,
      friction: 8,
      tension: 40
    }).start();
  };

  const translateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -60] // Slides 60 units to the left when expanded
  });

  return (
    <TouchableOpacity 
      onPress={()=> navigation.navigate('ViewfullPost', { photo: image })}
    style={styles.container}>
      {/* Category Tag */}
      <View style={styles.categoryContainer}>
        <Image 
          source={{ uri: 'https://placekitten.com/20/20' }}
          style={styles.categoryIcon}
        />
        <Text style={styles.categoryText}>
          {category}
        </Text>
      </View>

      {/* Main Content */}
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.mainImage}
        />
      )}

      {/* Post Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          If you could live anywhere in the world, where would you pick?
        </Text>
      </View>

      {/* User Info */}
      <View style={styles.userContainer}>
        {userAvatar && <Image source={{ uri: userAvatar }} style={styles.userAvatar} />}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>

      {/* Sliding Action Buttons */}
      <Animated.View 
        style={[
          styles.actionsContainer,
          {
            transform: [{ translateX }]
          }
        ]}
      >
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={toggleSidebar}
        >
          <View style={styles.iconBackground}>
            <Feather name="thumbs-up" size={20} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.iconBackground}>
            <Feather name="message-circle" size={20} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.iconBackground}>
            <Feather name="more-horizontal" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </Animated.View>

      {/* Touch area for sliding */}
      <TouchableOpacity 
        style={styles.slideHandle}
        onPress={toggleSidebar}
      >
        <View style={styles.handleIndicator} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 24,
        overflow: 'hidden',
        margin: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    categoryContainer: {
        position: 'absolute',
        top: 16,
        left: 16,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryIcon: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 6,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
    },
    mainImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    titleContainer: {
        position: 'absolute',
        bottom: 80,
        left: 16,
        right: 80,
        zIndex: 1,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    userContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#fff',
    },
    userInfo: {
        marginLeft: 8,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    location: {
        fontSize: 14,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    actionsContainer: {
        position: 'absolute',
        right: -60,
        top: '20%',
        transform: [{ translateY: -80 }],
        zIndex: 2,
        padding: 4,
        backgroundColor: 'rgba(145, 144, 144, 0.29)',
        borderRadius: 20,
    },
    actionButton: {
        marginVertical: 8,
    },
    iconBackground: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(145, 144, 144, 0.29)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideHandle: {
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: [{ translateY: -25 }],
        width: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    handleIndicator: {
        width: 4,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 2,
    },
});
export default PostCard;