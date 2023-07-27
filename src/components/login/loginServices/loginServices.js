const { User } = require('../../../models/users');

class LoginServices {
  login = async (email, password, req, res) => {
    try {
      if (email === 'adminCoder@coder.com' && password === 'adminCod3r123') {
        req.session.user = {
          email: 'adminCoder@coder.com',
          admin: true,
          role: 'admin',
        };
        req.session.admin = true;
        console.log(req.session.user);

        return res.status(200).json({ success: true, message: 'login successful', userType: 'admin' });
      } else {
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
          return res.status(401).json({ success: false, error: 'invalid credentials' });
        }
        res.cookie('username', email, { maxAge: 20000, httpOnly: true, signed: true });

        req.session.user = user;
        if (req.session.hasOwnProperty('admin')) {
          delete req.session.admin;
        }
        console.log(req.session.user);

        return res.status(200).json({ success: true, message: 'login successful', userType: 'user', user });
      }
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Login failed' });
    }
  };
  logout = async (req, res) => {
    try {
      await new Promise((resolve, reject) => {
        req.session.destroy((err) => {
          if (err) {
            const response = { success: false, error: err };
            req.logoutResult = response;
            reject(response);
          } else {
            const response = { success: true, message: 'Logout successful' };
            req.logoutResult = response;
            resolve(response);
          }
          console.log('"Logout" successful');
        });
      });

      return req.logoutResult;
    } catch (err) {
      const response = { success: false, error: 'Error during logout' };
      req.logoutResult = response;
      return response;
    }
  };
}
module.exports = new LoginServices();
