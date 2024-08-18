import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Navbar from "./components/Navbar";
import Update from "./components/Update";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
