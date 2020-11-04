import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import "../stylesheet/App.css";

function App() {
  return (
    <div className="app">
      <Login />
      <Logout />
    </div>
  );
}

export default App;
