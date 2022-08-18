import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RecipeFinder from './page/RecipeFinder'
// import RecipeFinder2 from './page/RecipeFinder2'
import Filter from './page/filter/Filter_food'
// import Search from './page/Search'
import Home from './page/Home'

export default function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/Filter' element={<Filter />} />
          <Route path='/Filter' element={<Home />} />
          {/* <Route path='/RecipeFinder' element={<RecipeFinder />} />
          <Route path='/RecipeFinder2' element={<RecipeFinder2 />} /> */}
        </Routes>
        </BrowserRouter>
      </div>
  );
}