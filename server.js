const express=require('express');
const https=require('https')
 
app=express();

app.get("/" ,function(req,res){

const url='https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={f04893789530ce26fbf4ad012b6a9fb8}'

   https.get(url,function(response){
             
response.on("data",function(data){

    const weather=JSON.parse(data)
    console.log(weather);
})

})
    
res.send("server is running");
})





app.listen(3000,function(){

    console.log('listening to 30000');
})