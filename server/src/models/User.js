const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['ADMIN', 'USER'], default: 'USER' },
    isActive: { type: Boolean, default: true }
},{timestamps:true});

module.exports = mongoose.model("User",userSchema);