
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AnimeInfo from "./components/anime-info/AnimeInfo";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AnimeInfo/:id" element={<AnimeInfo/>}/>
      </Routes>
    </>
  )
}

export default App
