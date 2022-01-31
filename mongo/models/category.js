const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const catSchema = new Schema({
	cat_name: {
		type: String,
    }
	// },
	// description:{
	// 	type:Object,
	// },
	// links:[{
	// 	type:Object,
	// }],
	// coinId:{
	// 	type:String
	// },
	// images:[{
	// 	type:String,
	// }],
	// price:[{
	// 	type:Object,
	// }],
	// supply:{
	// 	type:String
	// },
	// date_added: {
    //     type: Date,
    //     default: Date.now,
	// 	get: (timestamp) => dateFormat(timestamp)
    // }
});

const Category = mongoose.model('Category', catSchema);

module.exports = Category;