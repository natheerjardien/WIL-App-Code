//(Withfra.me, 2022)
import React from "react";
import { useRouter } from 'expo-router';
import  {useState} from 'react';
import AlertBanner from '@/components/notifications/AlertBanner'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

import SearchBar from "./SearchBar";

export default function HomeHeader() {
  const router = useRouter();
  const availableSpaces = 3;
  const [showAlert, setShowAlert] = useState(true);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        
   {/** * Header (Withfra.me, 2022) */}     
<View style={styles.topRow}>
  

 
  <TouchableOpacity style={styles.locationBadge}>
    <View style={styles.locationDot} />
    <Text style={styles.locationText}>LIVE</Text>
  </TouchableOpacity>


  <View style={styles.rightButtons}>

    {/* Notifications */}
    <TouchableOpacity style={styles.iconButton}
        onPress={() => router.push('/notifications')}>
      <Feather name="bell" size={18} color="#111827" />
      
    </TouchableOpacity>

    {/* User Initials */}
    <TouchableOpacity
      style={styles.avatarButton}
      onPress={() => router.push('/settings/setting')}
    >
      <Text style={styles.avatarText}>MA</Text>
    </TouchableOpacity>

  </View>

</View>

       

        {/* Heading */}
        <Text style={styles.heading}>
          {availableSpaces} Bays Left
        </Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Go to Moffet and main
        </Text>
   <TouchableOpacity
            onPress={() => {
              // handle onPress
               router.push('/auth/sign_in');
            }}
            style={styles.headerAction}>
            <Feather
              color="#e2f1f3"
              name="arrow-right"
              size={24} />
          </TouchableOpacity>
        {/* Search Bar Container */}
        <View style={styles.search}>
          <SearchBar />
        </View>
       

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F7FAFB", // Neutral background contrast for page
  },

  container: {
    backgroundColor:     "#13384Bff", 
    paddingHorizontal: 25,
    paddingTop: 12,
    paddingBottom: 20,
    marginBottom: 28,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 28,

    // Soft elevation shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },

  locationBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFBEB", 
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  locationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#F59E0B",
    marginRight: 6,
  },

  locationText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#374151",
  },

  liveRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: "#22C55E",
    marginRight: 6,
  },

  liveText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#22C55E",
    letterSpacing: 0.8,
  },

  heading: {
    fontSize: 26,
    fontWeight: "800", // Strong heavy title weight
    color: "#b11010",
    letterSpacing: -0.5,
    alignItems:'center',
    marginLeft:100,
  },

  subtitle: {
      marginLeft:90,
    fontSize: 12,
    fontWeight: "500",
    color: "#9cafa7",
    marginTop: 4,
    marginBottom: 16,
  },

  search: {
    marginTop: 6,
     marginBottom: -20,
  },


  rightButtons: {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
},

avatarButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "#E8EEF1",
  justifyContent: "center",
  alignItems: "center",
},

avatarText: {
  fontSize: 13,
  fontWeight: "700",
  color: "#13384B",
},

 headerAction: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#146564',
    marginBottom: 16,
      marginTop: 1,
      marginLeft:135,
  },
});
/**
 * References
 * Withfra.me. 2022. Ready to Use React Native Components - WithFrame | withfra.me. (Version 2.0) [Source code] Available at:<https://withfra.me/components > [Accessed 17 Aug. 2026].
 */