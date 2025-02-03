import { useState, useRef } from "react"
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import Video from "react-native-video"
import { MaterialIcons, Feather } from "@expo/vector-icons"

const { width: screenWidth, height: screenHeight } = Dimensions.get("window")

const StoryViewer = ({ route, navigation }) => {
  const [stories, setStories] = useState(route.params.stories)
  const [activeStoryIndex, setActiveStoryIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("")
  const videoRef = useRef(null)
  const userName = route.params.userName

  const currentStory = stories[activeStoryIndex]

  const handleVideoProgress = (data) => {
    setProgress(data.currentTime / data.playableDuration)
  }

  const handlePress = () => {
    if (currentStory.type === "video") {
      setPaused(!paused)
    } else {
      handleStoryComplete()
    }
  }

  const handleStoryComplete = () => {
    if (activeStoryIndex < stories.length - 1) {
      setActiveStoryIndex(activeStoryIndex + 1)
      setProgress(0)
      setPaused(false)
      setLoading(true)
    } else {
      navigation.goBack()
    }
  }

  const handleSendMessage = () => {
    // Handle sending the message here
    setMessage("")
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <StatusBar hidden />

      {/* Background Media */}
      <View style={styles.mediaContainer}>
        {currentStory.type === "video" ? (
          <Video
            ref={videoRef}
            source={{ uri: currentStory.uri }}
            style={styles.media}
            resizeMode="contain"
            onProgress={handleVideoProgress}
            onLoad={() => setLoading(false)}
            paused={paused}
            onEnd={handleStoryComplete}
          />
        ) : (
          <Image
            source={{ uri: currentStory.uri }}
            style={styles.media}
            resizeMode="contain"
            onLoad={() => setLoading(false)}
          />
        )}
      </View>

      {/* Touch handlers overlay */}
      <TouchableOpacity activeOpacity={1} style={styles.touchHandler} onPress={handlePress}>
        {/* Progress bars */}
        <View style={styles.progressContainer}>
          {stories.map((story, index) => (
            <View key={story.id} style={styles.progressBar}>
              <View
                style={[
                  styles.activeProgress,
                  {
                    width: index === activeStoryIndex ? `${progress * 100}%` : index < activeStoryIndex ? "100%" : "0%",
                  },
                ]}
              />
            </View>
          ))}
        </View>

        {/* User header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image source={{ uri: currentStory.userAvatar }} style={styles.avatar} />
            <Text style={styles.userName}>{userName}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Message input */}
      <View style={styles.messageContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.messageInput}
            placeholder="Send message"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Feather name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mediaContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
  },
  media: {
    width: screenWidth,
    height: screenHeight,
  },
  touchHandler: {
    flex: 1,
    backgroundColor: "transparent",
  },
  progressContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingTop: Platform.OS === "ios" ? 44 : 8,
    paddingBottom: 8,
    gap: 2,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  progressBar: {
    flex: 1,
    height: 2,
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 1,
    overflow: "hidden",
  },
  activeProgress: {
    height: "100%",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  userName: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  messageContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === "ios" ? 34 : 24,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(255, 255, 255, 0.1)",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
  },
  messageInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    height: 40,
  },
  sendButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
})

export default StoryViewer