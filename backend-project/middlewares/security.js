const auth = (req, res, next) => {

  console.log(' - AUTH/MIDDLEWARE EXECUTE ✔');

  //Authenticated
  if (req.session.authenticated) {
    //Authorization
    if (req.session.admin && req.originalUrl === '/admin') {
      return next();
    } else if (req.session.admin && req.originalUrl !== '/admin') {
      return res.sendStatus(401);
    } else if (!req.session.admin && req.originalUrl === '/user') {
      return next();
    } else if (!req.session.admin && req.originalUrl === '/admin') {
      return res.sendStatus(401);
    } else if (req.originalUrl !== '/admin' && req.originalUrl !== '/user') {
      return res.redirect(404, '/login');
    }
  } else {
    return res.sendStatus(401);
  }
}

export {
  auth
}