import React, { useState } from "react";
import "./CheckboxLabels.css";

export var healthLabels

export default function Filter2() {
    const [healthLabel, sethealthLabels] = useState("");
    healthLabels = healthLabel

    return (
        <div className="container">
            <div className="card">
                <div className="card-header"> <p className="title">โปรดระบุอาหารที่คุณแพ้</p> </div>
                <div className="card-body">
                    <div className="checkbox-container">
                        <div onChange = {() => sethealthLabels("peanut-free")} >    <input type="checkbox" /><label>ถั่วลิสง   </label>    </div><br/>
                        <div onChange = {() => sethealthLabels("soy-free")}>        <input type="checkbox" /><label>ถั่วเหลือง </label>    </div><br/>
                        <div onChange = {() => sethealthLabels("crustacean-free")}> <input type="checkbox" /><label>ปลา     </label>    </div><br/>
                        <div onChange = {() => sethealthLabels("shellfish-free")} > <input type="checkbox" /><label>หอย     </label>    </div><br/>
                        <div onChange = {() => sethealthLabels("crustacean-free")}> <input type="checkbox" /><label>กุ้ง      </label>     </div><br/>
                        <div onChange = {() => sethealthLabels("dairy-freee")}>     <input type="checkbox" /><label>นม      </label>     </div><br/>
                        <div onChange = {() => sethealthLabels("egg-free")}>        <input type="checkbox" /><label>ไข่      </label>     </div>
                    </div>
                </div>
            </div> <p>{healthLabels}</p>
        </div>
  );
}

