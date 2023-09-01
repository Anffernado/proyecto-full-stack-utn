const userGet = (req, res) => {

  res.json({
    msg: "Bienvenido a la pagina de usuario"
  });

  /*res.redirect('/user/dashboard');*/
}

export {
  userGet
}