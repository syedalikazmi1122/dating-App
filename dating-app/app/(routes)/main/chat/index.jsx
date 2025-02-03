import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    GestureResponderEvent,
    Platform,
} from 'react-native';
import Svg, { G, Path, Circle, ClipPath, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import uri from './../../../../assets/images/placeholder-profile.png';
const BackgroundSVG = () => (
    <Svg width="100%" height="100%" viewBox="0 0 375 812" style={StyleSheet.absoluteFill}>
        <Defs>
            <LinearGradient id="paint0_linear_51_4017" x1="187.5" y1="0" x2="187.5" y2="812" gradientUnits="userSpaceOnUse">
                <Stop stopColor="#76CABB" />
                <Stop offset="1" stopColor="#FF5862" />
            </LinearGradient>
        </Defs>
        <Rect width="375" height="812" fill="url(#paint0_linear_51_4017)" />
        <G opacity="0.2">
            <Path d="M259.636 324.501L258.745 323.819C270.606 308.246 276.878 289.642 276.878 270.01C276.878 239.598 261.576 211.618 235.944 195.164L236.553 194.22C262.51 210.874 278 239.21 278 270.01C278 289.883 271.644 308.729 259.636 324.501Z" fill="white" />
            <Path d="M188.005 360C138.378 360 98 319.625 98 270C98 220.375 138.378 180 188.005 180V181.122C138.996 181.122 99.1327 220.994 99.1327 269.99C99.1327 318.996 139.007 358.857 188.005 358.857C202.814 358.857 217.476 355.144 230.396 348.118L230.931 349.104C217.843 356.246 202.992 360 188.005 360Z" fill="white" />
            <Path d="M145.415 339.278C121.167 324.344 106.694 298.441 106.694 270H108.949C108.949 297.654 123.024 322.834 146.6 337.358L145.415 339.278Z" fill="white" />
            <Path d="M188.006 351.317C179.091 351.317 170.334 349.88 161.965 347.059L162.688 344.93C170.827 347.678 179.343 349.072 188.016 349.072C228.74 349.072 262.563 318.566 266.663 278.106L268.908 278.337C264.671 319.929 229.894 351.317 188.006 351.317Z" fill="white" />
            <Path d="M266.055 257.374C263.108 239.032 253.69 222.221 239.521 210.046C225.205 197.734 206.904 190.959 188.006 190.959C172.746 190.959 157.937 195.311 145.174 203.554C130.302 213.16 118.955 227.632 113.218 244.307L111.089 243.573C116.983 226.426 128.656 211.545 143.947 201.666C157.077 193.193 172.305 188.715 187.995 188.715C207.439 188.715 226.254 195.689 240.979 208.347C255.546 220.868 265.237 238.161 268.268 257.028L266.055 257.374Z" fill="white" />
            <Path d="M188.005 328.728C155.619 328.728 129.274 302.384 129.274 270C129.274 256.891 133.501 244.496 141.482 234.155L143.265 235.529C135.588 245.481 131.529 257.395 131.529 270C131.529 301.136 156.867 326.473 188.005 326.473C193.532 326.473 198.996 325.676 204.23 324.103L204.88 326.263C199.426 327.91 193.742 328.728 188.005 328.728Z" fill="white" />
            <Path d="M227.67 313.311L226.149 311.654C237.801 300.979 244.482 285.804 244.482 270.01C244.482 258.894 241.252 248.134 235.148 238.895L237.025 237.658C243.381 247.264 246.737 258.454 246.737 270.021C246.726 286.433 239.783 302.216 227.67 313.311Z" fill="white" />
            <Path d="M223.139 225.786C213.06 217.764 200.905 213.527 188.005 213.527C176.689 213.527 165.771 216.862 156.427 223.175L155.168 221.308C164.88 214.743 176.238 211.283 188.005 211.283C201.429 211.283 214.067 215.687 224.544 224.035L223.139 225.786Z" fill="white" />
            <Path d="M188.006 318.639C180.098 318.639 172.243 316.699 165.3 313.028L165.824 312.032C172.61 315.619 180.276 317.517 187.995 317.517C209.317 317.517 228.152 303.181 233.805 282.647L234.886 282.952C229.117 303.968 209.83 318.639 188.006 318.639Z" fill="white" />
            <Path d="M153.617 304.408C144.43 295.221 139.364 283.004 139.364 270.011C139.364 243.195 161.179 221.372 188.006 221.372C214.823 221.372 236.648 243.195 236.648 270.011H235.526C235.526 243.814 214.215 222.504 188.017 222.504C161.818 222.504 140.507 243.814 140.507 270.011C140.507 282.7 145.447 294.634 154.435 303.611L153.617 304.408Z" fill="white" />
            <Path d="M188.005 300.255C171.319 300.255 157.748 286.685 157.748 270C157.748 253.315 171.319 239.745 188.005 239.745V241.999C172.567 241.999 160.003 254.563 160.003 270C160.003 285.437 172.567 298 188.005 298C203.443 298 216.007 285.437 216.007 270H218.262C218.251 286.685 204.68 300.255 188.005 300.255Z" fill="white" />
            <Path d="M188.006 285.038C179.71 285.038 172.967 278.295 172.967 270H174.089C174.089 277.666 180.329 283.906 187.996 283.906C195.662 283.906 201.902 277.666 201.902 270C201.902 262.334 195.662 256.094 187.996 256.094C183.738 256.094 179.773 258.003 177.109 261.338L176.228 260.635C179.102 257.027 183.392 254.961 187.996 254.961C196.291 254.961 203.035 261.705 203.035 270C203.035 278.295 196.291 285.038 188.006 285.038Z" fill="white" />
        </G>
    </Svg>
);

const MessagesScreen = ({ navigation }) => {
    const recentMatches = [
        { id: 1, count: 32 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ];

    const messages = [
        {
            id: 1,
            name: 'Jessica Parker',
            age: 23,
            message: 'What about that new jacket #',
            time: '09:19',
            isOnline: true,
            uri:'./../../../../assets/images/placeholder-profile.png'
        },
        {
            id: 2,
            name: 'Clara Hazel',
            message: 'I know right 😊',
            time: '12:44',
            uri:'./../../../../assets/images/placeholder-profile.png',
            isOnline: true,
        },
        {
            id: 3,
            name: 'Brandon Aminoff',
            message: "I've already registered, can't wai...",
            time: '08:08',
            uri:'./../../../../assets/images/placeholder-profile.png',
            isOnline: true,
        },
        {
            id: 4,
            name: 'Amina Mina',
            message: 'It will have two lines of heading -',
            time: '09:32',
            uri:'./../../../../assets/images/placeholder-profile.png',

            isOnline: true,
        },
        {
            id: 5,
            name: 'Amina Mina',
            message: 'It will have two lines of heading -',
            time: '09:32',
            uri:'./../../../../assets/images/placeholder-profile.png',
            uri:'./../../../../assets/images/placeholder-profile.png',
            isOnline: true,
        },
        {
            id: 6,
            name: 'Amina Mina',
            message: 'It will have two lines of heading -',
            time: '09:32',
            uri:'./../../../../assets/images/placeholder-profile.png',
            isOnline: true,
        },
        {
            id: 7,
            name: 'Amina Mina',
            message: 'It will have two lines of heading -',
            time: '09:32',
            isOnline: true,
            uri:'./../../../../assets/images/placeholder-profile.png'
        },
    ];

    const handleBack = (event) => {
        event.stopPropagation();
        navigation.goBack();
    };

    const handleMatchPress = (matchId) => (event) => {
        event.stopPropagation();
        console.log('Match pressed:', matchId);
    };

    const handleMessagePress = (messageId) => (event) => {
        event.stopPropagation();
        navigation.navigate('Chatinterface');
        console.log('Message pressed:', messageId);
    };

    const handleNavPress = (index) => (event) => {
        event.stopPropagation();
        console.log('Nav item pressed:', index);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <BackgroundSVG />
            <View style={styles.topBar}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={handleBack}
                            activeOpacity={0.7}
                        >
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G clipPath="url(#clip0_416_1100)">
                                    <Path d="M15 6L9 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_416_1100">
                                        <Rect width="24" height="24" fill="white" />
                                    </ClipPath>
                                </Defs>
                            </Svg>
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Messages</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Recent Matches</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.matchesContainer}
                            contentContainerStyle={styles.matchesContentContainer}
                        >
                            {recentMatches.map((match) => (
                                <TouchableOpacity
                                    key={match.id}
                                    onPress={handleMatchPress(match.id)}
                                    activeOpacity={0.9}
                                    style={styles.matchItem}
                                    
                                >
                                    <View style={styles.matchImageContainer}>
                                        <Image source={uri} style={styles.placeholderImage} />
                                        {match.count && (
                                            <View style={styles.countBadge}>
                                                <Text style={styles.countText}>{match.count}</Text>
                                            </View>
                                        )}
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>

            <View style={styles.contentContainer}>
                <ScrollView
                    style={styles.messagesContainer}
                    showsVerticalScrollIndicator={false}
                >
                    {messages.map((message) => (
                        <TouchableOpacity
                            key={message.id}
                            style={styles.messageItem}
                            onPress={() => navigation.navigate("Chatinterface")}
                            activeOpacity={0.7}
                        >
                            <View style={styles.avatarContainer}>
                                <View  />
                                 {console.log("source is ", message.uri)}
                                 <Image source={uri}  style={styles.placeholderAvatar} />
                                {message.isOnline && <View style={styles.onlineIndicator} />}
                            </View>
                            <View style={styles.messageContent}>
                                <View style={styles.messageHeader}>
                                    <Text style={styles.messageName}>
                                        {message.name}
                                        {message.age && <Text style={styles.messageAge}>, {message.age}</Text>}
                                    </Text>
                                    <Text style={styles.messageTime}>{message.time}</Text>
                                </View>
                                <Text style={styles.messageText} numberOfLines={1}>
                                    {message.message}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#76CABB',
    },
    safeArea: {
        paddingTop: 50,
        width: '100%',
    },
    topBar: {
        height: Platform.OS === 'ios' ? 92 : 250,
        width: '100%',
        backgroundColor: 'transparent',
        paddingTop: Platform.OS === 'ios' ? 44 : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.08)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        position: 'absolute',
        width: 125,
        left: 125,
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        lineHeight: 30,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    },
    section: {
        paddingHorizontal: 24,
        marginTop: 24,
    },
    sectionTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        lineHeight: 24,
        color: '#FFFFFF',
        fontWeight: '600',
        marginBottom: 16,
    },
    matchesContainer: {
        flexDirection: 'row',
    },
    matchesContentContainer: {
        gap: 20,
        paddingRight: 20,
    },
    matchItem: {
        width: 60,
        height: 60,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#C4C4C4',
    },
    placeholderImage: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: -20,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        overflow: 'hidden',
    },
    messagesContainer: {
        flex: 1,
        paddingTop: 24,
    },
    messageItem: {
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(34, 23, 42, 0.08)',
    },
    avatarContainer: {
        width: 56,
        height: 56,
        position: 'relative',
    },
    placeholderAvatar: {
        width: 56,
        height: 56,
        backgroundColor: '#C4C4C4',
        borderRadius: 40,
    },
    onlineIndicator: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: 12,
        height: 12,
        backgroundColor: '#76CABB',
        borderRadius: 6,
    },
    messageContent: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'center',
    },
    messageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    messageName: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        lineHeight: 23,
        color: '#22172A',
        fontWeight: '600',
    },
    messageAge: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        lineHeight: 23,
        color: '#22172A',
        fontWeight: '600',
    },
    messageTime: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        lineHeight: 20,
        color: '#9EA3AE',
        fontWeight: '500',
    },
    messageText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        lineHeight: 20,
        color: '#22172A',
        fontWeight: '400',
    },
    countBadge: {
        position: 'absolute',
        left: 24,
        top: 16,
        zIndex: 1,
    },
    countText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: 'rgba(34, 23, 42, 0.08)',
    },
    navItem: {
        alignItems: 'center',
    },
    navIcon: {
        width: 24,
        height: 24,
        backgroundColor: '#C4C4C4',
        borderRadius: 12,
    },
    activeNavIcon: {
        backgroundColor: '#76CABB',
    },
});
export default MessagesScreen;