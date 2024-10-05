import mongoose from "mongoose";

const productScehma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const Product = mongoose.model('Product', productScehma);

export default Product;