const mongoose = require('mongoose');
//require("dotenv").config();

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/ecommerce-template', {
	useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

module.exports = mongoose.connection;