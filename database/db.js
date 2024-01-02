import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {
    const DB_URI = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@ac-t1m0qnu-shard-00-00.yvlehvh.mongodb.net:27017,ac-t1m0qnu-shard-00-01.yvlehvh.mongodb.net:27017,ac-t1m0qnu-shard-00-02.yvlehvh.mongodb.net:27017/?ssl=true&replicaSet=atlas-11w773-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;