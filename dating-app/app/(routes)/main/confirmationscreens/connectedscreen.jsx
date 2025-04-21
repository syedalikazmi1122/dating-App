
// export default MatchesScreen;
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { ArrowLeft, Paperclip, Mic, MessageSquare } from 'lucide-react-native';
import Svg, { G, Rect, Defs, ClipPath, Path } from 'react-native-svg';
import { CheckCheck } from 'lucide-react-native';
const { width, height } = Dimensions.get('window');


const BackgroundPattern = () => (
  <Svg width={width} height={height} viewBox="0 0 375 812" fill="none" style={StyleSheet.absoluteFill}>
    <G clipPath="url(#clip0_51_4146)">
      <Rect width="375" height="812" fill="#76CABB" fillOpacity="0.8" />
      <G opacity="0.2" fill="white">
        <Path d="M301.044 578.259L299.624 580.116C267.18 555.404 228.421 542.338 187.522 542.338C124.162 542.338 65.8716 574.216 31.592 627.616L29.6256 626.349C64.3203 572.272 123.354 540 187.522 540C228.924 540 268.185 553.241 301.044 578.259Z" fill="white" />
        <Path d="M375 727.489C375 830.88 290.885 915 187.5 915C84.115 915 0 830.88 0 727.489H2.33773C2.33773 829.591 85.404 912.64 187.478 912.64C289.574 912.64 372.619 829.569 372.619 727.489C372.619 696.638 364.885 666.092 350.246 639.174L352.3 638.06C367.179 665.328 375 696.266 375 727.489Z" fill="white" />
        <Path d="M356.91 727.487C356.91 746.059 353.917 764.303 348.039 781.739L343.604 780.232C349.328 763.277 352.234 745.535 352.234 727.466C352.234 642.625 288.678 572.16 204.388 563.617L204.869 558.942C291.519 567.769 356.91 640.221 356.91 727.487Z" fill="white" />
        <Path d="M161.195 564.886C122.983 571.025 87.9605 590.646 62.5949 620.164C36.9452 649.989 22.8314 688.116 22.8314 727.488C22.8314 759.279 31.8983 790.13 49.0709 816.721C69.0837 847.703 99.234 871.344 133.972 883.296L132.443 887.731C96.7215 875.452 65.7191 851.134 45.1382 819.277C27.485 791.922 18.1559 760.197 18.1559 727.51C18.1559 687.002 32.6848 647.804 59.0554 617.127C85.142 586.779 121.17 566.59 160.474 560.275L161.195 564.886Z" fill="white" />
        <Path d="M309.85 727.488C309.85 794.959 254.967 849.845 187.5 849.845C160.19 849.845 134.366 841.039 112.824 824.412L115.686 820.698C136.42 836.691 161.239 845.147 187.5 845.147C252.367 845.147 305.152 792.359 305.152 727.488C305.152 715.974 303.492 704.59 300.215 693.688L304.715 692.333C308.145 703.695 309.85 715.537 309.85 727.488Z" fill="white" />
        <Path d="M277.732 644.854L274.28 648.022C252.039 623.748 220.425 609.83 187.522 609.83C164.363 609.83 141.947 616.559 122.699 629.276L120.12 625.365C140.133 612.124 163.445 605.132 187.544 605.132C221.736 605.154 254.617 619.618 277.732 644.854Z" fill="white" />
        <Path d="M95.3882 654.295C78.6744 675.292 69.8478 700.615 69.8478 727.49C69.8478 751.066 76.7955 773.811 89.9481 793.278L86.0591 795.9C72.3822 775.668 65.1724 752.005 65.1724 727.49C65.1724 699.523 74.3486 673.194 91.7396 651.367L95.3882 654.295Z" fill="white" />
        <Path d="M288.832 727.488C288.832 743.963 284.79 760.328 277.143 774.792L275.067 773.7C282.539 759.563 286.494 743.591 286.494 727.51C286.494 683.09 256.628 643.849 213.849 632.072L214.483 629.822C258.266 641.839 288.832 682.02 288.832 727.488Z" fill="white" />
        <Path d="M259.184 799.131C240.045 818.271 214.592 828.824 187.522 828.824C131.657 828.824 86.191 783.378 86.191 727.487C86.191 671.618 131.657 626.15 187.522 626.15V628.488C132.946 628.488 88.5506 672.886 88.5506 727.465C88.5506 782.045 132.946 826.443 187.522 826.443C213.959 826.443 238.822 816.152 257.524 797.427L259.184 799.131Z" fill="white" />
        <Path d="M250.531 727.489C250.531 762.251 222.26 790.524 187.499 790.524C152.739 790.524 124.468 762.251 124.468 727.489H129.165C129.165 759.651 155.339 785.827 187.499 785.827C219.66 785.827 245.834 759.651 245.834 727.489C245.834 695.327 219.66 669.151 187.499 669.151V664.454C222.26 664.476 250.531 692.749 250.531 727.489Z" fill="white" />
        <Path d="M218.83 727.487C218.83 744.77 204.782 758.819 187.5 758.819V756.482C203.471 756.482 216.47 743.481 216.47 727.509C216.47 711.537 203.471 698.537 187.5 698.537C171.529 698.537 158.529 711.537 158.529 727.509C158.529 736.38 162.506 744.639 169.453 750.189L167.99 752.024C160.474 746.038 156.17 737.101 156.17 727.509C156.17 710.226 170.218 696.177 187.5 696.177C204.782 696.177 218.83 710.226 218.83 727.487Z" fill="white" />
      </G>
      <G opacity="0.08">
        <Rect x="120" y="799" width="134" height="5" rx="2.5" fill="#22172A" />
      </G>
      <G opacity="0.3">
        <Rect x="120" y="799" width="134" height="5" rx="2.5" fill="white" />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_51_4146">
        <Rect width="375" height="812" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const ConnectedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackgroundPattern />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft color="white" size={24} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>You connected with <Text style={styles.highlight}>Clara</Text></Text>
        <Text style={styles.timestamp}>11 mins ago</Text>

        {/* Profile Image */}
        <View style={styles.profileContainer}>
          <View style={styles.profileImageBorder}>
            <View style={styles.profileImage} />
          </View>
        </View>

        {/* Read Receipt Section */}
        <View style={styles.readReceiptContainer}>
          <Text style={styles.readReceiptText}>
            Know when <Text style={styles.highlight}>Clara</Text> has read your message
          </Text>
          <TouchableOpacity style={styles.readReceiptButton}>
            <CheckCheck size={16} color="white" style={styles.readReceiptIcon} />
            <Text style={styles.readReceiptButtonText}>Get Read Receipts</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Input Bar */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton}>
          <Paperclip color="#76CABB" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.micButton}>
          <Mic color="white" size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#76CABB",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    height: 56,
  },
  backButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },
  highlight: {
    color: '#FF3B3B',
  },
  timestamp: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  profileContainer: {
    marginTop: 40,
    marginBottom: 40,
  },
  profileImageBorder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#FF3B3B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#DDDDDD',
  },
  readReceiptContainer: {
    alignItems: 'center',
    // marginTop: 'auto',
    // marginBottom: 100,
  },
  readReceiptText: {
    color: 'white',
    fontSize:14,
    textAlign: 'center',
    marginBottom: 16,
  },
  readReceiptButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5862',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  readReceiptIcon: {
    marginRight: 8,
  },
  readReceiptButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 16,
    marginBottom: 32,
  },
  attachButton: {
    padding: 8,
  },
  micButton: {
    marginLeft: 'auto',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FF3B3B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ConnectedScreen;