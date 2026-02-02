const mongoose = require('mongoose');

module.exports = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("database connected")
}

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL)
//     } catch (error) {
//         console.log("error", error)
//         process.exit();
//     }
// }