
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { HeartIcon } from "lucide-react-native";

const MatchScreen = () => {
    return (
        <View style={styles.container}>
            {/* Match Images Section */}
            <View style={styles.imageContainer}>
                {/* First Image (Lower Position) */}
                <View style={[styles.imageWrapper, styles.lowerImage]}>
                    <Image 
                        source={{ uri: "https://source.unsplash.com/200x300/?woman,beach" }} 
                        style={styles.image} 
                    />
                    <View style={styles.UpperheartIconWrapper}>
                        <HeartIcon color="#FF3B3B" fill="#FF3B3B" size={20} />
                    </View>
                </View>
                {/* Second Image (Higher Position) */}
                <View style={[styles.imageWrapper, styles.higherImage]}>
                    <Image 
                        source={{ uri: "https://source.unsplash.com/200x300/?man,smile" }} 
                        style={styles.image} 
                    />
                    <View style={styles.LowerheartIconWrapper}>
                        <HeartIcon color="#FF3B3B" fill="#FF3B3B" size={20} />
                    </View>
                </View>
            </View>

            {/* Match Text Section */}
            <Text style={styles.matchText}>It's a match, Jake!</Text>
            <Text style={styles.subText}>Start a conversation now with each other</Text>

            {/* Buttons Section */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Book Event</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Message</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    imageContainer: {
        width: 280,
        height: 260,
        position: 'relative',
        marginBottom: 20,
    },
    imageWrapper: {
        width: 140,
        height: 200,
        borderRadius: 15,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        position: 'absolute',
        backgroundColor: 'white',
    },
    higherImage: {
        right: 0,
        top: 0,
        transform: [{ rotate: "10deg" }],
        zIndex: 1,
    },
    lowerImage: {
        left: 0,
        top: 40, // Positioned 40 units lower than the higher image
        transform: [{ rotate: "-10deg" }],
        zIndex: 2,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    UpperheartIconWrapper: {
        position: "absolute",
        bottom: 10,
        left: 0,
        width: 30,
        height: 30,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    LowerheartIconWrapper: {
        position: "absolute",
        top: 1,
        right: 1,
        width: 30,
        height: 30,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    matchText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#FF3B3B",
        textAlign: "center",
        marginTop: 20,
    },
    subText: {
        fontSize: 14,
        color: "#777",
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#FF3B3B",
        width: "90%",
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    secondaryButton: {
        backgroundColor: "#F5F5F5",
        width: "90%",
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    secondaryButtonText: {
        color: "#FF3B3B",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default MatchScreen;