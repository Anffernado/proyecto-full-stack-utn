const logoutGet = (req, res) => {
  console.log(' - ADMIN LOGOUT SUCCESFULLY ✔')
  req.session.destroy();
  res.status(200).json({ msg: ' - LOGOUT SUCCESFULLY ✔', redirect: '/login' })
}

export {
  logoutGet
}