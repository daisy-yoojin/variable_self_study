import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    // BEM naming convention
    <div className="app">
      <h1>slack-app clone 🚀</h1>
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar/>
        {/* React-Router => Chat screen */}
      </div>
    </div>
  );
};

export default App;
