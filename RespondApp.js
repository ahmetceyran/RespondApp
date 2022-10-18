const express = require("express");

const ser = express();


const middleware = (req, res, next) => {
    console.log('Yeni bir istek geldi');
    next()
}

const middlewarePost = (req, res, next) => {
    console.log('Post isteği için istek gönderildi');
    next()
}

ser.get("/hello",middleware , (req, res) => {
    res.send("Merhaba, GET istegi attiniz")
});

ser.post("/hello",middleware,middlewarePost , (req, res) => {
    res.send("Merhaba, POST istegi attiniz")
})

ser.put("/hello",middleware , (req, res) => {
    res.send("Merhaba, PUT istegi attiniz")
})

ser.delete("/hello",middleware ,  (req, res) => {
    res.send("Merhaba, DELETE istegi attiniz")
})

ser.listen(3000, () => {
    console.log("server is running")
})