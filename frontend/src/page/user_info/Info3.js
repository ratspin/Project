import React, { useState } from "react";
import "./CheckboxLabels.css";

export var tmp = []
export var protein = [  "คะน้า","ผักกาด","ขิง","เม็ดมะม่วงหิมพานต์","หน่อไม้",
                        "ชะอม","ถั่วงอก","ไชโป้ว","สะตอ	","ฟักทอง",
                        "เห็ด","มะเขือ","ฟัก","บวบ","ตำลึง",
                        "กะหล่ำปลี","ผักบุ้ง","บรอกโคลี","กะเพรา","ผักกระเฉด"]

export var protein_value = []

export default function Info3() {
    const [rating, setratings] = useState(4);
    const [rating1, setratings1] = useState(4);
    const [rating2, setratings2] = useState(4);
    const [rating3, setratings3] = useState(4);
    const [rating4, setratings4] = useState(4);
    const [rating5, setratings5] = useState(4);
    const [rating6, setratings6] = useState(4);
    const [rating7, setratings7] = useState(4);
    const [rating8, setratings8] = useState(4);
    const [rating9, setratings9] = useState(4);
    const [rating10, setratings10] = useState(4);
    const [rating11, setratings11] = useState(4);
    const [rating12, setratings12] = useState(4);
    const [rating13, setratings13] = useState(4);
    const [rating14, setratings14] = useState(4);
    const [rating15, setratings15] = useState(4);
    const [rating16, setratings16] = useState(4);
    const [rating17, setratings17] = useState(4);
    const [rating18, setratings18] = useState(4);
    const [rating19, setratings19] = useState(4);

    tmp[0] = rating
    tmp[1] = rating1
    tmp[2] = rating2
    tmp[3] = rating3
    tmp[4] = rating4
    tmp[5] = rating5
    tmp[6] = rating6
    tmp[7] = rating7
    tmp[8] = rating8
    tmp[9] = rating9
    tmp[10] = rating10
    tmp[11] = rating11
    tmp[12] = rating12
    tmp[13] = rating13
    tmp[14] = rating14
    tmp[15] = rating15
    tmp[16] = rating16
    tmp[17] = rating17
    tmp[18] = rating18
    tmp[19] = rating19

    var result = []
    for (var i = 0 ; i < protein.length ; i++){
        result.push(protein[i] + " rating : " + tmp[i]) 
        protein_value[i] = tmp[i]
    }

    // console.log(result)

    return (
        <div className="container">
            <div className="card">
                <div className="card-header"> <p className="title">โปรดระบุระดับความชอบของผัก</p> </div>
                <div className="card-body">   

                        <div class="select-container">
                        <label>{protein[0]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">
                        <label>{protein[1]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings1(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">
                        <label>{protein[2]}</label>
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings2(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">  
                        <label>{protein[3]}</label> 
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings3(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container"> 
                        <label>{protein[4]}</label> 
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings4(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">  
                        <label>{protein[5]}</label> 
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings5(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container"> 
                        <label>{protein[6]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings6(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>

                        <div class="select-container"> 
                        <label>{protein[7]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings7(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>
                            
                        <div class="select-container"> 
                        <label>{protein[8]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings8(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>

                        <div class="select-container">
                        <label>{protein[9]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings9(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">
                        <label>{protein[10]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings10(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">
                        <label>{protein[11]}</label>
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings11(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">  
                        <label>{protein[12]}</label> 
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings12(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container"> 
                        <label>{protein[13]}</label> 
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings13(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">  
                        <label>{protein[14]}</label> 
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings14(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container"> 
                        <label>{protein[15]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings15(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>

                        <div class="select-container"> 
                        <label>{protein[16]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings16(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>
                            
                        <div class="select-container"> 
                        <label>{protein[17]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings17(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>

                        <div class="select-container"> 
                        <label>{protein[18]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings18(tmp); }}  >
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>
                            
                        <div class="select-container"> 
                        <label>{protein[19]}</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings19(tmp); }}  >
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

