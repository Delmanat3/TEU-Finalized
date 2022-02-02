const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Schema = mongoose.Schema;


const tagSchema = new Schema({
	name: {
		type: String,
	}

});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;