import React from "react";
import Filter1 from "./Filter1";
import Filter2 from "./Filter2";
import Filter3 from "./Filter3";
import RicipeFinder from "../old/RecipeFinder";
// import RicipeFinder2 from "../RecipeFinder2";
import Navbar from '../Navbar'

export default function Filter_food() {
 

  return (
    <div>
        <Navbar/><br/>
        <Filter1/><br/>
        <Filter2/><br/>
        <Filter3/><br/>
        <RicipeFinder/>
        {/* <RicipeFinder2/> */}
    </div>
 
  );
}