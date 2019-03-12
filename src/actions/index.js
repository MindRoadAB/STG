import { todosRef } from "../config/firebase";
import { FETCH_TODOS } from "./types";

export const addToDo = newToDo => async dispatch => {
  //todosRef.doc('LA').set(newToDo);
  //debugger;
  todosRef.add(newToDo);
  //todosRef.doc('todo').set(newToDo);
  //todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  //debugger;
  todosRef.doc(completeToDoId).delete();
  //todosRef.doc(completeToDoId).remove();
  //todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  //todosRef.get("value", snapshot => {
  //  debugger;
  //todosRef.onSnapshot("value", snapshot => {
  //  dispatch({
  //    type: FETCH_TODOS,
  //    payload: snapshot.docs
  //  }, err => {
  //    console.log(`Encountered error: ${err}`);
  //  });
    todosRef.get().then(doc => dispatch({
      type: FETCH_TODOS,
      payload: doc.docs
    }, err => {
      console.log(`Encountered error: ${err}`);
    }));
  //};
  //});
};
