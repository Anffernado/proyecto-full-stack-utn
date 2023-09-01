import express from 'express';
import session from 'express-session';
import { engine } from 'express-handlebars';
//Routes
import loginRoute from './routes/loginRoute.js';
import logoutRoute from './routes/logoutRoute.js';
import adminRoute from './routes/adminRoute.js';
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoute.js';
import sendMailRoute from './routes/sendMailRoute.js'
//Middlewares
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { notFound } from './controllers/notFoundpage.js';
import 'dotenv/config';

const PORT = process.env.PORT || 8000;
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(cors());
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'gomita',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 60000 }
}));
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './uploads'
}));
app.disable('x-powered-by');

app.get('/', (req, res) => { res.redirect('/login'); });
app.use('/login', loginRoute);
app.use('/admin', adminRoute);
app.use('/user', userRoute);
app.use('/logout', logoutRoute);
app.use('/admin/products', productRoute);
app.use('/sendmail', sendMailRoute);
app.use(notFound);

app.listen(PORT, () => {
  console.log('----------------------------------');
  console.log(' - SERVER INITIATE SUCCESFULLY 🚀');
  console.log(' - SERVER RUNINING ON PORT 🔌');
  console.log('----------------------------------');
});
