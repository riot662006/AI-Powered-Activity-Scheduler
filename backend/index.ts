import express from 'express'
import'dotenv/config'

import { connectMongoDB } from './mongodb';

const port = parseInt(process.env.PORT|| '4000', 10);

const app = express();

const startServer = async () => {
    try {
        await connectMongoDB();

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        })
    } catch (err: any) {
        console.error("Failed to start the server");
        process.exit(err.message);
    }
}

startServer();