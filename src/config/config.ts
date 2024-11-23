import {config as conf} from 'dotenv'

conf();

const _config = {
    PORT: process.env.PORT || 3000,
    MONGODB_url: process.env.MONGODB_URI
}

export const config = Object.freeze(_config);