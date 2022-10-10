var food_data = require('./food2.json');    
var user_data = require('./user2.json');     
var calculate = require("./calculate2.js");

var food = food_data    
var user = user_data  

var weight_user = calculate.Weight(user) 
var weight_food = calculate.Weight(food) 
var similar = calculate.similar_score 
var result = calculate.similar_sort(weight_user,weight_food,similar,65)

// console.log(result)

module.exports = result;


