import mongoose from 'mongoose'

const connectMongoDB = async () => {
    try {
        console.log("Connecting to MongoDB server...")
        const connectionString = process.env.MONGODB_CONNECTION_STRING;
        if (!connectionString) {
            throw new Error("MongoDB connection string is missing in environment variables");
        }

        await mongoose.connect(connectionString);
        console.log("Database connected!\n");
    } catch (err: any){
        console.error(err.message);
        throw err;
    }
}

// More to be added

export { connectMongoDB };