import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./screens/SignUpForm";
import Home from "./screens/Home";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={SignUpForm} exact />
      </Switch>
    </main>
  );
}

export default App;
