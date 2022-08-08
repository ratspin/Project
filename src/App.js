import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeFinder from './RecipeFinder'
import App2 from './RecipeFinder2'
import CheckboxLabels from './CheckboxLabels'

export default function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<App2 />} />
          <Route path='/RecipeFinder' element={<RecipeFinder />} />
          <Route path='/CheckboxLabels' element={<CheckboxLabels />} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}