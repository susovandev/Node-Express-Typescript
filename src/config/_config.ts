import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const _config = {
    node_env: process.env.NODE_ENV || 'development',
    port: Number(process.env.PORT) || 3000,
    db: {
        production_db_url:
            process.env.PRODUCTION_DB_URL ||
            'mongodb://localhost:27017/production',
        development_db_url:
            process.env.DEVELOPMENT_DB_URL ||
            'mongodb://localhost:27017/development',
    },
};

const config = Object.freeze(_config);
export default config;
