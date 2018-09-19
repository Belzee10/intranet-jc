import React, { Component } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
