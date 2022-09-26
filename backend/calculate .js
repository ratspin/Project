//คำนวณหาค่าความคล้ายคลึงของ user กับ อาหารแต่ละเมนู
var similar_score  = function(x,y){ 
    var sum = [];
    var tmp = [];
    var W1 = 5
    var W2 = 4
    var W3 = 3
    
        for(var key in y)   sum.push(Math.pow((y[key] - x[key]),2))
     
        for(var i = 1 ; i <= 4 ; i ++ )     tmp.push(sum[i]*W1)
        for(var i = 5 ; i <= 8 ; i ++ )     tmp.push(sum[i]*W2)
        for(var i = 9 ; i <= 12 ; i ++ )    tmp.push(sum[i]*W3)
         
        var sum_all = 0
        for(var i = 0 ; i < tmp.length ; i++ )  sum_all += tmp[i];
        var euclid = Math.sqrt(sum_all)
        var similar = 1 / (1 + euclid )

        return similar;
    }



var similar_sort  = function(user,food,similar_score,num_food){ 
    var similar_all  = [];//เก็บค่าความคล้ายคลึงแต่ละค่าที่คำนวณจากฟังก์ชัน similar_score เก็บค่าไว้ใน similar_all
    for(var i = 0 ; i < food.length ; i ++ ){
            var score = similar_score(user[0],food[i])
            var food_name = food[i]["อาหาร"]
            similar_all.push({similar_rate : score , food : food_name });
        }
    //เรียงลำดับค่าความคล้ายคลึงแต่ละเมนูอาหาร โดยเรียงจากมากไปน้อย
    similar_all.sort(function(a,b){ 
        return b.similar_rate < a.similar_rate ? -1 : b.similar_rate > a.similar_rate ? 1 : b.similar_rate >= a.similar_rate ? 0 : NaN;
    });

    //เก็บค่าค่าความคล้ายคลึงแต่ละเมนูอาหาร โดยมีจำนวนที่เก็บเท่ากับ num_food
    var scores = [] ;
    for(var i = 0 ; i < num_food ; i++ ){
        scores.push(similar_all[i]);
    }

    return scores ;
}

//คำนวณหาค่าน้ำหนักของแต่ละเกณฑ์
var Weight  = function(jsn){ 
    MaxC1 = {} //ค่าสูงสุดของเกณฑ์ที่ 1 (โรค)
    MaxC2 = {} //ค่าสูงสุดของเกณฑ์ที่ 2 (อาหารที่แพ้)
    MaxC3 = {} //ค่าสูงสุดของเกณฑ์ที่ 3 (เนื้อสัตว์ที่ชอบ)
    // var test = []  //
    for(var i = 0 ; i < jsn.length ; i ++ ){
        //หาค่า rateing สูงสุดของแต่ละเกณฑ์
        MaxC1[i] = Math.max(jsn[i]["โรคหัวใจ"],jsn[i]["โรคเบาหวาน"],jsn[i]["โรคไต"],jsn[i]["โรคความดันโลหิตสูง"])
        MaxC2[i] = Math.max(jsn[i]["ถั่วเหลือง"],jsn[i]["ถั่วลิสง"],jsn[i]["นม"],jsn[i]["ไข่"])   
        MaxC3[i] = Math.max(jsn[i]["เนื้อ"],jsn[i]["ไก่"],jsn[i]["กุ้ง"],jsn[i]["หมู"])  
        
        //คำนวณหาค่าน้ำาหนักของแต่ละเกณฑ์
        Wc1 = MaxC1[i] / (MaxC1[i] + MaxC2[i] + MaxC3[i])
        Wc2 = MaxC2[i] / (MaxC1[i] + MaxC2[i] + MaxC3[i])
        Wc3 = MaxC3[i] / (MaxC1[i] + MaxC2[i] + MaxC3[i])

        // test.push({Wc1,Wc2,Wc3});  //

        //นำค่าน้ำหนักที่ได้ไปคูณกับค่า rateing ของแต่ละ item
        jsn[i]["โรคหัวใจ"] *= Wc1 
        jsn[i]["โรคเบาหวาน"] *= Wc1 
        jsn[i]["โรคไต"] *= Wc1 
        jsn[i]["โรคความดันโลหิตสูง"] *= Wc1 

        jsn[i]["ถั่วเหลือง"] *= Wc2 
        jsn[i]["ถั่วลิสง"] *= Wc2 
        jsn[i]["นม"] *= Wc2 
        jsn[i]["ไข่"] *= Wc2 

        jsn[i]["เนื้อ"] *= Wc3
        jsn[i]["หมู"] *= Wc3
        jsn[i]["ไก่"] *= Wc3
        jsn[i]["กุ้ง"] *= Wc3
    }
    return jsn;
    // return test;  //
}



module.exports={
    similar_score:similar_score,
    similar_sort:similar_sort,
    Weight:Weight
}

