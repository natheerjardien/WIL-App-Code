// importing the core firebase app initializer (Expo, 2026).
import { initializeApp } from 'firebase/app';
// pulling in just the auth module so we dont bloat the app size (Firebase, 2026).
import { getAuth } from 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyDbL55frdOhcMZPmW3HiUFhBb7AWbj6Nwg",
  authDomain: "wil-smartparking.firebaseapp.com",
  databaseURL: "https://wil-smartparking-default-rtdb.firebaseio.com",
  projectId: "wil-smartparking",
  storageBucket: "wil-smartparking.firebasestorage.app",
  messagingSenderId: "206377666582",
  appId: "1:206377666582:web:df1754d86802997e644d37",
  measurementId: "G-98T1959MMK"
};

// booting up the firebase app
const app = initializeApp(firebaseConfig);

// exporting this auth instance so we can link it into our login/register pages easily (Firebase, 2026).
export const auth = getAuth(app);

/* Reference list:

   Expo, 2026. Using Firebase. [source code]. Available: <https://docs.expo.dev/guides/using-firebase/> [Accessed 28 August 2026].

   Firebase, 2026. Get Started with Firebase Authentication in React Native. [source code]. Available: <https://firebase.google.com/docs/auth/web/start> [Accessed 28 August 2026].

*/