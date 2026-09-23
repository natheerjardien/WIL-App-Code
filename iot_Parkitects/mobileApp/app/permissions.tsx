//(Withfra.me, 2022)
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Switch,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';

export default function Example() {
   const router = useRouter();
  const [form, setForm] = useState({
    customReminders: true,
    motivationalMessages: true,
    progressUpdates: true,
    notifications: false,
    microphone: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7FAFB' }}>
      <View style={styles.header}>
        <View style={styles.headerActions}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
               router.push('/auth/sign_in');
            }}
            style={styles.headerAction}>
            <FeatherIcon
              color="#e2f1f3"
              name="arrow-left"
              size={24} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
              router.push('/auth/sign_in');
            }}
            style={styles.header}>
          
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Permissions</Text>

        <Text style={styles.subtitle}>Stay on track with Parkitech</Text>
      </View>

      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Permissions</Text>

          <View style={styles.sectionItem}>
            <View style={styles.sectionInfo}>
              <Text style={styles.sectionName}>Push Notifications (optional)</Text>

              <Text style={styles.sectionDescription}>
                Allow notifications for reminders and updates
              </Text>
            </View>

            <Switch
              onValueChange={notifications =>
                setForm({ ...form, notifications })
              }
              trackColor={{ false: '#757575', true: '#107c84' }}
              value={form.notifications} />
          </View>

          <View style={styles.sectionItem}>
            <View style={styles.sectionInfo}>
              <Text style={styles.sectionName}>Bluetooth </Text>

              <Text style={styles.sectionDescription}>
                Switch on to use app efficiently
              </Text>
            </View>

            <Switch
              onValueChange={microphone => setForm({ ...form, microphone })}
              trackColor={{ false: '#757575', true: '#107c84' }}
              value={form.microphone} />
          </View>

          <Text style={styles.sectionFooter}>
            These permissions help us provide a better parking experience
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Settings (optional)</Text>

          <View style={styles.sectionItem}>
            <View style={styles.sectionInfo}>
              <Text style={styles.sectionName}>Location</Text>

              <Text style={styles.sectionDescription}>
                Location helps us makes yor experience better
              </Text>
            </View>

            <Switch
              onValueChange={customReminders =>
                setForm({ ...form, customReminders })
              }
              trackColor={{ false: '#757575', true: '#107c84' }}
              value={form.customReminders} />
          </View>

          <View style={styles.sectionItem}>
            <View style={styles.sectionInfo}>
              <Text style={styles.sectionName}>Rule Alerts</Text>

              <Text style={styles.sectionDescription}>
                Receive daily Parking Rules
              </Text>
            </View>

            <Switch
              onValueChange={motivationalMessages =>
                setForm({ ...form, motivationalMessages })
              }
              trackColor={{ false: '#757575', true: '#107c84' }}
              value={form.motivationalMessages} />
          </View>

          

           

          <Text style={styles.sectionFooter}>
            You can always change these notification settings later in your
            profile
          </Text>
        </View>
      </ScrollView>

      <View style={styles.formFooter}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
router.push('/(tabs)');
          }}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Confirm</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#889797',
  },
  formFooter: {
    marginTop: 12,
    marginBottom: 24,
    paddingHorizontal: 24,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    color: '#9fa5af',
    textAlign: 'center',
  },
  /** Header */
  header: {
    paddingHorizontal: 24,
    marginBottom: 28,
     marginTop: 28,
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerAction: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#146564',
    marginBottom: 16,
      marginTop: 16,
  },
  headerSkipText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#096c31',
    textDecorationLine: 'underline',
    textDecorationColor: '#08e8f8',
    textDecorationStyle: 'solid',
  },
  
  section: {
    paddingVertical: 0,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#889797',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.19,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  sectionInfo: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 16,
  },
  sectionName: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
    color: '#1d2a32',
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 13,
    lineHeight: 18,
    color: '#889797',
  },
  sectionFooter: {
    fontSize: 13,
    lineHeight: 18,
    color: '#889797',
    marginTop: 4,
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    backgroundColor: '#075d5f',
    borderColor: '#0868f8',
    marginBottom: 24,
  },
  btnText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});

/**
 * References
 * Withfra.me. 2022. Ready to Use React Native Components - WithFrame | withfra.me. (Version 2.0) [Source code] Available at:<https://withfra.me/components > [Accessed 17 Aug. 2026].
 */