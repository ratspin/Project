import React from "react";
import Info1 from "./Info1";
import Info2 from "./Info2";
import Info3 from "./Info3";
import Navbar from '../Navbar'
// import Showinfo from "./Show_info";
// import CalResult from "./CalResult";

export default function Info() {
 

  return (
    <div>
        <Navbar/><br/>
        <Info1/><br/>
        <Info2/><br/>
        <Info3/><br/>
        {/* <Showinfo/><br/> */}
        {/* <CalResult/><br/> */}
    </div>
 
  );
}