import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import  TopStories  from "./../../../Components/explore/top-stories";
import { MapPin, Search, Bell } from "lucide-react-native";

export default function App() {
    const [selectedInterest, setSelectedInterest] = useState(null);

    const interests = ["Football", "Nature", "Language", "Music", "Writing"];

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.locationContainer}>
                    <View style={styles.location}>
                        <MapPin size={12} color="#FF5862" />
                        <Text style={styles.locationText}>Germany</Text>
                    </View>
                    <Text style={styles.title}>Discover</Text>
                </View>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Search size={20} color="#76CABB" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Bell size={20} color="#76CABB" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.content}>
                {/* Stories */}
                <TopStories />

                {/* Interest Tags */}
                <View style={styles.interestSection}>
                    <Text style={styles.sectionTitle}>Interest</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagsContainer}>
                        {interests.map((interest) => (
                            <TouchableOpacity
                                key={interest}
                                style={[
                                    styles.tag,
                                    selectedInterest === interest && styles.activeTag,
                                ]}
                                onPress={() => setSelectedInterest(interest)}
                            >
                                <Text
                                    style={[
                                        styles.tagText,
                                        selectedInterest === interest && styles.activeTagText,
                                    ]}
                                >
                                    {interest}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Around Me Section */}
                <View style={styles.aroundMeSection}>
                    <Text style={styles.sectionTitle}>Around me</Text>
                    <Text style={styles.subtitle}>
                        People with "{selectedInterest}" interest around you
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF7FD",
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    locationContainer: {
        gap: 6,
    },
    location: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    locationText: {
        color: "#76CABB",
        fontSize: 12,
        fontFamily: "Poppins",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#76CABB",
        fontFamily: "Poppins",
    },
    headerIcons: {
        flexDirection: "row",
        gap: 12,
    },
    iconButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 1.5,
        borderColor: "#76CABB",
        opacity: 0.2,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        flex: 1,
    },
    interestSection: {
        paddingHorizontal: 16,
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#76CABB",
        marginBottom: 16,
        fontFamily: "Poppins",
    },
    tagsContainer: {
        flexDirection: "row",
    },
    tag: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 32,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "rgba(118, 202, 187, 0.8)",
        marginRight: 8,
    },
    activeTag: {
        backgroundColor: "#FF5862",
    },
    tagText: {
        color: "#FF5862",
        fontSize: 16,
        fontFamily: "Poppins",
    },
    activeTagText: {
        color: "#FFFFFF",
    },
    aroundMeSection: {
        paddingHorizontal: 16,
        marginTop: 24,
    },
    subtitle: {
        fontSize: 14,
        color: "#6C727F",
        fontFamily: "Poppins",
    },
});
