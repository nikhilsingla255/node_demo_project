//created by me
const Order = require("../models/Order");
const Product = require("../models/Product");

//write CRUD operations
exports.createOrder = async (req,res)=>{
    //creating an object to push some request body
    const {productId,quantity,customerId} = req.body;

    const product =   await Product.findById(productId);
    if(product.quantity <quantity){
        return res.status(400).json({message:"insufficeint stock"});
    }

    const total =product.price * quantity;
 
    const order = await Order.create({
        productId,
        quantity,
        price: product.price,
        total,
        customerId
    });
    product.quantity -= quantity;
    await product.save();
    res.status(201).json(order);
}

exports.getOrders = async (req,res) =>{
    const orders = await Order.find();
    res.json(orders);
}

exports.updateProducts = async(req,res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id,req.body,
        {new: true}
    );
    res.json(product);
}

exports.deleteOrders = async(req,res) =>{
    await Order.findByIdAndDelete(req.params.id);
    res.json({message:"order deleted"})
}

exports.getOrder = async(req,res)=>{
    const order = await Order.findById(req.params.id);
    res.json(order);
}