import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeFinder from './RecipeFinder'
import App2 from './App2'
import Checkbox from './Checkbox'

export default function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<App2 />} />
          <Route path='/RecipeFinder' element={<RecipeFinder />} />
          <Route path='/Checkbox' element={<Checkbox />} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}