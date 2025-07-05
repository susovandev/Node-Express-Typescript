import config from '@/config/_config.js';
import mongoose from 'mongoose';

console.log(config.node_env);
const connectionDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            config.node_env === 'production'
                ? (config.db.production_db_url as string)
                : (config.db.development_db_url as string),
        );

        console.log(
            `Database connected successfully: ${connectionInstance.connection.host}\n`,
            `Database name: ${connectionInstance.connection.name}\n`,
            `Database port: ${connectionInstance.connection.port}`,
        );
    } catch (error) {
        console.log('Error connecting to the database:', error);
        throw error;
    }
};

export default connectionDB;
