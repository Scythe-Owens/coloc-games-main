import React, { useState, useEffect } from "react";
import "./assets/styles/all.scss";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/song/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
    ;
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App
