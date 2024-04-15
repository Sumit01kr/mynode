const express = require("express")
const app = express();


app.get("/", (req, res) => {
    res.send("I am a Solutions Architect at Amazon");
});

app.listen(8000, () => {
    console.log("App is running at 8000");
});

