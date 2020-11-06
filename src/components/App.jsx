import React, { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";
import "../stylesheet/App.css";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {user ? (
        <Profile user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
