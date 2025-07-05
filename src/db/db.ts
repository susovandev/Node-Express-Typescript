import config from '@/config/_config.js';
import Logger from '@/utils/logger.js';
import mongoose from 'mongoose';

const connectionDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            config.node_env === 'production'
                ? (config.db.production_db_url as string)
                : (config.db.development_db_url as string),
        );

        Logger.info(
            `Database connected successfully:
            Database Host: ${connectionInstance.connection.host}
            Database Name: ${connectionInstance.connection.name}
            Database Port: ${connectionInstance.connection.port}`,
        );
    } catch (error) {
        Logger.error('Error connecting to the database:', error);
        throw error;
    }
};

export default connectionDB;
