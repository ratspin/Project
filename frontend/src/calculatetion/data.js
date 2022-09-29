var food_data = require('./food.json');     //การอ่านไฟล์ของ food.json
var user_data = require('./user.json');     //การอ่านไฟล์ของ user.json 
var calculate = require("./calculate .js");

// let food_json = {"article": + ""} 
// let user_json = {"article": + ""} 

// food_json.article = food_data
// user_json.article = user_data

var food = food_data    //เก็บค่าของ food.json ในตัวแปร food
var user = user_data   //เก็บค่าของ user.json ในตัวแปร user

var weight_user = calculate.Weight(user) //นำค่าของ ratting แต่ละ item ไปคูณค่าน้ำหนักของแต่ละเกณฑ์
var weight_food = calculate.Weight(food) //นำค่าของ ratting แต่ละ item ไปคูณค่าน้ำหนักของแต่ละเกณฑ์
var similar = calculate.similar_score //ค่าความคล้ายคลึงของ user กับ อาหารแต่ละเมนู
var result = calculate.similar_sort(weight_user,weight_food,similar,10)
//แสดงผลการคำนวณผ่านหน้า console 
//ค่าที่ใช้ใน parameter ของ function สำหรับการหาค่าความคล้ายคลึงคือ 
    //ค่าของ ratting แต่ละ item ที่คูณค่าน้ำหนักของแต่ละเกณฑ์ ของ user และ food
    //ค่าความคล้ายคลึงของ user กับ อาหารแต่ละเมนู
    //จำนวนข้อมูลของผลลัพธ์จากการหาค่าความคล้ายคลึง

module.exports = result;


// console.log(result)
    
// console.log(weight_user)

// console.log(calculate.similar_score(calculate.Weight(user[0]),calculate.Weight(food[0])))