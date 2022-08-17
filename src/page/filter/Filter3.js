import React, { useState } from "react";
import "./CheckboxLabels.css";

export default function Filter3() {
    const [healthLabels, sethealthLabels] = useState("");
    return (
        <div className="container">
            <div className="card">
                <div className="card-header"> <p className="title">โปรดระบุอาหารที่คุณแพ้</p> </div>
                <div className="card-body">
                    <div className="checkbox-container">
                        <div onChange = {() => sethealthLabels("peanut-free")} >    <input type="checkbox" /><label>เนื้อหมู   </label>    </div><br/>
                        <div onChange = {() => sethealthLabels("soy-free")}>        <input type="checkbox" /><label>เนื้อไก่   </label>    </div><br/>
                        <div onChange = {() => sethealthLabels("crustacean-free")}> <input type="checkbox" /><label>เนื้อปลา  </label>    </div><br/>
                        <div onChange = {() => sethealthLabels("shellfish-free")} > <input type="checkbox" /><label>เนื้อวัว    </label>    </div><br/>
                        <div onChange = {() => sethealthLabels("egg-free")}>        <input type="checkbox" /><label>เนื้อเป็ด   </label>    </div>
                    </div>
                </div>
            </div> <p>{healthLabels}</p>
        </div>
  );
}
