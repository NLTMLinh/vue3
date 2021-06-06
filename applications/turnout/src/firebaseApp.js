import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMpRv0EVHH8PvOtEb46kmI91baufQNw9o",
  authDomain: "turnout-39f58.firebaseapp.com",
  projectId: "turnout-39f58",
  storageBucket: "turnout-39f58.appspot.com",
  messagingSenderId: "613017029374",
  appId: "1:613017029374:web:e94927f6d9fb4814f8b3af",
  measurementId: "G-H1JH8RP7SV"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const eventsRef = firebaseApp
  .database()
  .ref()
  .child("events");
