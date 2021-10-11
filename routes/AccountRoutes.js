const express = require('express')
const Routes = express.Router()
const todoList = require('../controller/Account/Login_Regester_Controller')
const middlewareRegester = require('../middleware/middleware_login_regester/verifyUserName')
const middlwareLogin = require('../middleware/middleware_login_regester/verify_userName_password')
Routes.route('/regester')
        .post(middlewareRegester.verifyUserName,todoList.regester)
Routes.route('/login')
        .post(middlwareLogin.verify_userName_password,todoList.login)
module.exports = Routes
