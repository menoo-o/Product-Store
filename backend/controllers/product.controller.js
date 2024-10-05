import Product from "../models/product.model.js";


export const getProducts = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find();
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("Error in fetching products", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
} 


//post products
export const postProducts = async(req, res)=>{
    const product = req.body; ///user will send this data
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message:"pls provide all fields"})
    }
    const newProduct = new Product (product)
    try{
        await newProduct.save();
        res.status(201).json({success:true, data:newProduct });   

    } catch (error) {
        console.log("Error in creating product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}


//delete products
export const deleteProducts = async(req,res)=>{
    const {id} = req.params;
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product deleted"})
    } catch (error){
        res.status(404).json({success:false, message:"Product does not exist"})
    }
}


//update products
export const updateProducts = async (req, res)=>{
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({success:false, message:"INVALID PRODUCT ID"})
    }
    
    try{
       const updatedProduct = await Product.findByIdAndUpdate(id, product,{new:true});
       res.status(200).json({success:true, message:updatedProduct});
   } catch (error){
       res.status(500).json({success:false, message:"server error"})
   }
}