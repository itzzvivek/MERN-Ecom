const Product = require("../models/productModel");


//Create product
exports.createProduct = async (req,res,next)=>{

    const product = await Product.create(req.body);
    res.status(201).json({
        sucess:true,
        product
    })
}


exports.getAllProducts = (req , res)=>{

    res.status(200).json({message:"Route id working fine"})
}