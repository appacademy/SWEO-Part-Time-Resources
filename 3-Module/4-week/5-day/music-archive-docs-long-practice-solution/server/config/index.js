const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
  db: require('./database')[nodeEnv]
}