import React, { useState } from "react";
import "./CheckboxLabels.css";

export var tmp = []
export default function Info2() {
    const [rating, setratings] = useState("2");
    const [rating1, setratings1] = useState("2");
    const [rating2, setratings2] = useState("2");
    const [rating3, setratings3] = useState("2");
    const [rating4, setratings4] = useState("2");
    const [rating5, setratings5] = useState("2");
    const [rating6, setratings6] = useState("2");
    // console.log("ไข่ rating :",rating6)
    tmp[0] = rating
    tmp[1] = rating1
    tmp[2] = rating2
    tmp[3] = rating3
    tmp[4] = rating4
    tmp[5] = rating5
    tmp[6] = rating6
    
    console.log(tmp)
    

    return (
        <div className="container">
            <div className="card">
                <div className="card-header"> <p className="title">โปรดระบุระดับความชอบแหล่งโปรตีนหลัก</p> </div>
                <div className="card-body">
                    <div className="checkbox-container">   

                        <label>หมู</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings(tmp); }}  >
                                    <option value = "2">ชอบมาก</option>
                                    <option value = "1">ชอบ</option>
                                    <option value = "0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/> 
                        <label>ไก่</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings1(tmp); }}  >
                                <option value="2">ชอบมาก</option>
                                <option value="1">ชอบ</option>
                                <option value="0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/> 

                        <label>ปลา</label>
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings2(tmp); }}  >
                                <option value="2">ชอบมาก</option>
                                <option value="1">ชอบ</option>
                                <option value="0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/>  

                        <label>กุ้ง</label> 
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings3(tmp); }}  >
                                <option value="2">ชอบมาก</option>
                                <option value="1">ชอบ</option>
                                <option value="0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/>  

                        <label>หมึก</label> 
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings4(tmp); }}  >>
                                <option value="2">ชอบมาก</option>
                                <option value="1">ชอบ</option >
                                <option value="0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/>
                            
                        <label>เนื้อวัว</label> 
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings5(tmp); }}  >
                                <option value="2">ชอบมาก</option>
                                <option value="1">ชอบ</option>
                                <option value="0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/> 

                        <label>ไข่</label>  
                            <select  onChange = {(e) => {const tmp = e.target.value; setratings6(tmp); }}  >
                                <option value="2">ชอบมาก</option>
                                <option value="1">ชอบ</option>
                                <option value="0">ไม่ชอบ/แพ้</option>
                            </select><br/> <br/>  
                    </div>
                </div>
            </div> 
        </div>
  );
}

