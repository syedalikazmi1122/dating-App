import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    TextInput,
} from 'react-native';

import Svg, { G, Path, Circle, ClipPath, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { ArrowLeft, Send, MoreVertical } from 'lucide-react-native';
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
    </Svg>
);

const ChatInterface = ({navigation}) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hi Jessica! How are you today?', type: 'received', time: '11:34' },
        { id: 2, text: 'Hey! Im doing great, thanks for asking. How about you?', type: 'sent', time: '12:24' },
    ]);
    const handlenavigateBack=(event)=>
    {event.stopPropagation();
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <BackgroundSVG />
            
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}
                    onPress={(event)=>handlenavigateBack(event)}
                >
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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

            <View style={styles.chatSection}>
                {/* Profile Section */}
                <View style={styles.profileSection}>
                    <Image 
                        source={uri}
                        style={styles.profileImage}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Jessica Parker, 23</Text>
                        <Text style={styles.onlineStatus}>Online</Text>
                    </View>
                    <TouchableOpacity style={styles.moreButton}>
                        <MoreVertical color="#1A1A1A" size={24} />
                    </TouchableOpacity>
                </View>

                {/* Today Divider */}
                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>Today</Text>
                    <View style={styles.dividerLine} />
                </View>

                {/* Messages */}
                <ScrollView style={styles.messagesContainer}>
                    {messages.map((msg) => (
                        <View key={msg.id} style={[
                            styles.messageWrapper,
                            msg.type === 'sent' ? styles.sentWrapper : styles.receivedWrapper
                        ]}>
                            <View style={[
                                styles.messageBox,
                                msg.type === 'sent' ? styles.sentMessageBox : styles.receivedMessageBox
                            ]}>
                                <Text style={[
                                    styles.messageText,
                                    msg.type === 'sent' ? styles.sentMessageText : styles.receivedMessageText
                                ]}>{msg.text}</Text>
                                <Text style={[
                                    styles.timeText,
                                    msg.type === 'sent' ? styles.sentTimeText : styles.receivedTimeText
                                ]}>{msg.time}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                {/* Input Area */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type a message..."
                        placeholderTextColor="rgba(26, 26, 26, 0.4)"
                        value={message}
                        onChangeText={setMessage}
                    />
                    <TouchableOpacity style={styles.sendButton}>
                        <Send color="#FF5862" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    header: {
        paddingTop: 40,
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    headerTitle: {
        marginLeft:60,
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.08)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatSection: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    profileInfo: {
        flex: 1,
        marginLeft: 15,
    },
    profileName: {
        color: '#1A1A1A',
        fontSize: 18,
        fontWeight: '600',
    },
    onlineStatus: {
        color: '#1A1A1A',
        opacity: 0.6,
        fontSize: 14,
    },
    moreButton: {
        padding: 10,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 16,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(26, 26, 26, 0.1)',
    },
    dividerText: {
        color: '#1A1A1A',
        opacity: 0.6,
        paddingHorizontal: 15,
        fontSize: 12,
    },
    messagesContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    messageWrapper: {
        marginBottom: 12,
        maxWidth: '80%',
    },
    sentWrapper: {
        alignSelf: 'flex-end',
    },
    receivedWrapper: {
        alignSelf: 'flex-start',
    },
    messageBox: {
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    sentMessageBox: {
        backgroundColor: '#FF5862',
    },
    receivedMessageBox: {
        backgroundColor: '#F5F5F5',
    },
    messageText: {
        fontSize: 15,
    },
    sentMessageText: {
        color: 'white',
    },
    receivedMessageText: {
        color: '#1A1A1A',
    },
    timeText: {
        fontSize: 11,
        marginTop: 4,
        textAlign: 'right',
    },
    sentTimeText: {
        color: 'rgba(255, 255, 255, 0.6)',
    },
    receivedTimeText: {
        color: 'rgba(26, 26, 26, 0.4)',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: 'rgba(26, 26, 26, 0.1)',
    },
    input: {
        flex: 1,
        height: 48,
        backgroundColor: '#F5F5F5',
        borderRadius: 24,
        paddingHorizontal: 20,
        color: '#1A1A1A',
        fontSize: 16,
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
    },
});

export default ChatInterface;
