import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { smartHomeData } from "./smartHomeData";
import "./style.css";

const App = () => (
  <>
    <div className="container">
      <Header title="Chytrý dům" />

      <Dashboard data={smartHomeData} />
    </div>
  </>
);

createRoot(document.querySelector("#app")).render(<App />);
