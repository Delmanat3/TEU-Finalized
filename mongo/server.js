const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const db = require('./config/connection');
const path = require('path');

const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const {authMiddleware} = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware 
});

app.use(logger('dev'));

server.applyMiddleware({ app });

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
  }

  let protected = ['App.css', 'favicon.ico']

  app.get("*", (req, res) => {
  
	let path = req.params['0'].substring(1)
  
	if (protected.includes(path)) {
	  // Return the actual file
	  res.sendFile(`${__dirname}/build/${path}`);
	} else {
	  // Otherwise, redirect to /build/index.html
	  res.sendFile(`${__dirname}/build/index.html`);
	}
  });
  
//* set up server to listen on port and open connection to graphql
db.once('open', () => {
	app.listen(PORT, () => {
		console.log(`App running on port ${PORT}!`);
		console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
	});
});
