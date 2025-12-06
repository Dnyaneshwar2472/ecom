import mongoose from "mongoose";
async function  connectDB(){
    try {
        const connction = await mongoose.connect('mongodb+srv://maulijagadale9763:nZeL8UQVHxoSEJ2C@thor.iw1otmk.mongodb.net/ecom');
        console.log(`MongoDb connected at ${connction.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
    }

    export default connectDB;