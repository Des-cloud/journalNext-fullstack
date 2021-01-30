import mongoose, { connections } from "mongoose";

const ct= {};

async function dbConnect(){
    if(ct.isConnected) return;
    const db= await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true, useUnifiedTopology: true
    })

    ct.isConnected= db.connections[0].readyState;
    console.log("Database connected with", ct.isConnected);
}

export default dbConnect;