// import { View, Text, Image, StyleSheet } from "react-native"
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
// import { Wifi } from "lucide-react-native"

// const users = [
//   {
//     id: 1,
//     name: "Clara",
//     image: "/placeholder.svg?height=64&width=64",
//     location: {
//       latitude: 52.520008,
//       longitude: 13.404954,
//     },
//     isMain: true,
//   },
//   {
//     id: 2,
//     name: "James",
//     image: "/placeholder.svg?height=40&width=40",
//     location: {
//       latitude: 52.520108,
//       longitude: 13.405954,
//     },
//   },
//   // Add more users as needed
// ]

// export const MapComponent = () => {
//   const initialRegion = {
//     latitude: 52.520008,
//     longitude: 13.404954,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   }

//   return (
//     <View style={styles.container}>
//       <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={initialRegion} customMapStyle={mapStyle}>
//         {users.map((user) => (
//           <Marker key={user.id} coordinate={user.location} tracksViewChanges={false}>
//             <View style={[styles.markerContainer, user.isMain && styles.mainMarkerContainer]}>
//               <Image source={{ uri: user.image }} style={[styles.markerImage, user.isMain && styles.mainMarkerImage]} />
//             </View>
//           </Marker>
//         ))}
//       </MapView>

//       {/* Connect Card */}
//       <View style={styles.connectCard}>
//         <View style={styles.connectIconContainer}>
//           <Wifi size={16} color="#FFFFFF" />
//         </View>
//         <Text style={styles.connectText}>Connect with Clara 👋</Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 374,
//     borderRadius: 24,
//     overflow: "hidden",
//     marginHorizontal: 16,
//   },
//   map: {
//     width: "100%",
//     height: "100%",
//   },
//   markerContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     borderWidth: 3,
//     borderColor: "#FFFFFF",
//     overflow: "hidden",
//     shadowColor: "#4B164C",
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 50,
//     elevation: 5,
//   },
//   mainMarkerContainer: {
//     width: 93,
//     height: 93,
//     borderRadius: 46.5,
//   },
//   markerImage: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 20,
//   },
//   mainMarkerImage: {
//     borderRadius: 46.5,
//   },
//   connectCard: {
//     position: "absolute",
//     top: 35,
//     left: 32,
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#76CABB",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 16,
//     gap: 8,
//   },
//   connectIconContainer: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     backgroundColor: "rgba(255, 255, 255, 0.2)",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   connectText: {
//     color: "#FFFFFF",
//     fontSize: 12,
//     fontFamily: "Poppins",
//   },
// })

// // Custom map style to match the design
// const mapStyle = [
//   {
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#f5f5f5",
//       },
//     ],
//   },
//   {
//     elementType: "labels.icon",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#616161",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#f5f5f5",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.land_parcel",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#bdbdbd",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#ffffff",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#e9e9e9",
//       },
//     ],
//   },
// ]

