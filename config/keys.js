// All secrets come from environment variables (.env). dev.js was never
// committed, so requiring it made fresh clones crash on startup.
module.exports = require('./prod.js');