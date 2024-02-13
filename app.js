const express = require("express");
const app = express();
const PORT = 3000;
const addUser = require("./addUser");
const showusers = require("./showusers");
const edituser = require("./edituser");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.post("/adduser", addUser);
app.get("/showusers", showusers);
app.put("/edituser", edituser);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
