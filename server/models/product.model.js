
import Product from "./product.mongo.js";


const readProduct = async () =>{
    try {
        return await Product.find();
        
    } catch (error) {
        console.error(error)
        
    }
}
const createProduct = async (NewProduct) =>{
     try {

       return await Product.create(NewProduct);
        
    } catch (error) {
        console.error(error);
    }

}
const updateProduct = async (id, product) =>{
    try {
            await Product.findOneAndUpdate({_id: id}, product)
             
            
        } catch (error) {
           console.error(error); 
        }
    }

const deleteProducts = async (id) =>{
     try {
            await Product.findOneAndDelete({_id: id})
            
            
        } catch (error) {
            console.error(error);
            
        }
}

export {readProduct,createProduct,updateProduct,deleteProducts};