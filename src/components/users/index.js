const { Router } = require('express');
const usersController = require('./usersController/usersController');

module.exports = (app) => {
  const router = new Router();
  app.use('/api/sessions/useradmin', router);

  router.post('/', usersController.addUser);
  router.get('/', usersController.getUsers);
  router.get('/:uid', usersController.getUserById);
  router.put('/:uid', usersController.updateUser);
  router.delete('/:uid', usersController.deleteUser);
};
