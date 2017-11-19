const User = require('mongoose').model('User');

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
     }
    //,
    // registerPost: (res, req) => {
    //     let registerArgs = req.body;

    //     User.findOne({
    //             email: registerArgs.email
    //         })
    //         .then(user => {
    //             console.log(user);
    //         });
    //     let errorMsg = '';
    //     if(user) {
    //         errorMsg = 'User with same username exists!';
    //     }


    // }
}