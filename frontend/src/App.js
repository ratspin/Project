import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import U from './page/user_info/Info'
// import U from './page/user_info/Show_info'
// import Home from './page/Home'
import Filter from './page/filter/Filter_food'


export default function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home  />} /> */}
          <Route path='/' element={<U/>} />
          <Route path='/filter' element={<Filter/>} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}