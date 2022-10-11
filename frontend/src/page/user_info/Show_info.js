import React, { useState } from "react";
import ShowResult from "./Show_Result";
import {RecipeListContainer} from '../old/styled_components/Recipe'


var food = require('../../calculatetion/food.json');       
var calculate = require("../../calculatetion/calculate.js");
var user_rating = []

export default function Show_info() {
  const [results, setresults] = useState([]);
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


  var tmp = []
  tmp.push({     อาหาร: "User",
                    โรคหัวใจ: userinfo.value[0],
                    โรคเบาหวาน: userinfo1.value1[0],
                    โรคไต: userinfo2.value2[0],
                    โรคความดันโลหิตสูง: userinfo3.value3[0],
                    หมู: 0,
                    ไก่: 0,
                    ปลา: 0,
                    กุ้ง: 0,
                    หมึก: 0,
                    วัว: 0,
                    ไข่: 0,
                    คะน้า: 0,
                    เห็ด: 0,
                    ผักกาด: 0,
                    มะเขือ: 0,
                    ขิง: 0,
                    ฟัก: 0,
                    เม็ดมะม่วงหิมพานต์: 0,
                    บวบ: 0,
                    หน่อไม้: 0,
                    ตำลึง: 0,
                    ชะอม: 0,
                    กะหล่ำปลี: 0,
                    ถั่วงอก: 0,
                    ผักบุ้ง: 0,
                    ไชโป้ว: 0,
                    บรอกโคลี: 0,
                    สะตอ: 0,
                    กะเพรา: 0,
                    ฝักทอง: 0,
                    ผักกระเฉด: 0
            })

  const onSubmit = (e) => { 
    e.preventDefault();
    user_rating = tmp
    var Result = calculate.similar_sort(calculate.Weight(user_rating),calculate.Weight(food) ,calculate.similar_score ,65)
    getresult(Result);
  };

    const getresult = async (Result) => {
      var food_img = []
      var food_ingr = []
      var food_db = []
      var food_name = []
      var food_similar = []
  
      for(var i = 0; i < Result.length; i++) {
        food_img = "food/"+ Result[i].food + ".png"
        food_ingr = "ingredients/"+ Result[i].food + ".png"
        food_name = Result[i].food
        food_similar = Result[i].similar_rate
        food_db.push({food_img:food_img,food_ingr:food_ingr,food_name:food_name,food_similar:food_similar})
      }

      setresults(food_db)
      console.log(food_db) 
  };

  return (
    <div>
      <form onSubmit={onSubmit} >
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
        <input   type="submit" value="Submit" />
      </form>
      <RecipeListContainer>        
        {results !== [] &&results.map((data,) => {return <ShowResult data={data} />})}
      </RecipeListContainer>
    </div>
   
  )
} 