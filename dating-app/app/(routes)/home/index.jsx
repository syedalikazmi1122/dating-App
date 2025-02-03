import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image ,ScrollView } from "react-native";
import Svg, { G, Path, Circle, ClipPath, Rect, Defs } from 'react-native-svg';
import Stories from './../../Components/Home/stories';
import PostCard from './../../Components/Home/posts';

const { width: screenWidth } = Dimensions.get("window");

const placeholderImage = require('./../../../assets/images/homebackgroundgirl.png');

export default function Home({ navigation }) {
  const [activeTab, setActiveTab] = useState('friends'); // 'friends' or 'partners'
  const Postsss = [
    {
      id: 4,
      location: 'karachi',
      userName: "syed ali kazmi",
      image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', // Use a URL for the image
      userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWkRLNexjjEUrf0biCHM0T0xSs5iybueBWNY4BbkHh9ajIYFff9Up8u3ql4hO3Ndz5T8&usqp=CAU', // Use a URL for the avatar
      category: "football",
      title: "If you could live anywhere in the world, where would you pick?",
    },
    {
      id: 1,
      location: 'karachi',
      userName: "syed ali kazmi",
      image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', // Use a URL for the image
      userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWkRLNexjjEUrf0biCHM0T0xSs5iybueBWNY4BbkHh9ajIYFff9Up8u3ql4hO3Ndz5T8&usqp=CAU', // Use a URL for the avatar
      category: "football",
      title: "If you could live anywhere in the world, where would you pick?",
    },
    {
      id: 2,
      location: 'karachi',
      userName: "syed ali kazmi",
      image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', // Use a URL for the image
      userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWkRLNexjjEUrf0biCHM0T0xSs5iybueBWNY4BbkHh9ajIYFff9Up8u3ql4hO3Ndz5T8&usqp=CAU', // Use a URL for the avatar
      category: "football",
      title: "If you could live anywhere in the world, where would you pick?",
    }
    ,{
      id: 3,
      location: 'karachi',
      userName: "syed ali kazmi",
      image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', // Use a URL for the image
      userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWkRLNexjjEUrf0biCHM0T0xSs5iybueBWNY4BbkHh9ajIYFff9Up8u3ql4hO3Ndz5T8&usqp=CAU', // Use a URL for the avatar
      category: "football",
      title: "If you could live anywhere in the world, where would you pick?",
    }
  ];

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headingname}>
          XYZ
        </Text>
        <View style={styles.notification}>
          <View style={styles.notificationicon}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <G clipPath="url(#clip0_51_3722)">
                <Path d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5" stroke="#76CABB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <Path d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17" stroke="#76CABB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <Circle cx="18" cy="6" r="3.25" fill="#FF5862" stroke="white" strokeWidth="1.5" />
              </G>
              <Defs>
                <ClipPath id="clip0_51_3722">
                  <Rect width="24" height="24" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          </View>
        </View>
      </View>

      {/* stories section */}
      <Stories navigation={navigation} />

      {/* Segmented Control */}
      <View style={styles.segmentedControlContainer}>
        <View style={styles.segmentedControl}>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              activeTab === 'friends' && styles.activeSegment,
            ]}
            onPress={() => setActiveTab('friends')}
          >
            <Text style={[
              styles.segmentText,
              activeTab === 'friends' && styles.activeSegmentText
            ]}>
              Make Friends
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.segmentButton,
              activeTab === 'partners' && styles.activeSegment,
            ]}
            onPress={() => setActiveTab('partners')}
          >
            <Text style={[
              styles.segmentText,
              activeTab === 'partners' && styles.activeSegmentText
            ]}>
              Search Partners
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Posts Section */}
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.postsContainer}>
      {Postsss.map((post) => (
        <PostCard 
          key={post.id}
          image={post.image}
          userName={post.userName}
          location={post.location}
          category={post.category}
          userAvatar={post.userAvatar}
          title={post.title}
        />
      ))}
    </View>
  </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:20,
    backgroundColor: 'white', // Light pink background from image
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headingname: {
    fontSize: 28,
    color: '#76CABB',
    fontWeight: '600',
  },
  notification: {
    borderWidth: 1,
    borderColor: '#76CABB',
    borderRadius: 20,
    padding: 6,
  },
  notificationicon: {
    width: 24,
    height: 24,
  },
  segmentedControlContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 4,
    height: 50,
  },
  segmentButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 16,
  },
  activeSegment: {
    backgroundColor: '#76CABB',
  },
  segmentText: {
    fontSize: 16,
    color: '#8E8E8E',
    fontWeight: '500',
  },
  activeSegmentText: {
    color: 'white',
  },
  postsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  post: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  postImage: {
    width: 100,
    height: 100,
  },
  postDetails: {
    flex: 1,
    padding: 8,
  },
  postUserName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  postLocation: {
    fontSize: 14,
    color: '#666',
  },
  postCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  categoryIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
});
