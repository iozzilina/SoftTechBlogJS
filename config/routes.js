const userController = require('./../controllers/user');

module.exports = (app) =>{
    app.get('/user/register', userController.registerGet);
    //app.post('/user/register', userController.registerPost);

};


