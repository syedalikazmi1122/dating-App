
// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Svg, Path, Circle, Rect } from 'react-native-svg';
// import image from "./../../../assets/images/placeholder-profile.png";

// const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;

// const DatingApp = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.phoneContainer}>
//         <Image
//           source={require('./../../../assets/images/homebackgroundgirl.png')}
//           style={styles.profileImage}
//         />
        
//         <LinearGradient
//           colors={['rgba(118, 202, 187, 0)', 'rgba(118, 202, 187, 0.7)', '#76CABB']}
//           style={styles.gradientOverlay}
//         />
//         <View style={styles.topBar}>
//           <TouchableOpacity style={styles.iconButton}>
//             <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
//               <Path d="M10 12L6 8L10 4" stroke="#76CABB" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
//             </Svg>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.iconButton}>
//             <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
//               <Path d="M6 12L10 8L6 4" stroke="#76CABB" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
//             </Svg>
//           </TouchableOpacity>
          
//           <Text style={styles.nameContainer}>Name Here</Text>
          
//           <TouchableOpacity style={styles.iconButton}>
//             <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
//               <Path d="M8 3V13" stroke="#76CABB" strokeWidth={1.5} strokeLinecap="round" />
//               <Path d="M3 8H13" stroke="#76CABB" strokeWidth={1.5} strokeLinecap="round" />
//             </Svg>
//           </TouchableOpacity>
        
       
          
//           <TouchableOpacity style={styles.iconButton}>
//             <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
//               <Path d="M8 4V6" stroke="#FF5862" strokeWidth={1.5} strokeLinecap="round" />
//               <Path d="M8 10V12" stroke="#FF5862" strokeWidth={1.5} strokeLinecap="round" />
//               <Circle cx={8} cy={8} r={6} stroke="#76CABB" strokeWidth={1.5} />
//             </Svg>
//           </TouchableOpacity>
//         </View>
//            {/* photo */}
//            <View >
//             <Image source={{ uri: './../../../../../assets/images/placeholder-profile.png' }} style={{ width: 34, height: 30.38 }} />
//           </View>
//         <View style={styles.profileInfo}>
//           <Text style={styles.profileName}>Jenny L , 32</Text>
//           <Text style={styles.profileProfession}>profession</Text>
//         </View>
        
//         <View style={styles.tagsContainer}>
//           <View style={styles.tag}>
//             <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
//               <Path d="M8 2L9.7 5.4L13.5 6L10.8 8.6L11.4 12.4L8 10.6L4.6 12.4L5.2 8.6L2.5 6L6.3 5.4L8 2Z" fill="#FF5862" />
//             </Svg>
//             <Text style={styles.tagText}>3km away</Text>
//           </View>
          
//           <View style={styles.tag}>
//             <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
//               <Path d="M4 6L6.5 9L12 3" stroke="#22B517" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
//             </Svg>
//             <Text style={styles.tagText}>Active today</Text>
//           </View>
          
//           <View style={styles.tag}>
//             <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
//               <Path d="M4 7.5V5.5C4 3.6 5.6 2 7.5 2H8.5C10.4 2 12 3.6 12 5.5V7.5" stroke="#FF5862" strokeWidth={1.5} />
//               <Path d="M8 11.5V9.5" stroke="#FF5862" strokeWidth={1.5} strokeLinecap="round" />
//               <Rect x={5} y={7.5} width={6} height={6} rx={2} fill="#FF5862" />
//             </Svg>
//             <Text style={styles.tagText}>Private Photos</Text>
//           </View>
          
//           <View style={styles.tag}>
//             <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
//               <Path d="M8 3V4M8 12V13M13 8H12M4 8H3" stroke="#FF5862" strokeWidth={1.5} strokeLinecap="round" />
//               <Circle cx={8} cy={8} r={4} fill="#FF5862" fillOpacity={0.2} />
//             </Svg>
//             <Text style={styles.tagText}>Practicing</Text>
//           </View>
          
//           <View style={styles.tag}>
//             <Svg width={17} height={11} viewBox="0 0 17 11" fill="none">
//               <Rect width={17} height={11} fill="#BD3D44" />
//               <Rect y={1.5} width={17} height={1} fill="white" />
//               <Rect y={3.5} width={17} height={1} fill="white" />
//               <Rect y={5.5} width={17} height={1} fill="white" />
//               <Rect y={7.5} width={17} height={1} fill="white" />
//               <Rect y={9.5} width={17} height={1} fill="white" />
//               <Rect width={7} height={6} fill="#192F5D" />
//             </Svg>
//             <Text style={styles.tagText}>USA</Text>
//           </View>
          
