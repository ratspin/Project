import React, { useState } from "react";
import "./CheckboxLabels.css";

export var strings
export default function Filter3() {
    const [string, setstring] = useState("");
    strings = string
    // console.log(strings);
    return (
        <div className="container">
            <div className="card">
                <div className="card-header"> <p className="title">โปรดระบุประเภทเนื้อสัตว์ที่คุณชื่นชอบ</p> </div>
                <div className="card-body">
                    <div className="checkbox-container">
                        <div onChange = {() => setstring("pork")} >           <input type="checkbox" /><label>เนื้อหมู   </label>    </div><br/>
                        <div onChange = {() => setstring("chicken")}>         <input type="checkbox" /><label>เนื้อไก่   </label>    </div><br/>
                        <div onChange = {() => setstring("fish")}>            <input type="checkbox" /><label>เนื้อปลา  </label>    </div><br/>
                        <div onChange = {() => setstring("beef")} >           <input type="checkbox" /><label>เนื้อวัว    </label>    </div><br/>
                    </div>
                </div>
            </div> 
            {/* <p>{strings}</p> */}
        </div>
  );
}
