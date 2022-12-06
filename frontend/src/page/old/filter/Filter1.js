import React, { useState } from "react";
import "./CheckboxLabels.css";

export var healthLabels
export var dietLabels

export default function Filter1() {
    const [healthLabel, sethealthLabels] = useState("");
    const [dietLabel, setdietLabels] = useState("");
    healthLabels = healthLabel
    dietLabels = dietLabel
    // console.log(dietLabels);
    // console.log(healthLabels);
    return (
        <div className="container">
            <div className="card">
                <div className="card-header"> <p className="title">โปรดระบุโรคของคุณ</p> </div>
                <div className="card-body">
                    <div className="checkbox-container" >
                        <div onChange = {() => sethealthLabels("low-sugar")} >      <input type="checkbox" /><label>โรคเบาหวาน      </label>    </div><br/>
                        <div onChange = {() => setdietLabels("low-fat")}>           <input type="checkbox" /><label>โรคหัวใจ         </label>    </div><br/>
                        <div onChange = {() => sethealthLabels("kidney-friendly")}> <input type="checkbox" /><label>โรคไต           </label>    </div><br/>
                        <div onChange = {() => setdietLabels("low-sodium")}>        <input type="checkbox" /><label>โรคความดันโลหิตสูง </label>    </div>
                        
                    </div>
                </div>
            </div>  
                    {/* <p>{healthLabels}</p>   <p>{dietLabels}</p> */}
        </div>
  );
}





