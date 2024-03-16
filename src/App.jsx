import React from "react";
import Navbar from "./components/Fragments/Navbar";
import Homepage from "./components/Layouts/Homepage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-cyan-900 px-4">
      <header className="flex justify-center">
        <Navbar className="w-full"></Navbar>
      </header>
      <main className="flex justify-center items-center my-32 mx-5 px-3">
        <Homepage />
      </main>
    </div>
  );
}
export default App;
