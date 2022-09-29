import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from './page/filter/Filter_food'
import Home from './page/Home'


export default function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/Filter' element={<Filter />} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}