//(Withfra.me, 2022)
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert // importing Alert so we can pop up error messages easily (React Native, 2026)
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '@/constants/theme';

// pulling in the specific firebase registration function
import { createUserWithEmailAndPassword } from 'firebase/auth';
// importing our custom auth setup
import { auth } from '../../config/firebaseConfig';

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleRegister = async () => {
    // checks that they dont submit blank forms
    if (!form.email || !form.password) {
      Alert.alert('Hold up!', 'Please enter an email and password.');
      return;
    }

    try {
      // sends the email and password to firebase to create the account
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      
      Alert.alert('Success!', 'Your account has been created.');
      
      // takes them to the sign in page so they can log in
      router.push('/auth/sign_in');
      
      // we will add an API call here later to send `form.name` to your .NET UserController
    } catch (error: any) {
      // if firebase complains about a weak password or existing email, this tells the user
      Alert.alert('Registration Failed', error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, 
       backgroundColor: Colors.light.background,}}>
      <KeyboardAwareScrollView>
        <View style={styles.logoContainer}>
          <Image
            alt="My Shop logo"
            resizeMode="cover"
            source={require('@/assets/images/parki-splash.png')}
            style={styles.logoImg} />
        </View>
        <View style={styles.form}>
          <Text style={styles.title}>Create a new account</Text>

          <Text style={styles.subtitle}>
            Please put all of your information below to create a new account.
          </Text>

          <View style={styles.input}>
            <TextInput
              clearButtonMode="while-editing"
              onChangeText={name => setForm({ ...form, name })}
              placeholder="Full Name"
              placeholderTextColor="#A5A5AE"
              style={styles.inputControl}
              value={form.name} />
          </View>

          <View style={styles.input}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="Email Address"
              placeholderTextColor="#A5A5AE"
              style={styles.inputControl}
              value={form.email} />
          </View>

          <View style={styles.input}>
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={password => setForm({ ...form, password })}
              placeholder="Password"
              placeholderTextColor="#A5A5AE"
              secureTextEntry={true}
              style={styles.inputControl}
              value={form.password} />
          </View>

          <TouchableOpacity
          // routing through our new signup function (Firebase, 2026)
            onPress={handleRegister}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Sign up now</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              router.push('/auth/sign_in');
            }}>
            <Text style={styles.formFooter}>
              Already have an account?
              <Text style={{ color: '#0c6064' }}> Log in</Text>
            </Text>
          </TouchableOpacity>

          <View style={styles.formSpacer}>
            <Text style={styles.formSpacerText}>Or Sign up with</Text>

            <View style={styles.formSpacerDivider} />
          </View>

          <View style={styles.btnGroup}>
           
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={{ flex: 1, paddingHorizontal: 6 }}>
              <View style={styles.btnGoogle}>
                <MaterialCommunityIcons
                  color="#fff"
                  name="google"
                  size={18}
                  style={{ marginRight: 12 }} />

                <Text style={styles.btnGoogleText}>Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: '60%',
    height: 200,
    marginTop:40,
    marginLeft:80,
    borderRadius:30,
    overflow: 'hidden',
    
  },
  logoImg: {
    width: '100%',
     height: '100%',
    
   
    
  },
  title: {
    fontSize: 29,
    fontWeight: '700',
    color: '#242424',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#989898',
    marginBottom: 16,
    textAlign: 'center',
  },
  /** Form */
  form: {
    paddingHorizontal: 24,
  },
  formFooter: {
    marginTop: 16,
    fontSize: 13,
    fontWeight: '500',
    color: '#454545',
    textAlign: 'center',
   
  },
  formSpacer: {
    marginTop: 40,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formSpacerText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#454545',
    lineHeight: 20,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    zIndex: 9,
  },
  formSpacerDivider: {
    borderBottomWidth: 2,
    borderColor: '#eff1f5',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
  },
  /** Input */
  input: {
    marginBottom: 12,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#EFF1F5',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#0c4b64',
    borderColor: '#a8ddd4',
    marginTop: 24,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
    marginHorizontal: -6,
  },
 
  
  btnGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#0c6064',
    borderColor: '#a8ddd4',
  },
  btnGoogleText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
/**
 * References
 * Firebase, 2026. Password Authentication. [source code]. Available: <https://firebase.google.com/docs/auth/web/password-auth> [Accessed 28 August 2026].
 * React Native, 2026. Alert. [source code]. Available: <https://reactnative.dev/docs/alert> [Accessed 28 August 2026].
 * Withfra.me. 2022. Ready to Use React Native Components - WithFrame | withfra.me. (Version 2.0) [Source code] Available at:<https://withfra.me/components > [Accessed 17 Aug. 2026].
 */