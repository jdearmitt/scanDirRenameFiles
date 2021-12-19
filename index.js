const { osDelimiter } = require('./config');
const config = require('./config');

const file = require('./fileActions');

file.fncScanAndRename(config.watchedDir);

