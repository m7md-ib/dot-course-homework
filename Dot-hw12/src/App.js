import { useState } from "react";
import LoginButton from "./LoginButton";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      <h1>Welcome to the website</h1>

      <LoginButton isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
    </div>
  );
}

export default App;
