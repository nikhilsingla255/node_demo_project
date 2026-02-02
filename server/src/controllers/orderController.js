//created by me
const Order = require("../models/Order");
const Product = require("../models/Product");

//write CRUD operations
exports.createOrder = async (req, res) => {
  try {
    //creating an object to push some request body
    const { productId, quantity, customerId } = req.body;
    const count = await Order.countDocuments();
    let nextId = 1;
    if (count !== 0) {
      //generate the next order id
      const lastOrder = await Order.find()
        .sort({ _id: -1 })
        .limit(1)
        .select("_id");

      nextId = lastOrder[0]._id ? lastOrder[0]._id + 1 : 1;
    }
    //fetch the product
    const product = await Product.findById(productId);
    if(!product || !product.isAvailable){
      return res.status(400).json({message:"Product not found"})
    }
    
    if (product.quantity < quantity) {
      return res.status(400).json({ message: "Insufficient stock" });
    }

    const totalAmount = product.price * quantity;

    //create order
    const order = await Order.create({
      _id: nextId,
      productId,
      quantity,
      price: product.price,
      totalAmount,
      customerId,
      orderDate: new Date(),
    });

    //reduce stock
    product.quantity -= quantity;
    await product.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
};

// exports.updateProducts = async (req, res) => {
//   const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.json(product);
// };

// exports.deleteOrders = async (req, res) => {
//   await Order.findByIdAndDelete(req.params.id);
//   res.json({ message: "order deleted" });
// };

// exports.getOrder = async (req, res) => {
//   const order = await Order.findById(req.params.id);
//   res.json(order);
// };
