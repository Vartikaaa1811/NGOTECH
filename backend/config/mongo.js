const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () =>{
    try{
     await mongoose.connect(process.env.MONGO_URL);
      console.log("MongoDB connected");
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB


//frontend = export default xyzeee, where as backend = module.exports = xyz