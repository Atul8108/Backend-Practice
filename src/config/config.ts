import {config as conf} from 'dotenv'

conf();

const _config = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI,
    env:process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
}

export const config = Object.freeze(_config);