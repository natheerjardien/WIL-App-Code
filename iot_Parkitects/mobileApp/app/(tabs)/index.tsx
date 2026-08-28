//(Expo Documentation.2024)
import { Image } from 'expo-image';
import { ScrollView, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import AlertBanner from '@/components/notifications/AlertBanner' 

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

import SearchBar from '@/components/parking/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '@/components/parking/HomeHeader';
import SectionTabs from '@/components/parking/SectionTabs';
import { Colors } from '@/constants/theme';
import ParkingLayout from '@/components/parking/ParkingLayout';


export default function HomeScreen() {
  const [showAlert, setShowAlert] = useState(true);
  return (
<SafeAreaView style= {styles.container}>
  <ScrollView
  showsVerticalScrollIndicator={false}
  contentContainerStyle={styles.content}>
<HomeHeader/>
 {showAlert && 
        (
          <AlertBanner
        title="LIMITED BAYS"
        message="The campus parking only has 15 bays available"
        icon="clock"
        
        onDismiss={() => setShowAlert(false)}
        />
        )}
 
  <SectionTabs/>
  <ParkingLayout/>

  </ScrollView>
  
</SafeAreaView>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  content: {
    paddingBottom: 24,
  }
});
