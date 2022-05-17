import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./routes/Index";
import LeagueTracker from "./routes/LeagueTracker";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/league-acc-tracker" element={<LeagueTracker />} />
      </Routes>
    </div>
  );
}

export default App;