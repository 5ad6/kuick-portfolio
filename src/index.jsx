import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h2>Welcome to My React Portfolio 🚀</h2>
      <p>これからここに自分の作品やスキルをまとめていきます！</p>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
