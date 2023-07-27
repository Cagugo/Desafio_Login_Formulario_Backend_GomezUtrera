const productsApi = require('../components/products');

const cartsApi = require('../components/carts');

const handlebarsApi = require('../components/handlebars');

const messagesApi = require('../components/messages');

const cookiesApi = require('../components/cookies');

const sessionsApi = require('../components/sessions');

const usersApi = require('../components/users');

const loginApi = require('../components/login');

const rolesApi = require('../components/roles');

module.exports = (app) => {
  productsApi(app);
  cartsApi(app);
  handlebarsApi(app);
  messagesApi(app);
  cookiesApi(app);
  sessionsApi(app);
  usersApi(app);
  loginApi(app);
  rolesApi(app);
};