//           <View style={styles.tag}>
//             <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
//               <Path d="M2 8H14" stroke="#FF5862" strokeWidth={1.5} strokeLinecap="round" />
//               <Path d="M14 8L10 4" stroke="#FF5862" strokeWidth={1.5} strokeLinecap="round" />
//               <Path d="M2 8L6 12" stroke="#FF5862" strokeWidth={1.5} strokeLinecap="round" />
//             </Svg>
//             <Text style={styles.tagText}>%90</Text>
//           </View>
          
//           <View style={styles.tag}>
//             <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
//               <Circle cx={8} cy={8} r={6} stroke="#FF5862" strokeWidth={1.5} />
//               <Path d="M8 4V8L10 10" stroke="#FF5862" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
//             </Svg>
//             <Text style={styles.tagText}>Trust score</Text>
//           </View>
//         </View>
        
//         <View style={styles.actionButtons}>
//           <TouchableOpacity style={styles.actionButton}>
//             <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
//               <Path d="M7 16L17 6M7 6L17 16" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//             </Svg>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.actionButton}>
//             <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
//               <Path d="M12 5V19" stroke="white" strokeWidth={2} strokeLinecap="round" />
//               <Path d="M5 12H19" stroke="white" strokeWidth={2} strokeLinecap="round" />
//             </Svg>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.actionButton}>
//             <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
//               <Path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="white" />
//             </Svg>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.actionButton}>
//             <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
//               <Path d="M21 15C21 16.1 20.1 17 19 17H7L3 21V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V15Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//             </Svg>
//           </TouchableOpacity>
//         </View>
        
//         <View style={styles.bottomNav}>
//           <TouchableOpacity style={styles.navItem}>
//             <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
//               <Path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="rgba(255, 88, 98, 0.8)" strokeWidth={1.5} />
//             </Svg>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
//             <View style={styles.discoverIconBg}>
//               <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
//                 <Circle cx={12} cy={12} r={9} stroke="white" strokeWidth={1.5} />
//                 <Circle cx={12} cy={12} r={3} fill="white" />
//               </Svg>
//             </View>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.navItem}>
//             <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
//               <Path d="M12 5V19" stroke="rgba(255, 88, 98, 0.8)" strokeWidth={1.5} strokeLinecap="round" />
//               <Path d="M5 12H19" stroke="rgba(255, 88, 98, 0.8)" strokeWidth={1.5} strokeLinecap="round" />
//             </Svg>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.navItem}>
//             <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
//               <Path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="rgba(255, 88, 98, 0.8)" strokeWidth={1.5} />
//             </Svg>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.navItem}>
//             <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
//               <Path d="M21 15C21 16.1 20.1 17 19 17H7L3 21V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V15Z" stroke="rgba(255, 88, 98, 0.8)" strokeWidth={1.5} />
//             </Svg>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   phoneContainer: {
//     width: screenWidth,
//     height: screenHeight,
//     backgroundColor: '#FFFFFF',
//     position: 'relative',
//   },
//   profileImage: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   gradientOverlay: {
//     position: 'absolute',
//     width: '100%',
//     height: 446,
//     bottom: 0,
//   },
//   topBar: {
//     position: 'absolute',
//     top: 55,
//     left: 0,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 28,
//     alignItems: 'center',
//   },
//   iconButton: {
//     width: 34,
//     height: 30.38,
//     borderWidth: 0.72,
//     borderColor: '#76CABB',
//     borderRadius: 7.23,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   nameContainer: {
//     fontFamily: 'Inter',
//     fontWeight: '700',
//     fontSize: 18,
//   },
//   profileInfo: {
//     position: 'absolute',
//     left: 39,
//     bottom: 130,
//   },
//   profileName: {
//     fontFamily: 'Open Sans',
//     fontWeight: '700',
//     fontSize: 32,
//     lineHeight: 44,
//     color: '#FFFFFF',
//   },
//   profileProfession: {
//     fontFamily: 'Open Sans',
//     fontWeight: '400',
//     fontSize: 20,
//     lineHeight: 27,
//     color: '#FFFFFF',
//   },
//   tagsContainer: {
//     position: 'absolute',
//     bottom: 180,
//     left: 40,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     width: '80%',
//     gap: 10,
//   },
//   tag: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 32,
//     gap: 6,
//   },
//   tagText: {
//     fontFamily: 'Poppins',
//     fontSize: 11,
//     color: '#FFFFFF',
//   },
//   actionButtons: {
//     position: 'absolute',
//     bottom: 85,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 15,
//   },
//   actionButton: {
//     width: 41.73,
//     height: 41.73,
//     backgroundColor: '#FF5862',
//     borderRadius: 21,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 3.34, height: 3.34 },
//     shadowOpacity: 0.25,
//     shadowRadius: 16.69,
//     elevation: 5,
//   },
//   bottomNav: {
//     position: 'absolute',
//     width: 350,
//     height: 64,
//     left: (screenWidth - 350) / 2 + 4,
//     bottom: 10,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 40,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     shadowColor: 'rgba(117, 34, 119, 0.15)',
//     shadowOffset: { width: 8, height: 0 },
//     shadowOpacity: 1,
//     shadowRadius: 40,
//     elevation: 10,
//   },
//   navItem: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     opacity: 0.5,
//   },
//   navItemActive: {
//     opacity: 1,
//   },
//   discoverIconBg: {
//     position: 'relative',
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  
// });

