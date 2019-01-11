import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import * as firebase from 'firebase-admin';
//import firebase from 'firebase';
//import admin from 'admin';

class App extends Component {
  constructor() {
    super();
    this.state = {
      patient: []
    };
  }

  componentDidMount() {
    const firebase = require('firebase-admin');

    var serviceAccount = require('./serviceAccountKey.json');
    
    firebase.initializeApp({
      credential: firebase.credential.cert(serviceAccount),
      databaseURL: 'https://stg-horse-organizer.firebaseapp.com'
    });

    var db = firebase.firestore();

    let patientList = "";
    var rootRef = firebase
      .database()
      .ref()
      .child("patient");
    rootRef.on("child_added", snap => {
      this.setState({
        patient: snap.val().label
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <li>{this.state.patient}</li>
      </React.Fragment>
    );
  }
}

//class App extends Component {
//  constructor(props) {
//    super(props);
//    this.state = { messages: [] }; // <- set up react state
//  }
//  componentWillMount(){
//    /* Create reference to messages in Firebase Database */
//    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
//    messagesRef.on('child_added', snapshot => {
//      /* Update React state when message is added at Firebase Database */
//      let message = { text: snapshot.val(), id: snapshot.key };
//      this.setState({ messages: [message].concat(this.state.messages) });
//    })
//  }
//  addMessage(e){
//    e.preventDefault(); // <- prevent form submit from reloading the page
//    /* Send the message to Firebase */
//    fire.database().ref('messages').push( this.inputEl.value );
//    this.inputEl.value = ''; // <- clear the input
//
//    const firebase = require('firebase-admin');
//
//    var serviceAccount = require('./serviceAccountKey.json');
//    
//    firebase.initializeApp({
//      credential: firebase.credential.cert(serviceAccount),
//      databaseURL: 'https://stg-horse-organizer.firebaseapp.com'
//    });
//
//    var db = firebase.firestore();
//
//    var data = {
//      name: 'Los Angeles',
//      state: 'CA',
//      country: 'USA'
//    };
//    
//    // Add a new document in collection "cities" with ID 'LA'
//    var setDoc = db.collection('cities').doc('LA').set(data);
//  }
//  render() {
//    return (
//      <form onSubmit={this.addMessage.bind(this)}>
//        <input type="text" ref={ el => this.inputEl = el }/>
//        <input type="submit"/>
//        <ul>
//          { /* Render the list of messages */
//            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
//          }
//        </ul>
//      </form>
///*      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <p>
//            Edit <code>src/App.js</code> and save to reload.
//          </p>
//          <a
//            className="App-link"
//            href="https://reactjs.org"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Learn React
//          </a>
//        </header>
//      </div> */
//    );
//  }
//}

export default App;
