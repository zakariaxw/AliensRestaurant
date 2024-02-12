const fs = require("fs");

function addUser(req, res) {
  let users = [];

  
  try {
    const data = fs.readFileSync("UserData.json", "utf-8");
    users = JSON.parse(data);
    if (!Array.isArray(users)) {
      users = [];
    }
  } catch (err) {
    
  }


  const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;


  const newUser = {
    id,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };

  users.push(newUser);


  fs.writeFileSync("UserData.json", JSON.stringify(users, null, 2));

  res.send("User added successfully!");
}

module.exports = addUser;
