import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="Container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
