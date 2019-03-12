import * as firebase from "firebase";
import 'firebase/firestore';

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

//const databaseRef = firebase.firestore();

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

export const todosRef = firestore.collection("todos");

//var data = {
//    name: 'Los Angeles',
//    state: 'CA',
//    country: 'USA'
//  };
//  
//  databaseRef.collection('cities').doc('LA').set(data);