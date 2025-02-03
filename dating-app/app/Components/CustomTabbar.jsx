import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Home, Search, PlusCircle, Users, MessageCircle } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const getIcon = () => {
            const props = {
              size: 24,
              color: isFocused ? '#10b981' : '#6b7280',
              strokeWidth: 2
            };

            switch (route.name) {
              case 'HomeTab':
                return <Home {...props} />;
              case 'Explore':
                return <Search {...props} />;
              case 'Upload':
                return <PlusCircle {...props} />;
              case 'Connect':
                return <Users {...props} />;
              case 'Chat':
                return <MessageCircle {...props} />;
              default:
                return null;
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={[
                styles.tabButton,
                isFocused && styles.focusedTabButton
              ]}
            >
              {getIcon()}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16, // Adds space from bottom
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 32, // Full width minus padding
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabButton: {
    padding: 8,
    borderRadius: 20,
  },
  focusedTabButton: {
    backgroundColor: '#f0fdf4', // Light green background for active state
  }
});

export default CustomTabBar;