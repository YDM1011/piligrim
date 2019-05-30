const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
module.exports = backendApp => {
    return objHtml => {
        let template;

        const transporter = nodemailer.createTransport(
            {
                host: backendApp.config.email.host,
                port: backendApp.config.email.port,
                secure: backendApp.config.email.secure,
                auth: {
                    user: backendApp.config.email.user,
                    pass: backendApp.config.email.pass
                }
            });

        switch (objHtml.temp) {
            case 'user':
                template = path.join(__dirname, '../../../views/emailTemplate/confirm-signup.ejs')
                break;
            case 'post':
                template = path.join(__dirname, '../../../../views-v1/emailTemplate/confirm-post.ejs')
                break;
        }

        return sender (transporter, objHtml, template);
    };


    // return sendMail
};

const sender = (tr, obj, template) => {
    console.log("!!!!!!!!!!!!!", tr, obj, template);
    return new Promise ((rs,rj)=>{
        tr.sendMail({
            from: backendApp.config.email.user,
            to: obj.to,
            subject: obj.subject || backendApp.config.email.subject,
            html: ejs.render( fs.readFileSync(template, 'utf-8') , obj.tempObj)
        }, (err, info) => {
            console.log(err, info)
            if (err) {
                rj(err);
            }else {
                rs(info)
            }
        });
    });

};