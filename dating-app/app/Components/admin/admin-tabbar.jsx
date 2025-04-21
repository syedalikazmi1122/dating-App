import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Layout, Users, Calendar, CreditCard } from "lucide-react-native"

export default function AdminTabBar({ state, descriptors, navigation }) {
    const icons = {
        Dashboard: Layout,
        Users: Users,
        IndividualProfile: Layout,  // added mapping for IndividualProfile
        Events: Calendar,
        Subscription: CreditCard,
      }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = options.tabBarLabel ?? route.name
        const isFocused = state.index === index
        const Icon = icons[route.name]

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={styles.tab}>
            <Icon size={24} color={isFocused ? "#76CABB" : "#FF5862"} opacity={isFocused ? 1 : 0.5} />
            <Text style={[styles.label, { color: isFocused ? "#76CABB" : "#FF5862" }]}>{label}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFE6E7",
    borderRadius: 20,
    margin: 16,
    height: 72,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: "Montserrat",
  },
})

