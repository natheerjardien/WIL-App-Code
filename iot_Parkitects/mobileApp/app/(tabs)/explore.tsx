//(Withfra.me, 2022)
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import StatsCard from '@/components/ticket/StatsCard';
import { useRouter } from 'expo-router';


const cancellationReasons = [
  {
    id: 1,
    reason: 'Parked skew',
    description: 'The vehicle is parked in two bays',
  },
  {
    id: 2,
    reason: 'Lights are on',
    description: 'The vehicles lights are on',
  },
  {
    id: 3,
    reason: 'Is not fully in bay',
    description: 'Vehicle is to far out of the parking bay',
  },
  {
    id: 4,
    reason: 'This car is ugly',
    description: 'A violation to my eyes',
  },
  {
    id: 5,
    reason: 'Other reason',
    description: 'None of the above reasons apply',
  },
];
const errors = { bio: '' };

export default function Example() {

const colorScheme =useColorScheme();
const theme = Colors[colorScheme ?? 'light']


  const [form, setForm] = useState({
    bio: '',
    categoryId: 0,
    parkingBay: '',
    description: '',
      reasonId: 0,
    comment: '',
    image: null,
  
  });
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={styles.header}>
      

        <Text style={[styles.title, { color: theme.text}]} >Create a Ticket</Text>

        <Text style={styles.subtitle}>Report Any parking violation</Text>
      </View>


      

      <KeyboardAwareScrollView style={styles.form}>

<Text style={styles.sectionSubtitle}>
            Please select a reason for cancellation
          </Text>
          <View style={styles.cancelReasons}>
            {cancellationReasons.map(item => {
              const isActive = form.reasonId === item.id;
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => setForm({ ...form, reasonId: item.id })}
                  style={[
                    styles.cancelReason,
                    isActive && styles.cancelReasonActive,
                  ]}>
                  <View style={styles.cancelReasonContent}>
                    <Text style={styles.cancelReasonTitle}>{item.reason}</Text>
                    <Text style={styles.cancelReasonDescription}>
                      {item.description}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.cancelReasonRadio,
                      !!isActive && {
                        borderColor: '#2C6479ff',
                        borderWidth: 6,
                        backgroundColor: '#fff',
                      },
                    ]} />
                </TouchableOpacity>
              );
            })}
          </View>
      
 <View style={styles.input}>
            <Text style={styles.sectionSubtitle}>
            Please select the parking bay at fault
          </Text>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.inputSelect}>
              <Text style={styles.inputSelectValue}>A0-1</Text>
              <FeatherIcon
                color="#1D2A32"
                name="chevron-right"
                size={19} />
            </TouchableOpacity>
          </View>


     <Text style={styles.sectionTitle}>Description (Optional)</Text>

        <View style={styles.formInput}>
          <TextInput
            clearButtonMode="while-editing"
            multiline={true}
            onChangeText={bio => setForm({ ...form, bio })}
            placeholder="Describe parking violation..."
            placeholderTextColor="#6b7280"
            style={[styles.formInputControl, styles.formTextarea]}
            value={form.bio} />
        </View>

        <Text style={styles.sectionTitle}>Add Image Evidence (Optional)</Text>
<TouchableOpacity style={styles.cancelReason}>
  <FeatherIcon
  name="camera"
  size={29}
  color="#6b7280"
  />
       <Text style={styles.sectionSubtitle}>
       Upload Image
    </Text>
</TouchableOpacity>
      

       

        <View style={styles.formAction}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
               router.push('/success')
            }}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#889797',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#889797',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  /** Header */
  header: {
    paddingHorizontal: 24,
    marginBottom: 28,
     marginTop: 50,
  },
  headerAction: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#daebff',
    marginTop: 50,
    marginBottom: 16,
  },
  /** Form */
  form: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingVertical: 0,
    paddingHorizontal: 24,
  },
  formLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 6,
  },
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    marginBottom: 16,
  },
  formInputControl: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingRight: 16,
    paddingLeft: 0,
    marginLeft: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    paddingVertical: 12,
  },
  formTextarea: {
    paddingTop: 12,
    height: 120,
  },
  formGroup: {
    marginBottom: 24,
  },
  formIcon: {
    paddingLeft: 12,
  },
  formLink: {
    textAlign: 'right',
    fontWeight: '600',
    color: '#1ec3c3',
    textDecorationLine: 'underline',
    textDecorationColor: '#10c08b',
    textDecorationStyle: 'solid',
    position: 'absolute',
    right: 8,
    top: 32,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  formGroupFooter: {
    fontSize: 13,
    lineHeight: 18,
    color: '#889797',
  },
  formAction: {
    marginVertical: 24,
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
    backgroundColor:"#0c5464",
    borderColor: '#1c895c',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#d9ddeb',
  },
 cancelReasons: {
    marginTop: 8,
  },
  cancelReason: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  cancelReasonActive: {
    backgroundColor: '#f3f4f6',
  },
  cancelReasonContent: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  cancelReasonTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1d1d1d',
  },
  cancelReasonDescription: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
  },
  cancelReasonRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#d1d5db',
  },
  sectionSubtitle: {
    fontSize: 15,
    color: '#6b7280',
  },

   /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  inputSelectValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
});
/**
 * References
 * Withfra.me. 2022. Ready to Use React Native Components - WithFrame | withfra.me. (Version 2.0) [Source code] Available at:<https://withfra.me/components > [Accessed 17 Aug. 2026].
 */