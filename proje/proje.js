const express = require('express')
const app = express();
const port = 3000;
const fs = require('fs')
const UserData = require('./UserData.json');
//const newUser = require('./newUser.json');
const UpdatedUser = require('./Updated.json');
const NewJASON = require('./NewJASON.json');
app.use(express.json())
app.get('/data', (req,res) => {
fs.readFile('./UserData', "utf-8", (err,stringify) => {
  res.send(UserData);})
})
app.post('/new', (req,res) => {
  NewJASON.name = "AYOUB",
  fs.writeFile('./newUser1.json', JSON.stringify(NewJASON,null,2), (err) =>{
   if(err){
    console.log('An Error');
   } else {
    console.log('All Goood');
   }
   res.send('Successfully CREATED')
  })
})
app.put('/update', (req,res)=>{
fs.writeFile('./UpdatedUserFood.json', JSON.stringify(UpdatedUser, null,2), (err =>{
  if (err) {
    console.log('An ERROR occured');
  } else {
    console.log('User File UPDATED');}
}))
res.send('You are on the RIGHT PATH')
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});