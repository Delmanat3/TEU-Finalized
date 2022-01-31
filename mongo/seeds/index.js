const { Product,Tag,pTag,Category } = require('../models');
const db = require('../config/connection');
const productSeeds=require('./product-seeds');
const categorySeeds=require('./category-seeds');
const ptagSeeds=require('./product-tag-seeds');
const tagSeeds=require('./tag-seeds');

db.once('open',async()=>{
    try{
await Product.deleteMany({});
await Tag.deleteMany({});
await Category.deleteMany({});
await pTag.deleteMany({});

await Product.create(productSeeds);
await Category.create(categorySeeds);
await pTag.create();
await Tag.create(tagSeeds);


console.log('all done!');
process.exit(0);
} catch (err) {
throw err;
}
})
