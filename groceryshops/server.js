const express = require('express');
const app = express();

const port = 4002;

app.get('/grocerylist', (re,res)=>{
    let respons = {
      data: {
        item:[
          {id:1,name:'order 1'},{id:2,name:'order 2'}
        ]
      }
    }
    res.status(200).json(respons)
})
app.get('/',(req,res)=>{res.status(200).json({message:'grocery service called '})})
app.listen(port , ()=>{
  console.log(`grocery service listening at http://localhost:${port} `)
})