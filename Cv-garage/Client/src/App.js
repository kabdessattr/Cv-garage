import React, { useEffect } from "react";
import "./App.css";
import Main from "./Layout/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Navbar from "./components/HomePage Components/Navbar/Navbar";
import Header from "./Layout/Header";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router className="App">
        <Main />
      </Router>{" "}
    </Provider>
  );
};

export default App;
