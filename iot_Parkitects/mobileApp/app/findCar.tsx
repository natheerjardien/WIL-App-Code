//(Withfra.me, 2022)
import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import FeatherIcon from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const DIAGRAM_SIZE = width - 80;

function ParkingDiagram() {
  const progress = 65;
//Progress Bar (npm, 2024)
  return (
    <View style={styles.progressContainer}>
      <AnimatedCircularProgress
        size={DIAGRAM_SIZE}
        width={14}
        fill={progress}
        tintColor="#22C55E"
        backgroundColor="rgba(255, 255, 255, 0.15)"
        rotation={225}
        arcSweepAngle={270}
        lineCap="round"
        duration={1000}
      >
        {() => (
          <View style={styles.progressContent}>
            <FeatherIcon
              name="navigation"
              size={36}
              color="#FFFFFF"
              style={styles.navigationIcon}
            />
            <Text style={styles.distanceText}>50</Text>
            <Text style={styles.unitText}>meters away</Text>
            <View style={styles.accuracyBadge}>
              <Text style={styles.accuracyText}>Accuracy ±30m</Text>
            </View>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

export default function FindCarScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#0d5965', '#083f39', '#042214']}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Top Header / Back Button */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <FeatherIcon name="arrow-left" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Screen Info */}
          <View style={styles.titleSection}>
            <Text style={styles.title}>Find Your Car</Text>
            <Text style={styles.subtitle}>
              Follow the compass to navigate back to your parked vehicle.
            </Text>
          </View>

          <View style={styles.diagramContainer}>
            <ParkingDiagram />
          </View>

          <View style={styles.footer}>
            <View style={styles.locationCard}>
              <View style={styles.locationInfo}>
                <Text style={styles.locationLabel}>PARKED BAY</Text>
                <Text style={styles.locationValue}>Section A • Bay A-03</Text>
              </View>
              <TouchableOpacity
                style={styles.doneButton}
                onPress={() => router.back()}
                activeOpacity={0.8}
              >
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  
  header: {
    paddingTop: 12,
    height: 48,
    justifyContent: 'center',
     marginTop:27,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
 
  },


  titleSection: {
    marginTop: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 20,
  },

  /* Circular Progress Area */
  diagramContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationIcon: {
    marginBottom: 8,
    transform: [{ rotate: '45deg' }],
  },
  distanceText: {
    fontSize: 64,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 68,
  },
  unitText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 12,
  },
  accuracyBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  accuracyText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
  },

  /* Footer Card */
  footer: {
    paddingBottom: 24,
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    marginBottom:23,
  },
  locationInfo: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.5)',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  locationValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  doneButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  doneButtonText: {
    color: '#0D5265',
    fontSize: 14,
    fontWeight: '700',
  },
});

/**
 * References
 * Withfra.me. 2022. Social Media Landing Page. (Version 2.0) [Source code] Available at:<https://withfra.me/components/landing/static-welcome-page-with-customizable-photos-and-icons > [Accessed 17 Aug. 2026].
npm. 2024. react-native-circular-progress. (Version 2.0) [Source code] Available at: <https://www.npmjs.com/package/react-native-circular-progress?activeTab=readme > [Accessed 17 Aug. 2026].
*/