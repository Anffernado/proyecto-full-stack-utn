const adminGet = (req, res) => {

  /*res.json({
    msg: "Bienvenido a la pagina de administrador"
  });*/

  res.render('crud', { layout: 'dashboard' });
}

export {
  adminGet
}