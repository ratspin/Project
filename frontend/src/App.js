import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import U from './page/user_info/Info1'
// import Home from './page/Home'


export default function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home  />} /> */}
          <Route path='/' element={<U/>} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}