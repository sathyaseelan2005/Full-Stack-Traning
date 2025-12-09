const path = require('path');

const filePath = "/users/rohan/projects/app.js";
console.log(filePath);
console.log("Base Name: ", path.basename(filePath));
console.log("Dir Name: ", path.dirname(filePath));
console.log("Extension Name: ", path.extname(filePath));

const joinedPath = path.join(__dirname, 'public', 'index.html');
console.log("Joined Path: ", joinedPath);