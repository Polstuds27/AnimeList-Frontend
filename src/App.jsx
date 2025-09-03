
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AnimeInfo from "./components/anime-info/AnimeInfo";
import About from "./components/about/About";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/animes/info/:id" element={<AnimeInfo/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
