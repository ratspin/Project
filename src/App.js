import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeFinder from './page/RecipeFinder'
import RecipeFinder2 from './page/RecipeFinder2'
import CheckboxLabels from './page/filter/CheckboxLabels'
import Filter from './page/filter/Filter_food'

export default function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Filter  />} />
          <Route path='/RecipeFinder' element={<RecipeFinder />} />
          <Route path='/RecipeFinder2' element={<RecipeFinder2 />} />
          <Route path='/CheckboxLabels' element={<CheckboxLabels />} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}