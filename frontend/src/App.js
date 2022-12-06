import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from './page/User_info/Info'
import Home from './page/Home'
import Filter from './page/old/filter/Filter_food'

export default function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/info' element={<Info/>} />
          <Route path='/filter' element={<Filter/>} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}