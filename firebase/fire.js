import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-aXuuUWOvOX3A8VmvX8dFbS0KRP45KKU",
  authDomain: "reactnativefirebase-35f8e.firebaseapp.com",
  projectId: "reactnativefirebase-35f8e",
  storageBucket: "reactnativefirebase-35f8e.appspot.com",
  messagingSenderId: "1046600979720",
  appId: "1:1046600979720:web:ca01e8f9ace8059a4848bd",
  measurementId: "G-8H6GFNNEVL"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
