import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from './page/user_info/User_Info'
import Home from './page/Home'
import Filter from './page/filter/Filter_food'
import Test from './page/user_info/Show_info'
import Result from './test/TrueResult'
55
export default function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/info' element={<Info/>} />
          <Route path='/filter' element={<Filter/>} />
          <Route path='/test' element={<Test/>} />
          <Route path='/Result' element={<Result/>} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}