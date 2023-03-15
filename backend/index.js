const express = require("express")
const cors = require("cors");

const app = express()
const PORT = 5000
const searchRoute = require("./routes/search");
const historyRoute = require('./routes/history')

const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/NumVerify";


mongoose.connect(MONGO_URL).then(() => {
    console.log("Database is Connected");
}).catch((err) => {
    console.log(`"Database Connection Error" ${err}`);
})


app.listen(PORT, (err) => {
    if (!err) return console.log(`server start at PORT ${PORT}`);
    console.log(err);
})

app.use(express.json());

const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/search', searchRoute);
app.use('/history', historyRoute);