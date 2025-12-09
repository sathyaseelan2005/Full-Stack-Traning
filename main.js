// const fs = require('fs');
// const content="Hii this is Hello World;"
// fs.writeFile('hello.txt', content,'utf-8', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     console.log('File created successfully');
//     }
// });

// fs.appendFile('hello.txt', '\nNew text Updated',  (err) => {
//     if (err) {
//         console.error("Error: ",err);
//         return;
//     }

//     console.log('Data Updated');
// });


// fs.readFile('hello.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

const express = require('express');
const app = express();

//Middleware to read JSON body
app.use(express.json());
const userRouter = require('./router/userRouter');

app.use('/user', userRouter);


app.listen(3001, () => {
    console.log("Server running on port 3001");
});
