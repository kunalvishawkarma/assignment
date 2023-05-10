const express = require("express");
const app = express();
const port = 3000

app.use(express.json());

const data = {
  "indigo": "₹1,614",
  "airAsia": "₹1,869",
  "vistara": "₹2133"
};


// routes 

app.post("/",(req,res)=>{
    const {source , destination , date} = req.body
    if (source || destination || date){
        res.send(data) 
    }else{
        res.send("plz fill all fields")
    }

})


app.listen(port,function(err){
    console.log('server is running on 3000')
});   