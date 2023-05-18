const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const controllers = require('./controllers');
const authRoutes = require('./controllers/index');
const sequelize = require('./config/connection');
//importing session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
// MBadded
const models=require("./models");
const { strict } = require('assert');

const hbs = exphbs.create({ });



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'/public')));
app.use(authRoutes)
app.use(controllers);


const authenticateUser = (req, res, next) => {
  if (req.session.user) {
    next(); // User is authenticated, proceed to the next middleware/route handler
  } else {
    res.redirect('/login'); // User is not authenticated, redirect to the login page
  }
};

app.get('/doctor', authenticateUser, (req, res) => {
  // Handle the protected route logic
  res.redirect('/patientlist');
});




//connecting to the database then running the server
sequelize.sync({ force: false }).then(() => {

  app.listen(PORT, () => console.log('Server is up'));

});
