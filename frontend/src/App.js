import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import U from './page/user_info/User_Info'
// import U from './page/user_info/Show_info'
import Home from './page/Home'
import Filter from './page/filter/Filter_food'
import Test from './test/ResultComponent'

export default function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/info' element={<U/>} />
          <Route path='/filter' element={<Filter/>} />
          <Route path='/test' element={<Test/>} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}