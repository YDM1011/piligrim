const path = require('path'),
      rootPath = path.normalize(__dirname + '/../..');

module.exports = {
  root: rootPath,
  app: {
    name: 'Escort'
  },
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost:27017/piligrim',
  jwtSecret: process.env.JWTSECRET || "secret",
  email: {
    from: "ydm101194@yahoo.com",
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true,
    user: 'ydm101194@yahoo.com',
    pass: 'adn45hrf',
    subject: 'Pilligrim'

  },
  site: {
    sidDomain: "*",
    domain: "http://localhost:3000",
    innerDomain: "http://localhost:3000",
    baseUrl: "http://localhost:4200",
    resetPasswordUrl: "/reset_password/",
    setPasswordUrl: "/reset_password/"
  },
  defaultLanguage: "en",
  linkSecretKey: "secretKey",
  rootSecret: "xGCIjhiR4Patsdfasdjrehgkejrg"
};
