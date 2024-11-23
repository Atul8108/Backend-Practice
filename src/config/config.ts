import {config as conf} from 'dotenv'

conf();

const _config = {
    PORT: process.env.PORT || 3000,
    MONGODB_url: process.env.MONGODB_URI,
    env:process.env.NODE_ENV,
}

export const config = Object.freeze(_config);