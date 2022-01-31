const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const paTag = new Schema({
	product_id:{
        type:ObjectId,
        ref:"Product"
    },
    tag_id:{
        type:ObjectId,
        ref:"Tag"
    }
});

const pTag = mongoose.model('pTag', paTag);

module.exports = pTag;