const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = (app, config) => {
    // view engine setup
    app.set('views', path.join(config.rootFolder, '/views'));
    app.set('view engine', 'hbs');

    // this sets up which is the parse for the request data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    
    // we will use cookies
    app.use(cookieParser());

    //session is storage for cookies
    app.use(session({secret: 's3cr3t5tr1ng', resave: false, saveUninitialized: false}));

    //for user validataon we will use passport module
    app.use(passport.initialize());
    app.use(passport.session());

    //this makes the content of the public forlder accessible for every user
    app.use(express.static(path.join(config.rootFolder, 'public')));
};
