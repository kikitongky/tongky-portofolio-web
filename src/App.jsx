import React from "react";
import Navbar from "./components/Fragments/Navbar";
import HeroTitle from "./components/Fragments/HeroTitle";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-cyan-900 px-4">
      <div className="flex justify-center">
        <Navbar className="fixed"></Navbar>
      </div>
      <div className="flex justify-center items-center mt-32 px-3">
        <HeroTitle />
      </div>
    </div>
  );
}
export default App;
