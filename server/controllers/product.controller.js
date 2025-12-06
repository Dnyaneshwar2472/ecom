import { createProduct, deleteProducts, readProduct, updateProduct } from "../models/product.model.js";

const getProduct =  async (req, res)=>{
    try {
        const products = await readProduct();
            res.send(products);
    } catch (error) {
           console.error(error);
    }
    }

    const postProduct = async (req,res)=>{
    try {
        await createProduct(req.body);
        res.json({ message: "Product added successfully" });

        
    } catch (error) {
        console.error(error);
    }
    }

    const putProduct = async (req,res)=>{
        try {
            await updateProduct(req.params.id, req.body);
               res.json({ message: "Product updated successfully" });
            
        } catch (error) {
           console.error(error); 
        }
    }

    const deleteProduct = async(req,res)=>{
        try {
            await deleteProducts(req.params.id);
              res.json({ message: "Product deleted successfully" });
            
        } catch (error) {
            console.error(error);
            
        }
    }



    export {getProduct, postProduct, putProduct, deleteProduct};