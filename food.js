const express = require('express');
const fs = require("fs");
const app = express();
const PORT=3000;
const jsonpath = require('./foodlist.json');
app.use(express.json());
app.use(express.urlencoded());


app.get('/food',(req,res)=>{    
res.json(jsonpath);
});

app.post('/food',(req,res)=>{   
jsonpath.push(req.body)    
fs.writeFile('./foodlist.json' , JSON.stringify(jsonpath,null,2),err =>{
    if(err) throw(err);
    
})
res.send(201);
});

app.put('/food/:id', (req, res) => {
    const id = req.params.id;
    const updatedFood = req.body;
    jsonpath[id] = updatedFood;
    fs.writeFile('./foodlist.json', JSON.stringify(jsonpath, null, 2), err => {
        if (err) throw (err);
    });
    res.status(200).send();
});

app.delete('/food/:id', (req, res) => {
    const id = req.params.id;
    jsonpath.splice(id, 1);
    fs.writeFile('./foodlist.json', JSON.stringify(jsonpath, null, 2), err => {
        if (err) throw (err);
    });
    res.status(200).send();
});

app.listen(PORT,(req,res) => {console.log('')});