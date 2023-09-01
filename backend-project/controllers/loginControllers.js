import { getUser } from "../models/user.js";

const loginGet = (req, res) => {
  res.render('login', { layout: 'main' });
}

const loginPost = async (req, res) => {
  const { username, password } = req.body;
  console.log(` - USER LOGIN: ${username}, ID SESSION: ${req.session.id} 👨‍💻`);
  try {
    const result = await getUser(username, password);
    if (!result) {
      res.status(404).json({ status: 404, error: "Usuario no encontrado" });
    } else {
      if (result.username === 'anffer' && result.password === '1234') {
        req.session.authenticated = true;
        req.session.user = result.username;
        req.session.admin = true;
        //res.status(200).json({ msg: 'Hello Admin, login success ✔' });
        res.redirect('/admin');
      } else if (result.username !== 'anffer' || result.username === 'anffer' && result.password !== '1234') {
        req.session.authenticated = true;
        req.session.user = result.username;
        req.session.admin = false;
        res.json({ msg: 'Hello User, login success ✔' });
      } else {
        res.json({ msg: 'Login success ❌' });
      }
    }
  } catch (err) {
    res.status(500).json({ status: 500, error: err });
  }
}

export {
  loginGet,
  loginPost
}