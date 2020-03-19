const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartBookSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true
    },
    stock:{
        type:String,
        require:true
    }
})

const cartBook = mongoose.model('cartbooks',cartBookSchema);

module.exports = cartBook;