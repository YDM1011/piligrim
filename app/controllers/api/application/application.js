module.exports = function (backendApp, router) {

    router.get('/t', async (req, res, next) => {
        console.log(backendApp.service)
        const info = await backendApp.service.mail({
            to: 'ydm101114@gmail.com',
            subject: 'custom',
            temp: 'user',
            tempObj: {

            }
        }).catch(e=>{res.badRequest(e)});
        res.ok(info)
    });

};