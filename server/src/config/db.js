const mongoose = require('mongoose');

// module.exports = async () => {
//     await mongoose.connect(process.env.MONGODB_URL)
//     console.log("database connected")
// }

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected to database");
    } catch (error) {
        console.log("unable to connect to dbatabase");
        console.log("error", error)
        process.exit(1);
    }
}

module.exports = connectDB