import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const dbConnect = async () =>{

    try{

        const MONGOURI = process.env.MONGO_URL;

        const connected = await mongoose.connect(MONGOURI);
        
        mongoose.set("strictQuery", true);

        console.log(`Mongodb connected ${(await connected).connection.host}`)

    }catch(error){``
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default dbConnect;
//neDF3KT9us7wCEds