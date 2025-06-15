import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [message, setMessage] = useState("こんにちは！");
  
  const handleClick = () => {
    setMessage("Reactたのしい！");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>ボタンを押してみて</button>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
