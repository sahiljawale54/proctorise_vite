import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PageNotFound from "./components/404";
import Home from "./components/Home";
import Home2 from "./components/Home2";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          {/* <Route path="/signin" element={<SignIn />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home2 />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
