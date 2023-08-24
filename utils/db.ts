
import mongoose from "mongoose";
const connect = async () => {
  console.log("env",process.env.dburl);
 
    try {
        mongoose.set('strictQuery', false);
      await mongoose.connect(process.env.dburl!);
      console.log("db connected")
    
    } catch (error) {
      throw new Error("Connection failed!");
    }
  };
  
  export default connect;