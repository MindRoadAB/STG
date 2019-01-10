import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyBbkved5B3UkHxKrJcmnsWyK00uPVCnkeE",
  authDomain: "stg-horse-organizer.firebaseapp.com",
  databaseURL: "https://stg-horse-organizer.firebaseapp.com",
  projectId: "stg-horse-organizer",
  storageBucket: "stg-horse-organizer.appspot.com",
  messagingSenderId: "63411012494"
};
var fire = firebase.initializeApp(config);
export default fire;
