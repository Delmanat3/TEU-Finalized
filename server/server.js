const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const logger = require('morgan');
const path = require('path');
// const cors = require("cors");
// import 
//sequelize connection

const app = express();
var corsOptions = {
  origin: "http://localhost:3001"
};
// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// };

//app.use(allowCrossDomain);
// app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));

app.use(routes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
  }

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/public/index.html'));
});
// app.get('/api', (req, res) => {
// 	res.sendFile(path.join(__dirname, './routes/index'));
// });
const PORT = process.env.PORT || 3001;

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  //require("./routes/index.js")(app);
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});

