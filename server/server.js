const express = require("express");
const accountRoutes = require('./src/account/routes');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Hello Proxiad Backend!");
});

app.use("/api/v1/accounts", accountRoutes);

app.listen(PORT, function check(err)
{
    if(err)
    console.log("error");
    else
    console.log("started on port "+ PORT);
});