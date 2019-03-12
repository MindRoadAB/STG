import React from 'react';
import * as firebase from "firebase";
//import firebase from "../config/firestore";
class User extends React.Component {
    constructor() {
       super();
       this.state = {
         email: "",
         fullname: ""
       };
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    addUser = e => {
      e.preventDefault();
      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      const userRef = db.collection("users").add({
        fullname: this.state.fullname,
        email: this.state.email
      });  
      this.setState({
        fullname: "",
        email: ""
      });
    };

    readUsers() { //} = e => {
      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      db.collection('users').get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            let items = doc.data();
            /* Make data suitable for rendering */
            items = JSON.stringify(items);
  
            /* Update the components state with query result */
            this.setState({ items : items }) 
          
            console.log(doc.id, '=>', doc.data());
            //return (
            //  <div>
            //    Here comes JSX !
            //  </div>
            //);
          });
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });
    }

    componentDidMount() {

      /* Cause your component to request data from Firebase when
         component first mounted */
      this.readUsers()
    }

    render() {
        const Read = this.readUsers;
        return (
            <form onSubmit={this.addUser}>
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
                value={this.state.fullname}
                onChange={this.updateInput}
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={this.updateInput}
                value={this.state.email}
              />
              <button type="submit">Submit</button>
              <p>{ this.state.items || 'Loading' }</p>
            </form>
            );
        }
    }
export default User;
