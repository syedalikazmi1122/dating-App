import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const WINDOW_WIDTH = Dimensions.get('window').width;
const STORY_SIZE = 70;

// Import the local image
const placeholderImage = require('./../../../assets/images/placeholder-profile.png');

export default function Stories({ navigation }) {
  const content = [
    {
      id: 1,
      name: 'My Story',
      picture: placeholderImage,
      isAddStory: true,
    },
    {
      id: 2,
      name: 'Annabelle',
      stories: [
        {
          id: 21,
          type: 'image',
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFz_6mfypGxjZ_gs9tAjw33altfN6n0CDcw&s',
          duration: 5000,
        },
        {
          id: 22,
          type: 'image',
          uri: 'https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2024/09/08063603/CompressJPEG.Online_1_35_2565.jpg',
        }
      ],
      picture: placeholderImage,
    },
    {
      id: 3,
      name: 'Clara',
      stories: [
        {
          id: 31,
          type: 'image',
          uri: 'https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2024/09/08063603/CompressJPEG.Online_1_35_2565.jpg',
          duration: 5000,
        }
      ],
      picture: placeholderImage,
    }
  ];

  const handleStoryPress = (user) => {
    if (user.isAddStory) {
      // Handle add story functionality
      console.log('Add story pressed');
    } else {
      navigation.navigate('StoryViewer', {
        stories: user.stories,
        currentIndex: 0,
        userName: user.name
      });
    }
  };

  const StoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.storyContainer}
      onPress={() => handleStoryPress(item)}
    >
      <View style={styles.storyImageContainer}>
        {item.isAddStory && (
          <View style={styles.addStoryButton}>
            <MaterialIcons name="add" size={24} color="white" />
          </View>
        )}
        <Image
          source={item.picture}
          style={styles.storyImage}
        />
      </View>
      <Text style={styles.storyName} numberOfLines={1}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {content.map((item) => (
          <StoryItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  scrollView: {
    flexDirection: 'row',
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
    width: STORY_SIZE,
  },
  storyImageContainer: {
    width: STORY_SIZE,
    height: STORY_SIZE,
    borderRadius: STORY_SIZE / 2,
    borderWidth: 2,
    borderColor: '#FF1493',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  storyImage: {
    width: STORY_SIZE - 4,
    height: STORY_SIZE - 4,
    borderRadius: (STORY_SIZE - 4) / 2,
  },
  addStoryButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FF1493',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    borderWidth: 3,
    borderColor: 'white',
  },
  storyName: {
    fontSize: 12,
    textAlign: 'center',
    width: STORY_SIZE,
  },
});