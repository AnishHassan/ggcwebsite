const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishListSchema = new Schema({
    name: {type : String, required : true},
    price: {type : String, required : true},
    category: {type : String, required : true}
},{
    timestamps : true
});


const wishlist = mongoose.model('wishListitem',wishListSchema);


module.exports  = wishlist;