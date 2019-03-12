import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import User from "./User";

class App extends Component {
  render() {
    return (
      <div className="container">
        <User />
        //<ToDoList />
      </div>
    );
  }
}

export default App;
