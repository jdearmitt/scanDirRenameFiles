const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    watchedDir: process.env.WATCHED_DIR
};