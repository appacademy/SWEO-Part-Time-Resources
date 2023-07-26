module.exports = {
  environment: process.env.environment,
  jwtConfig: {
    secret: 'secret',
    expiresIn: 604800
  }
};