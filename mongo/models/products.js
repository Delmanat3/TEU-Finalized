const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const productSchema = new Schema({
	product_name: {
		type: String,
	},
	price:{
		type:String,
	},
	stock:{
		type:Number,
	},
	cat_id:{
		type:ObjectId,
        ref:"Category"
	}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;