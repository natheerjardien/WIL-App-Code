//(Withfra.me, 2022)
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';

export default function AccountScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      <View style={styles.topHeader}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => router.back()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <FeatherIcon color="#0F172A" name="arrow-left" size={22} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Account</Text>

        <View style={styles.headerButton} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Subtitle */}
        <Text style={styles.headerSubtitle}>
          Manage your personal details and security preferences below.
        </Text>

        {/* PERSONAL INFORMATION SECTION */}
        <Text style={styles.sectionHeader}>PERSONAL INFORMATION</Text>
        <View style={styles.cardGroup}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Username</Text>
            <Text style={styles.rowValueStatic}>ST1026609</Text>
          </View>

          <View style={styles.rowDivider} />

          <TouchableOpacity style={styles.row} activeOpacity={0.7}>
            <Text style={styles.rowLabel}>Name</Text>
            <View style={styles.rowRight}>
              <Text style={styles.rowValue}>John Doe</Text>
              <FeatherIcon color="#C5C5C7" name="chevron-right" size={18} />
            </View>
          </TouchableOpacity>
        </View>

        {/* LOGIN INFORMATION SECTION */}
        <Text style={styles.sectionHeader}>LOGIN INFORMATION</Text>
        <View style={styles.cardGroup}>
          <TouchableOpacity style={styles.row} activeOpacity={0.7}>
            <Text style={styles.rowLabel}>Email</Text>
            <View style={styles.rowRight}>
              <Text style={styles.rowValue}>john@example.com</Text>
              <FeatherIcon color="#C5C5C7" name="chevron-right" size={18} />
            </View>
          </TouchableOpacity>

          <View style={styles.rowDivider} />

          <TouchableOpacity style={styles.row} activeOpacity={0.7}>
            <Text style={styles.rowLabel}>Update password</Text>
            <FeatherIcon color="#C5C5C7" name="chevron-right" size={18} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFB',
  },

  /* Navigation Header */
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop:28,
  },
  headerButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',

  },

  /* Scroll Content */
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 40,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 12,
    paddingLeft: 4,
    lineHeight: 20,
  },

  /* Section Titles */
  sectionHeader: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94A3B8',
    letterSpacing: 0.6,
    marginTop: 18,
    marginBottom: 8,
    paddingLeft: 4,
  },

  /* Card Containers */
  cardGroup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },

  /* Row Styling */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 52,
  },
  rowLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0F172A',
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rowValue: {
    fontSize: 14,
    color: '#64748B',
  },
  rowValueStatic: {
    fontSize: 14,
    color: '#94A3B8',
    fontWeight: '500',
  },
  rowDivider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginLeft: 16,
  },
});
/**
 * References
 * Withfra.me. 2022. Ready to Use React Native Components - WithFrame | withfra.me. (Version 2.0) [Source code] Available at:<https://withfra.me/components > [Accessed 17 Aug. 2026].
 */