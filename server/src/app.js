// express server

const express = require('express');
const productRoutes = require("./routes/productRoutes")
const orderRoutes = require("./routes/orderRoutes")
const userRoutes = require("./routes/userRoutes")

const app = express();
app.use(express.json())

app.use("/api/products" , productRoutes)
app.use("/api/orders" , orderRoutes)
app.use("/api/users" , userRoutes)

// app.get('/', (req,res)=> {
//     res.send("hello");
// })

module.exports = app;