import React, { useState } from "react";
import "./CheckboxLabels.css";

export var tmp = []
export var vegetable = [  "คะน้า","เห็ด","ผักกาด","มะเขือ","ขิง",
                        "ฟัก","เม็ดมะม่วงหิมพานต์","บวบ","หน่อไม้","ตำลึง",
                        "ชะอม","กะหล่ำปลี","ถั่วงอก","ผักบุ้ง","ไชโป้ว",
                        "บรอกโคลี","สะตอ","กะเพรา","ฝักทอง","ผักกระเฉด"]

export var vegetable_value = []

export default function Info3() {
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
    const [rating20, setratings20] = useState(4);
    const [rating21, setratings21] = useState(4);
    const [rating22, setratings22] = useState(4);
    const [rating23, setratings23] = useState(4);
    const [rating24, setratings24] = useState(4);
    const [rating25, setratings25] = useState(4);
    const [rating26, setratings26] = useState(4);

    tmp[0] = rating7
    tmp[1] = rating8
    tmp[2] = rating9
    tmp[3] = rating10
    tmp[4] = rating11
    tmp[5] = rating12
    tmp[6] = rating13
    tmp[7] = rating14
    tmp[8] = rating15
    tmp[9] = rating16
    tmp[10] = rating17
    tmp[11] = rating18
    tmp[12] = rating19
    tmp[13] = rating20
    tmp[14] = rating21
    tmp[15] = rating22
    tmp[16] = rating23
    tmp[17] = rating24
    tmp[18] = rating25
    tmp[19] = rating26

    var result = []
    for (var i = 0 ; i < vegetable.length ; i++){
        result.push(vegetable[i] + " rating : " + tmp[i]) 
        vegetable_value[i] = tmp[i]
    }

    console.log(tmp)

    return (
        <div className="container">
            <div className="card">
                <div className="card-header"> <p className="title">โปรดระบุระดับความชอบของผัก</p> </div>
                <div className="card-body">   

                        <div class="select-container">
                        <label>{vegetable[0]}</label>  
                            <select  onChange = {(e) => {setratings7(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">
                        <label>{vegetable[1]}</label>  
                            <select  onChange = {(e) => {setratings8(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">
                        <label>{vegetable[2]}</label>
                            <select  onChange = {(e) => {setratings9(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">  
                        <label>{vegetable[3]}</label> 
                            <select  onChange = {(e) => {setratings10(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container"> 
                        <label>{vegetable[4]}</label> 
                            <select  onChange = {(e) => {setratings11(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">  
                        <label>{vegetable[5]}</label> 
                            <select  onChange = {(e) => {setratings12(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container"> 
                        <label>{vegetable[6]}</label>  
                            <select  onChange = {(e) => {setratings13(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>

                        <div class="select-container"> 
                        <label>{vegetable[7]}</label>  
                            <select  onChange = {(e) => {setratings14(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>
                            
                        <div class="select-container"> 
                        <label>{vegetable[8]}</label>  
                            <select  onChange = {(e) => {setratings15(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>

                        <div class="select-container">
                        <label>{vegetable[9]}</label>  
                            <select  onChange = {(e) => {setratings16(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">
                        <label>{vegetable[10]}</label>  
                            <select  onChange = {(e) => {setratings17(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">
                        <label>{vegetable[11]}</label>
                            <select  onChange = {(e) => {setratings18(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">  
                        <label>{vegetable[12]}</label> 
                            <select  onChange = {(e) => {setratings19(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container"> 
                        <label>{vegetable[13]}</label> 
                            <select  onChange = {(e) => {setratings20(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container">  
                        <label>{vegetable[14]}</label> 
                            <select  onChange = {(e) => {setratings21(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/> </div>
    
                        <div class="select-container"> 
                        <label>{vegetable[15]}</label>  
                            <select  onChange = {(e) => {setratings22(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>

                        <div class="select-container"> 
                        <label>{vegetable[16]}</label>  
                            <select  onChange = {(e) => {setratings23(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>
                            
                        <div class="select-container"> 
                        <label>{vegetable[17]}</label>  
                            <select  onChange = {(e) => {setratings24(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>

                        <div class="select-container"> 
                        <label>{vegetable[18]}</label>  
                            <select  onChange = {(e) =>{setratings25(e.target.value)}}>
                                <option value="4">ชอบที่สุด</option>
                                <option value="3">ชอบมาก</option>
                                <option value="2">ชอบ</option>
                                <option value="1">ชอบน้อย</option>
                                <option value="0">ไม่ชอบ</option>
                            </select><br/> <br/>  </div>
                            
                        <div class="select-container"> 
                        <label>{vegetable[19]}</label>  
                            <select  onChange = {(e) => {setratings26(e.target.value)}}>
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

