//(Withfra.me, 2022)
import React, { useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
  ActivityIndicator
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import StatsCard from '@/components/ticket/StatsCard';
import { useRouter } from 'expo-router';
import { auth } from '../../config/firebaseConfig';
import DropDownPicker from 'react-native-dropdown-picker';


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

// Jayasekara, 2025- Dropdown array
const bayItemsList = [
  // Block A
  { label: 'Bay A01 (A-Block)', value: 'A01', section: 'A-Block', number: 'A0-1' },
  { label: 'Bay A02 (A-Block)', value: 'A02', section: 'A-Block', number: 'A0-2' },
  { label: 'Bay A03 (A-Block)', value: 'A03', section: 'A-Block', number: 'A0-3' },
  { label: 'Bay A04 (A-Block)', value: 'A04', section: 'A-Block', number: 'A0-4' },
  { label: 'Bay A05 (A-Block)', value: 'A05', section: 'A-Block', number: 'A0-5' },
  { label: 'Bay A06 (A-Block)', value: 'A06', section: 'A-Block', number: 'A0-6' },
  { label: 'Bay A07 (A-Block)', value: 'A07', section: 'A-Block', number: 'A0-7' },
  { label: 'Bay A08 (A-Block)', value: 'A08', section: 'A-Block', number: 'A0-8' },
  { label: 'Bay A09 (A-Block)', value: 'A09', section: 'A-Block', number: 'A0-9' },
  { label: 'Bay A10 (A-Block)', value: 'A10', section: 'A-Block', number: 'A0-10' },

  // Block B
  { label: 'Bay B01 (B-Block)', value: 'B01', section: 'B-Block', number: 'B0-1' },
  { label: 'Bay B02 (B-Block)', value: 'B02', section: 'B-Block', number: 'B0-2' },
  { label: 'Bay B03 (B-Block)', value: 'B03', section: 'B-Block', number: 'B0-3' },
  { label: 'Bay B04 (B-Block)', value: 'B04', section: 'B-Block', number: 'B0-4' },
  { label: 'Bay B05 (B-Block)', value: 'B05', section: 'B-Block', number: 'B0-5' },
  { label: 'Bay B06 (B-Block)', value: 'B06', section: 'B-Block', number: 'B0-6' },
  { label: 'Bay B07 (B-Block)', value: 'B07', section: 'B-Block', number: 'B0-7' },
  { label: 'Bay B08 (B-Block)', value: 'B08', section: 'B-Block', number: 'B0-8' },
  { label: 'Bay B09 (B-Block)', value: 'B09', section: 'B-Block', number: 'B0-9' },
  { label: 'Bay B10 (B-Block)', value: 'B10', section: 'B-Block', number: 'B0-10' },

  // Block C
  { label: 'Bay C01 (C-Block)', value: 'C01', section: 'C-Block', number: 'C0-1' },
  { label: 'Bay C02 (C-Block)', value: 'C02', section: 'C-Block', number: 'C0-2' },
  { label: 'Bay C03 (C-Block)', value: 'C03', section: 'C-Block', number: 'C0-3' },
  { label: 'Bay C04 (C-Block)', value: 'C04', section: 'C-Block', number: 'C0-4' },
  { label: 'Bay C05 (C-Block)', value: 'C05', section: 'C-Block', number: 'C0-5' },
  { label: 'Bay C06 (C-Block)', value: 'C06', section: 'C-Block', number: 'C0-6' },
  { label: 'Bay C07 (C-Block)', value: 'C07', section: 'C-Block', number: 'C0-7' },
  { label: 'Bay C08 (C-Block)', value: 'C08', section: 'C-Block', number: 'C0-8' },
  { label: 'Bay C09 (C-Block)', value: 'C09', section: 'C-Block', number: 'C0-9' },
  { label: 'Bay C10 (C-Block)', value: 'C10', section: 'C-Block', number: 'C0-10' },

  // Block D
  { label: 'Bay D01 (D-Block)', value: 'D01', section: 'D-Block', number: 'D0-1' },
  { label: 'Bay D02 (D-Block)', value: 'D02', section: 'D-Block', number: 'D0-2' },
  { label: 'Bay D03 (D-Block)', value: 'D03', section: 'D-Block', number: 'D0-3' },
  { label: 'Bay D04 (D-Block)', value: 'D04', section: 'D-Block', number: 'D0-4' },
  { label: 'Bay D05 (D-Block)', value: 'D05', section: 'D-Block', number: 'D0-5' },
  { label: 'Bay D06 (D-Block)', value: 'D06', section: 'D-Block', number: 'D0-6' },
  { label: 'Bay D07 (D-Block)', value: 'D07', section: 'D-Block', number: 'D0-7' },
  { label: 'Bay D08 (D-Block)', value: 'D08', section: 'D-Block', number: 'D0-8' },
  { label: 'Bay D09 (D-Block)', value: 'D09', section: 'D-Block', number: 'D0-9' },
  { label: 'Bay D10 (D-Block)', value: 'D10', section: 'D-Block', number: 'D0-10' },

  // Block E
  { label: 'Bay E01 (E-Block)', value: 'E01', section: 'E-Block', number: 'E0-1' },
  { label: 'Bay E02 (E-Block)', value: 'E02', section: 'E-Block', number: 'E0-2' },
  { label: 'Bay E03 (E-Block)', value: 'E03', section: 'E-Block', number: 'E0-3' },
  { label: 'Bay E04 (E-Block)', value: 'E04', section: 'E-Block', number: 'E0-4' },
  { label: 'Bay E05 (E-Block)', value: 'E05', section: 'E-Block', number: 'E0-5' },
  { label: 'Bay E06 (E-Block)', value: 'E06', section: 'E-Block', number: 'E0-6' },
  { label: 'Bay E07 (E-Block)', value: 'E07', section: 'E-Block', number: 'E0-7' },
  { label: 'Bay E08 (E-Block)', value: 'E08', section: 'E-Block', number: 'E0-8' },
  { label: 'Bay E09 (E-Block)', value: 'E09', section: 'E-Block', number: 'E0-9' },
  { label: 'Bay E10 (E-Block)', value: 'E10', section: 'E-Block', number: 'E0-10' },
];

export default function Example() {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light']

  const router = useRouter();
//


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('A01');
  const [items, setItems] = useState(bayItemsList);

  //Adeoye,2024
  const [loading, setLoading] = useState(false);// updates the UI to show that the request is happening
  const [form, setForm] = useState({
    bio: "",
    reasonId: 0,
    parkingBay: 'A0-1',
    bayId: 'A01',
    sectionId: 'A-Block',
    imageUri: null as string | null,

  });

// Jayasekara, 2025 - handler keeping the form synced on value change
  const handleBayChange = (val: any) => {
    const selectedValue = typeof val === 'function' ? val(value) : val;
    setValue(selectedValue);

    const selected = items.find(b => b.value === selectedValue);
    if (selected) {
      setForm(prev => ({
        ...prev,
        bayId: selected.value,
        parkingBay: selected.number,
        sectionId: selected.section,
      }));
    }
  };


  /*Kindacode.com,2022
  Pick Image from Gallery or Camera*/
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()// Get permission from user
    if (!permissionResult.granted) {
      Alert.alert('You have refused to allow this app to access your photos!', 'Permission to access media files is required')
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({ // user Explore the result
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

  // User cancelelled action
    if (!result.canceled) {
      setForm({ ...form, imageUri: result.assets[0].uri });
    }
  };
  /*  Hiếu,2022 -Upload image to backend API (Azure blob via the asp.net core) */
  const uploadImageToAzure = async (uri: string): Promise<string | null> => {
    const formData = new FormData();
    formData.append('file', {
      uri,
      name: 'complaints-image.jpg',
      type: 'image/jpeg',
    } as any);

    try {
      // BASE API URL at the moment it is YOUR wifi network:8000
      const response = await fetch('http://192.168.0.183:8080/api/Tickets/upload-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data.imageUrl;
      }
    } catch (error) {
      console.error('Image upload failed', error);
    }
    return null;
  };


  // Submit Ticket info to backend 
  const handleSubmit = async () => {
    // if user is not logged in they cannot submit a ticket
    const currentUser = auth.currentUser;
    if (!currentUser) {
      Alert.alert('Error', 'You must be logged in to submit a ticket.');
      return;
    }

    if (form.reasonId === 0) {
      Alert.alert('Selection Required', 'Please select a reason for reporting.');
      return;
    }

    setLoading(true);

    let uploadedImageUrl = null;
    if (form.imageUri) {
      uploadedImageUrl = await uploadImageToAzure(form.imageUri);
    }

    const selectedReason = cancellationReasons.find(r => r.id === form.reasonId);

    const payload = {
      userID: currentUser.uid, // Firebase String UID
      bayID: form.bayId,
      bayNumber: form.parkingBay,
      sectionID: form.sectionId,
      reason: selectedReason?.reason || 'Other',
      description: form.bio,
      imageURL: uploadedImageUrl,
      status: 'Pending',
    };

    try {
      //fetching network if network does not match network API it will give an error alert on the network
      const response = await fetch('http://192.168.0.183:8080/api/Tickets',// BASE API URL at the moment it is YOUR wifi network:8000
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

      if (response.ok) {
        router.push('/success');
      } else {
        Alert.alert('Error', 'Failed to create ticket. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'Network request failed.');
    } finally {
      setLoading(false);
    }
  };

  //Sanja,2022
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>Create a Ticket</Text>
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
                  ]}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Jayasekara, 2025 - Dropdown to select parking bay */}
       <View style={[styles.input, { zIndex: 1000 }]}>
          <Text style={styles.sectionSubtitle}>
            Please select the parking bay at fault
          </Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={handleBayChange}
            setItems={setItems}
            placeholder="Select a parking bay"
            listMode="MODAL"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
          />
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
            value={form.bio}
          />
        </View>

        <Text style={styles.sectionTitle}>Add Image Evidence (Optional)</Text>
        <TouchableOpacity style={styles.cancelReason} onPress={pickImage}>
          <FeatherIcon name="camera" size={29} color="#6b7280" />
          <Text style={[styles.sectionSubtitle, { marginLeft: 12 }]}>
            {form.imageUri ? 'Image Selected' : 'Upload Image'}
          </Text>
        </TouchableOpacity>

        {form.imageUri && (
          <Image
            source={{ uri: form.imageUri }}
            style={{ width: 100, height: 100, borderRadius: 12, marginVertical: 8 }}
          />
        )}

        <View style={styles.formAction}>
          <TouchableOpacity onPress={handleSubmit} disabled={loading}>
            <View style={styles.btn}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.btnText}>Submit</Text>
              )}
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
    backgroundColor: "#0c5464",
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
  // Jayasekara, 2025 (dropdown css)
  dropdown: {
    borderColor: '#C9D3DB',
    borderRadius: 12,
  },
  dropdownContainer: {
    borderColor: '#C9D3DB',
  },
});
/**
 * References
 * Adeoye, T.2024. React Hooks: useState (With Practical Examples).(Version 10.0) [Source code]. Available at:< https://medium.com/@titoadeoye/react-hooks-usestate-with-practical-examples-64abd6df6471 > [Accessed 30 Aug. 2026].
 * Hiếu, N.H.2022. react-native: upload image - DEV Community.(Version 10.0) [Source code] Available at:< https://dev.to/hieunh1801/react-native-upload-file-1860 > [Accessed 30 August 2026].
 * Jayasekara, S.S. 2025. How to Add a Dropdown Picker in React Native Expo (iOS & Android Compatible). (Version 10.0) [Source code] Available at:< https://sasandasaumya.medium.com/how-to-add-a-dropdown-picker-in-react-native-expo-ios-android-compatible-4944c66f58c7 > [Accessed 1 Sept. 2026].
 * Kindacode.com.2022. Using Image Picker and Camera in React Native (Expo) - KindaCode. (Version 10.0) [Source code] Available at:< https://www.kindacode.com/article/image-picker-in-react-native > [Accessed 30 Aug. 2026].
 * Sanja.2022. How to upload a photo in React, create a FormData object (with the image file and string data types), send it to the NodeJS server, save it in MongoDB and fetch it from React and render it on a page. (Version 10.0) [Source code] Available at:< https://medium.com/@sanja1mandic/how-to-upload-a-photo-in-react-create-a-formdata-object-with-image-file-and-string-data-types-71e9e08fb53c > [Accessed 30 Aug. 2026].
 * Withfra.me. 2022. Ready to Use React Native Components - WithFrame | withfra.me. (Version 10.0) [Source code] Available at:<https://withfra.me/components > [Accessed 17 August 2026].
 */