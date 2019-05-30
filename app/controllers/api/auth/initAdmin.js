const md5 = require('md5');
const jwt = require('jsonwebtoken');
module.exports = (backendApp, router) => {

    const getToken = login =>{
        return jwt.sign({login: login}, backendApp.config.jwtSecret);
    };

    const signin = (req,res,next) => {

        const User = backendApp.mongoose.model("User");
        const admin = {
            login: 'admin',
            pass: md5('123123'),
            token: getToken('admin')
        };
        User.create(admin, (e,r) => {res.ok('ok')})
    };

    router.post('/initAdmin', [], signin);
};