// export default DatingApp;
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import imageee from "./../../../../assets/images/placeholder-profile.png";
import { User, UserIcon } from 'lucide-react-native';
const { width, height } = Dimensions.get('window');
import { MessageCircle } from 'lucide-react-native';
// import { Chat } from 'lucide-react-native';
import { useNavigation } from 'expo-router';

const ProfileScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./../../../../assets/images/homebackgroundgirl.png')}
        style={styles.backgroundImage}
      />
      
      {/* Top Actions */}
      <View style={styles.topActions}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons 
           onPress={() => navigation.goBack()}
          name="arrow-back" size={24} color="#FF5862" />
        </TouchableOpacity>
      </View>

      {/* Profile Info Gradient Overlay */}
      <LinearGradient
        colors={['transparent', 'rgba(118, 202, 187, 0.7)', '#76CABB']}
        style={styles.gradient}
      >
        <Text style={styles.name}>Jenny Lawrence</Text>
        
        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={24} color="#FFF" />
          <Text style={styles.locationText}>3km away</Text>
        </View>

        {/* Tags Section */}
        <View style={styles.tagsContainer}>
          <View style={styles.tagRow}>
            <Tag icon="check-circle" text="Active today" />
            <Tag icon="lock" text="Private Photos" />
          </View>
          <View style={styles.tagRow}>
            <Tag icon="group-add" text="Just join" />
            <Tag icon="mood" text="Practicing" />
          </View>
          <View style={styles.tagRow}>
            <Tag icon="flag" text="USA" />
            <Tag icon="favorite" text="90%" />
          </View>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.actionButton, styles.CommentButton]}>
            <MessageCircle size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.closeButton]}>
            <FontAwesome name="close" size={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.heartButton]}>
            <FontAwesome name="heart" size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.ProfileButton]}>
             <UserIcon size={20} color="#FFF" />
            </TouchableOpacity>
        </View>

      
      </LinearGradient>
    </SafeAreaView>
  );
};

const Tag = ({ icon, text }) => (
  <View style={styles.tag}>
    <MaterialIcons name={icon} size={16} color="#FFF" />
    <Text style={styles.tagText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  backgroundImage: {
    width: width,
    height: height,
    resizeMode: 'fit',
    position: 'absolute',
  },
  topActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.55,
    padding: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 15,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationText: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 8,
  },
  tagsContainer: {
    marginBottom: 20,
  },
  tagRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 10,
  },
  tagText: {
    color: '#FFF',
    marginLeft: 6,
    fontSize: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  actionButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  ProfileButton: {
    backgroundColor: '#FF5862',
  },
  closeButton: {
    backgroundColor: '#FF5862',
  },
  heartButton: {
    backgroundColor: '#FF5862',
  },
   CommentButton: {
    backgroundColor: '#FF5862',
    },
});

export default ProfileScreen;