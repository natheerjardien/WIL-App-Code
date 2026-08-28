//(Withfra.me, 2022)
import React, { useState, useRef } from 'react';
import { useRouter } from 'expo-router';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import RBSheet from 'react-native-raw-bottom-sheet';

const options = [
  { name: 'Terrible', icon: '😩' },
  { name: 'Bad', icon: '🙁' },
  { name: 'OK', icon: '😐' },
  { name: 'Good', icon: '🙂' },
  { name: 'Great', icon: '😃' },
];

const OPTION_SIZE = 52;

export default function SettingsScreen() {
  const [value, setValue] = useState(4);
  const sheet = useRef<any>(null);
  const router = useRouter();

  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  const handleOpenSheet = () => {
    sheet.current?.open();
  };

  const handleCloseSheet = () => {
    sheet.current?.close();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7FAFB' }}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerAction}
          onPress={() => router.push('/(tabs)')}
        >
          <FeatherIcon color="#0F172A" name="arrow-left" size={22} />
        </TouchableOpacity>

        <Text numberOfLines={1} style={styles.headerTitle}>
          Settings
        </Text>

        <TouchableOpacity style={styles.headerAction}>
          <FeatherIcon color="#0F172A" name="more-vertical" size={22} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerSubtitle}>
          Manage your personal details and security preferences below.
        </Text>

        {/* ACCOUNT SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACCOUNT</Text>
          <View style={styles.sectionBody}>
            <TouchableOpacity
              onPress={() => router.push('/settings/profie')}
              style={styles.profile}
              activeOpacity={0.7}
            >
              <View style={styles.profileBody}>
                <Text style={styles.profileName}>Marcus Aimes</Text>
                <Text style={styles.profileHandle}>ST1289066</Text>
              </View>
              <FeatherIcon color="#94A3B8" name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* PREFERENCES SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity style={styles.row} activeOpacity={0.7}>
                <Text style={styles.rowLabel}>Language</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>English</Text>
                <FeatherIcon color="#94A3B8" name="chevron-right" size={18} />
              </TouchableOpacity>
            </View>

            <View style={styles.rowWrapper}>
              <TouchableOpacity style={styles.row} activeOpacity={0.7}>
                <Text style={styles.rowLabel}>Location</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>Los Angeles, CA</Text>
                <FeatherIcon color="#94A3B8" name="chevron-right" size={18} />
              </TouchableOpacity>
            </View>

            <View style={styles.rowWrapper}>
              <View style={styles.row}>
                <Text style={styles.rowLabel}>Email Notifications</Text>
                <View style={styles.rowSpacer} />
                <Switch
                  onValueChange={(emailNotifications) =>
                    setForm({ ...form, emailNotifications })
                  }
                  trackColor={{ false: '#E2E8F0', true: '#0D5265' }}
                  value={form.emailNotifications}
                />
              </View>
            </View>

            <View style={[styles.rowWrapper, styles.rowLast]}>
              <View style={styles.row}>
                <Text style={styles.rowLabel}>Push Notifications</Text>
                <View style={styles.rowSpacer} />
                <Switch
                  onValueChange={(pushNotifications) =>
                    setForm({ ...form, pushNotifications })
                  }
                  trackColor={{ false: '#E2E8F0', true: '#0D5265' }}
                  value={form.pushNotifications}
                />
              </View>
            </View>
          </View>
        </View>

        {/* RESOURCES SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resources</Text>
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => router.push('/settings/preferences')}
                style={styles.row}
                activeOpacity={0.7}
              >
                <Text style={styles.rowLabel}>Accessibility</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon color="#94A3B8" name="chevron-right" size={18} />
              </TouchableOpacity>
            </View>

            <View style={styles.rowWrapper}>
              <TouchableOpacity style={styles.row} activeOpacity={0.7}>
                <Text style={styles.rowLabel}>Report Bug</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon color="#94A3B8" name="chevron-right" size={18} />
              </TouchableOpacity>
            </View>

            {/* RATE APP TRIGGER */}
            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={handleOpenSheet}
                style={styles.row}
                activeOpacity={0.7}
              >
                <Text style={styles.rowLabel}>Rate Parkitech</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon color="#94A3B8" name="chevron-right" size={18} />
              </TouchableOpacity>
            </View>

            <View style={[styles.rowWrapper, styles.rowLast]}>
              <TouchableOpacity style={styles.row} activeOpacity={0.7}>
                <Text style={styles.rowLabel}>Campus Parking Rules</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon color="#94A3B8" name="chevron-right" size={18} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* LOGOUT */}
        <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.8}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* BOTTOM SHEET */}
      <RBSheet
        ref={sheet}
        height={380}
        openDuration={250}
        customStyles={{
          container: styles.sheetContainer,
          wrapper: { backgroundColor: 'rgba(15, 23, 42, 0.4)' },
        }}
      >
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetHeaderTitle}>Rate Your Experience</Text>
          <Text style={styles.sheetHeaderSubtitle}>
            How is your experience using Parkitech?
          </Text>
        </View>

        <View style={styles.sheetBody}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{options[value].name}</Text>
          </View>

          <View style={styles.options}>
            {options.map((item, index) => {
              const isActive = value === index;
              return (
                <TouchableOpacity
                  key={item.name}
                  style={[
                    styles.option,
                    isActive && styles.optionActive,
                  ]}
                  onPress={() => setValue(index)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.optionText}>{item.icon}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={handleCloseSheet}
            activeOpacity={0.8}
          >
            <Text style={styles.btnText}>Submit Rating</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 50,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 8,
    lineHeight: 20,
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  section: {
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94A3B8',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    marginBottom: 8,
    paddingLeft: 4,
  },
  sectionBody: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
  },

  profile: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileBody: {
    gap: 2,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  profileHandle: {
    fontSize: 14,
    color: '#94A3B8',
  },

  row: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 12,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ababab',
    marginRight: 4,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  logoutBtn: {
    marginTop: 24,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#EF4444',
  },

  /* RBSheet css*/
  sheetContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#FFFFFF',
  },
  sheetHeader: {
    paddingTop: 24,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sheetHeaderTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  sheetHeaderSubtitle: {
    fontSize: 14,
    color: '#64748B',
  },
  sheetBody: {
    padding: 24,
  },

  badge: {
    alignSelf: 'center',
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 20,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0D5265',
    textTransform: 'uppercase',
  },

  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 28,
  },
  option: {
    width: OPTION_SIZE,
    height: OPTION_SIZE,
    borderRadius: OPTION_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F5F9',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  optionActive: {
    borderColor: '#0D5265',
    backgroundColor: '#E0F2FE',
  },
  optionText: {
    fontSize: 26,
  },

  btn: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#0D5265',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
/**
 * References
 * Withfra.me. 2022. Ready to Use React Native Components - WithFrame | withfra.me. (Version 2.0) [Source code] Available at:<https://withfra.me/components > [Accessed 17 Aug. 2026].
 */