import React, { useState } from "react";
import "./CheckboxLabels.css";

export var tmp = []
export var protein = ["หมู","ไก่",'ปลา',"กุ้ง","หมึก","เนื้อวัว","ไข่"]
export var protein_value = []

export default function Info2() {
    const [rating, setratings] = useState(2);
    const [rating1, setratings1] = useState(2);
    const [rating2, setratings2] = useState(2);
    const [rating3, setratings3] = useState(2);
    const [rating4, setratings4] = useState(2);
    const [rating5, setratings5] = useState(2);
    const [rating6, setratings6] = useState(2);

    tmp[0] = rating
    tmp[1] = rating1
    tmp[2] = rating2
    tmp[3] = rating3
    tmp[4] = rating4
    tmp[5] = rating5
    tmp[6] = rating6
    var result = []
    for (var i = 0 ; i < 7 ; i++){
        result.push(protein[i] + " rating : " + tmp[i]) 
        protein_value[i] = tmp[i]
    }

    console.log(result)

    return (
        <div className="container">
            <div className="card">
                <div className="card-header"> <p className="title">โปรดระบุระดับความชอบแหล่งโปรตีนหลัก</p> </div>
                <div className="card-body">   

                        <div class="select-container">
                        <label>{protein[0]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings(tmp); }}  >
                                    <option value = "2">ชอบมาก</option>
                                    <option value = "1">ชอบ</option>
                                    <option value = "0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">
                        <label>{protein[1]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings1(tmp); }}  >
                                <option value="2">ชอบมาก</option>
                                <option value="1">ชอบ</option>
                                <option value="0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">
                        <label>{protein[2]}</label>
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings2(tmp); }}  >
                                <option value="2">ชอบมาก</option>
                                <option value="1">ชอบ</option>
                                <option value="0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">  
                        <label>{protein[3]}</label> 
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings3(tmp); }}  >
                                <option value="2">ชอบมาก</option>
                                <option value="1">ชอบ</option>
                                <option value="0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container"> 
                        <label>{protein[4]}</label> 
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings4(tmp); }}  >
                                <option value="2">ชอบมาก</option>
                                <option value="1">ชอบ</option >
                                <option value="0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">  
                        <label>{protein[5]}</label> 
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings5(tmp); }}  >
                                <option value="2">ชอบมาก</option>
                                <option value="1">ชอบ</option>
                                <option value="0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container"> 
                        <label>{protein[6]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings6(tmp); }}  >
                                <option value="2">ชอบมาก</option>
                                <option value="1">ชอบ</option>
                                <option value="0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/>  </div>
                </div>
            </div> 
        </div>
  );
}

