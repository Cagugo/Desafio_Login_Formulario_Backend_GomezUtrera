const { Router } = require('express');
const loginController = require('./loginController/loginController');

module.exports = (app) => {
  const router = new Router();
  app.use('/api/sessions', router);

  router.post('/login', loginController.login);
  router.get('/logout', loginController.logout);
};
