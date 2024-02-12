const fs = require("fs");

function displayUsers(req, res) {
 
    
  fs.readFile("UserData.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading file" });
    }

    let users = [];
    try {
      users = JSON.parse(data);
    } catch (parseError) {
      return res.status(500).json({ error: "Error parsing JSON data" });
    }

    res.json(users);
  });
}

module.exports = displayUsers;
