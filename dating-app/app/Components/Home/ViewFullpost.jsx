import React, { useState } from 'react';
import { 
  View, 
  Image, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity 
} from 'react-native';

import { ChevronLeft, MoreVertical } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

const PhotoFullscreen = ({ route, navigation }) => {
  // Assuming the photo is passed via navigation params
  const photo = require('./../../../assets/images/placeholder-profile.png');
  const [thumbnails] = useState([
    require('./../../../assets/images/placeholder-profile.png'),
    require('./../../../assets/images/placeholder-profile.png'),
    require('./../../../assets/images/placeholder-profile.png'),
    require('./../../../assets/images/placeholder-profile.png')
  ]);

  return (
    <View style={styles.container}>
      {/* Navigation Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <ChevronLeft color="black" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreButton}>
          <MoreVertical color="black" size={24} />
        </TouchableOpacity>
      </View>

      {/* Main Image */}
      <View style={styles.imageContainer}>
        <Image 
          source={photo} 
          style={styles.mainImage}
          resizeMode="cover"
        />
      </View>

      {/* Thumbnail Navigation */}
      <View style={styles.thumbnailContainer}>
        {thumbnails.map((thumb, index) => (
          <TouchableOpacity key={index} style={styles.thumbnailWrapper}>
            <Image 
              source={thumb} 
              style={styles.thumbnail}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  moreButton: {
    padding: 8,
  },
  imageContainer: {
    width: width,
    height: width * 1.2, // Maintaining aspect ratio
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  thumbnailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 16,
  },
  thumbnailWrapper: {
    width: (width - 64) / 4, // 4 thumbnails with spacing
    aspectRatio: 1,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default PhotoFullscreen;