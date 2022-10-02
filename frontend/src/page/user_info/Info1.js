import React, { useState } from "react";
import "./CheckboxLabels.css";

export var disease_value 

export default function Info1() {
    const [userinfo, setUserInfo] = useState({value: [0]});
    const [userinfo1, setUserInfo1] = useState ({value1: [0]});
    const [userinfo2, setUserInfo2] = useState({value2: [0]});
    const [userinfo3, setUserInfo3] = useState({value3: [0]});

    var handleChange  = (e) => {
        const { checked} = e.target;
        const { value } = userinfo;
        if(value)
        if (checked)    { setUserInfo({value: [5],}); console.log("โรคหัวใจ : checked") }
        else            { setUserInfo({value: [0],}); console.log("โรคหัวใจ : unchecked")}      
    }; 
    const handleChange1 = (e) => {
        const { checked} = e.target;
        const { value1 } = userinfo1;
        if(value1)
        if (checked)    { setUserInfo1({value1: [5],}); console.log("โรคเบาหวาน : checked") }
        else            { setUserInfo1({value1: [0],}); console.log("โรคเบาหวาน : unchecked")}  
    }; 
    const handleChange2 = (e) => {
        const { checked} = e.target;
        const { value2 } = userinfo2;
        if(value2)
        if (checked)    { setUserInfo2({value2: [5],}); console.log("โรคไต : checked") }
        else            { setUserInfo2({value2: [0],}); console.log("โรคไต : unchecked")}  
    }; 
    const handleChange3 = (e) => {
        const { checked} = e.target;
        const { value3 } = userinfo3;
        if(value3)
        if (checked)    { setUserInfo3({value3: [5],}); console.log("โรคความดันโลหิตสูง : checked") }
        else            { setUserInfo3({value3: [0],}); console.log("โรคความดันโลหิตสูง : unchecked")}  
    }; 

    const tmp = []
	tmp.push(userinfo.value[0],userinfo1.value1[0],userinfo2.value2[0],userinfo3.value3[0])
    // console.log(disease_value)
    disease_value = tmp

    return (
        <div className="container">
            <div className="card">
                <div className="card-header"> <p className="title">โปรดระบุโรคของคุณ</p> </div>
                <div className="card-body">
                    <input type="checkbox" onChange={handleChange}/>  <label>โรคหัวใจ</label>            <br/><br/>
                    <input type="checkbox" onChange={handleChange1}/> <label>โรคเบาหวาน</label>         <br/><br/>
                    <input type="checkbox" onChange={handleChange2}/> <label>โรคไต</label>              <br/><br/>
                    <input type="checkbox" onChange={handleChange3}/> <label>โรคความดันโลหิตสูง</label>    <br/><br/>
                </div>
                
            </div>
        </div>
  );
}


