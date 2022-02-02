const mongoose = require('mongoose');
//require("dotenv").config();

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/ecommerceMe', {
	useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false

});

module.exports = mongoose.connection;