import mongoose from "mongoose";

const dbConnect = async () =>{
    try{

        const connected = await mongoose.connect(process.env.MONGO_URL);
        
        mongoose.set("strictQuery", true);

        console.log(`Mongodb connected ${(await connected).connection.host}`)

    }catch(error){``
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default dbConnect;

//neDF3KT9us7wCEds