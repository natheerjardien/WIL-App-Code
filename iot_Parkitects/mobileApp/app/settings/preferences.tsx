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

const textSizes = [
  { id: 'small', label: 'Small', scale: 0.75 },
  { id: 'medium', label: 'Medium', scale: 1 },
  { id: 'large', label: 'Large', scale: 1.25 },
];

export default function Example() {
    const router = useRouter();
  const [form, setForm] = useState({
    textSize: 'medium',
    colorMode: 'default',
    reduceMotion: false,
    screenReader: false,
    hapticFeedback: true,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7FAFB' }}>
      <View style={styles.header}>
        <View style={styles.headerActions}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
              router.push('/settings/setting');
            }}
            style={styles.headerAction}>
            <FeatherIcon
              color="#efeceb"
              name="arrow-left"
              size={24} />
          </TouchableOpacity>

        </View>

        <Text style={styles.title}>Accessibility</Text>

        <Text style={styles.subtitle}>
          Customize your app experience for better accessibility
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.form}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Text Size</Text>

          <View style={styles.textSizePreview}>
            <Text
              style={[
                styles.previewText,
                {
                  fontSize:
                    16 *
                    (textSizes.find(s => s.id === form.textSize)?.scale || 1),
                },
              ]}>
              Preview Text Size
            </Text>
          </View>

          <View style={styles.textSizeOptions}>
            {textSizes.map((size, index) => (
              <TouchableOpacity
                key={size.id}
                onPress={() => setForm({ ...form, textSize: size.id })}
                style={[
                  styles.textSizeOption,
                  form.textSize === size.id
                    ? { borderColor: '#07749f', backgroundColor: '#FFF5F5' }
                    : {},
                  styles.textSizeOption,
                ]}>
                <Text style={styles.textSizeLabel}>{size.label}</Text>

                <View style={styles.textSizeBars}>
                  {Array(size.id === 'small' ? 1 : size.id === 'medium' ? 2 : 3)
                    .fill(0)
                    .map((_, i) => (
                      <View
                        key={i}
                        style={[
                          styles.textSizeBar,
                          {
                            backgroundColor:
                              form.textSize === size.id ? '#08944e' : '#E5E7EB',
                          },
                        ]} />
                    ))}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Display</Text>

          <View style={styles.colorModes}>
            <TouchableOpacity
              onPress={() => setForm({ ...form, colorMode: 'default' })}
              style={[
                styles.colorModeOption,
                form.colorMode === 'default' ? { borderColor: '#0d6c69' } : {},
              ]}>
              <View style={[styles.colorModePreview, styles.defaultMode]}>
                <View style={styles.colorModeCircle} />
              </View>

              <Text style={styles.colorModeLabel}>Default</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setForm({ ...form, colorMode: 'high-contrast' })}
              style={[
                styles.colorModeOption,
                form.colorMode === 'high-contrast'
                  ? { borderColor: '#0a8466' }
                  : {},
              ]}>
              <View style={[styles.colorModePreview, styles.highContrastMode]}>
                <View style={styles.colorModeCircle} />
              </View>

              <Text style={styles.colorModeLabel}>High Contrast</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>

          <View style={styles.preferenceOption}>
            <View style={styles.preferenceContent}>
              <Text style={styles.preferenceLabel}>Reduce Motion</Text>

              <Text style={styles.preferenceDescription}>
                Minimize animations and transitions
              </Text>
            </View>

            <Switch
              onValueChange={reduceMotion => setForm({ ...form, reduceMotion })}
              trackColor={{ false: '#E5E7EB', true: '#076f65' }}
              value={form.reduceMotion} />
          </View>

          <View style={styles.preferenceOption}>
            <View style={styles.preferenceContent}>
              <Text style={styles.preferenceLabel}>Screen Reader</Text>

              <Text style={styles.preferenceDescription}>
                Enable voice feedback for actions
              </Text>
            </View>

            <Switch
              onValueChange={screenReader => setForm({ ...form, screenReader })}
              trackColor={{ false: '#E5E7EB', true: '#a5b1c7' }}
              value={form.screenReader} />
          </View>

          <View style={styles.preferenceOption}>
            <View style={styles.preferenceContent}>
              <Text style={styles.preferenceLabel}>Haptic Feedback</Text>

              <Text style={styles.preferenceDescription}>
                Vibrate on touch interactions
              </Text>
            </View>

            <Switch
              onValueChange={hapticFeedback =>
                setForm({ ...form, hapticFeedback })
              }
              trackColor={{ false: '#E5E7EB', true: '#09637b' }}
              value={form.hapticFeedback} />
          </View>
        </View>

        <View style={styles.formAction}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Save Preferences</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  previewText: {
    color: '#1d2a32',
    textAlign: 'center',
  },
  defaultMode: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  highContrastMode: {
    backgroundColor: '#000',
  },
  /** Header */
  header: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
     marginBottom: 16,
  },
  headerAction: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#146564',
    marginBottom: 16,
    marginTop: 50,
  },
  headerSkipText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#f82e08',
    textDecorationLine: 'underline',
    textDecorationColor: '#f82e08',
    textDecorationStyle: 'solid',
  },
  /** Form */
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
    marginTop: 16,
  },
  /** Section */
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#889797',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  textSizePreview: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  textSizeOptions: {
    flexDirection: 'row',
  },
  textSizeOption: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    padding: 12,
    alignItems: 'center',
  },
  textSizeLabel: {
    fontSize: 13,
    lineHeight: 18,
    color: '#1d2a32',
    marginBottom: 8,
    letterSpacing: 0.19,
  },
  textSizeBars: {
    flexDirection: 'row',
  },
  textSizeBar: {
    width: 16,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 1,
  },
  colorModes: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  colorModeOption: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    padding: 12,
  },
  colorModePreview: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  colorModeCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#077e98',
  },
  colorModeLabel: {
    fontSize: 13,
    lineHeight: 18,
    color: '#1d2a32',
    letterSpacing: 0.19,
  },
  preferenceOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    marginBottom: 12,
  },
  preferenceContent: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 16,
  },
  preferenceLabel: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
    color: '#1d2a32',
    marginBottom: 4,
  },
  preferenceDescription: {
    fontSize: 13,
    lineHeight: 18,
    color: '#889797',
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
    backgroundColor: '#09848d',
    borderColor: '#038468',
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
 * Withfra.me. 2022. Multi-Section Radio Group with Accessbility Options . (Version 2.0) [Source code] Available at:<https://withfra.me/components/radio-groups/multi-section-radio-group-with-accessbility-options> [Accessed 17 Aug. 2026].

 */

