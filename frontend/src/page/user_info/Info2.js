import React, { useState } from "react";
import "./CheckboxLabels.css";

export var tmp = []
export var protein = ["หมู","ไก่",'ปลา',"กุ้ง","หมึก","เนื้อวัว","ไข่"]
export var protein_value = []

export default function Info2() {
    const [rating0, setratings0] = useState(4);
    const [rating1, setratings1] = useState(4);
    const [rating2, setratings2] = useState(4);
    const [rating3, setratings3] = useState(4);
    const [rating4, setratings4] = useState(4);
    const [rating5, setratings5] = useState(4);
    const [rating6, setratings6] = useState(4);

    tmp[0] = rating0
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

    // console.log(tmp)

    return (
        <div className="container">
            <div className="card">
                <div className="card-header"> <p className="title">โปรดระบุระดับความชอบแหล่งโปรตีนหลัก</p> </div>
                <div className="card-body">   

                        <div class="select-container">
                        <label>{protein[0]}</label>  
                            <select  onChange = {(e) => {setratings0(e.target.value)}}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">
                        <label>{protein[1]}</label>  
                            <select  onChange = {(e) => {setratings1(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">
                        <label>{protein[2]}</label>
                            <select  onChange = {(e) => {setratings2(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">  
                        <label>{protein[3]}</label> 
                            <select  onChange = {(e) => {setratings3(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container"> 
                        <label>{protein[4]}</label> 
                            <select  onChange = {(e) => {setratings4(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">  
                        <label>{protein[5]}</label> 
                            <select  onChange = {(e) => {setratings5(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container"> 
                        <label>{protein[6]}</label>  
                            <select  onChange = {(e) =>{setratings6(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>
                </div>
            </div> 
        </div>
  );
}

