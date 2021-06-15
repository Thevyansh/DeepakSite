import firebase from 'firebase/app';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// const firebaseConfig = {
//   apiKey: 'AIzaSyB8QtrBR4fHfCYvw2G0vyF4TNjTY7ECTKI',
//   authDomain: 'drdeepakacharyaapp.firebaseapp.com',
//   databaseURL: 'https://drdeepakacharyaapp-default-rtdb.firebaseio.com',
//   projectId: 'drdeepakacharyaapp',
//   storageBucket: 'drdeepakacharyaapp.appspot.com',
//   messagingSenderId: '498678327502',
//   appId: '1:498678327502:web:779700c9be80d0bf3dc89f',
//   measurementId: 'G-MTXFC4MWDG',
// };
const firebaseConfig = {
  apiKey: 'AIzaSyCfWkYY4Wj9BLiFJdEHyl4hE9B_sT6yAwQ',
  authDomain: 'deepak-test-bang.firebaseapp.com',
  projectId: 'deepak-test-bang',
  storageBucket: 'deepak-test-bang.appspot.com',
  messagingSenderId: '774803942983',
  appId: '1:774803942983:web:3a774b719146406ec3cb62',
};
// const firebaseConfig = {
//   apiKey: 'AIzaSyAfq65PtFRjtVQO4LzGalGOxNgxyxD67HY',
//   authDomain: 'acharyam-dev.firebaseapp.com',
//   projectId: 'acharyam-dev',
//   storageBucket: 'acharyam-dev.appspot.com',
//   messagingSenderId: '192150708693',
//   appId: '1:192150708693:web:59dd252b9df6a5b645dd5c',
//   measurementId: 'G-WG2KPZFQRS',
// };

const app = firebase.initializeApp(firebaseConfig);

export const storage = app.storage();
export const db = app.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const ts = firebase.firestore.Timestamp;
export const auth = app.auth();
export default app;
