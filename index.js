const express = require('express');
const app = express();
const port = 3000;
const employeesData = require('./routers/employeesData');

app.get("/", (req,res) => {
    res.send("Hello World!");
});

app.use('/employeesData', employeesData);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
