import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide"
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <Navbar />
        <div className="grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full">
          <LeftSide/>
          <RightSide/>
        </div>
      </div>
    </div>
  );
};

export default App;
