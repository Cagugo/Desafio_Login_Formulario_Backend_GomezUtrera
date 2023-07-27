const loginServices = require('../loginServices/loginServices');

class LoginController {
  login = async (req, res) => {
    const { email, password } = req.body;
    return await loginServices.login(email, password, req, res);
  };

  logout = async (req, res) => {
    const logoutResult = await loginServices.logout(req, res);
    if (logoutResult.success) {
      return res.redirect('/');
    } else {
      return res.status(401).json(logoutResult);
    }
  };
}
module.exports = new LoginController();
