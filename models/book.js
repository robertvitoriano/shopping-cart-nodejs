let mongoose = require('mongoose')
let Schema = mongoose.Schema;// para especificar um novo schema(tabela de dados)
//schema is the mold my models will have
let bookSchema = new Schema({
    title:{type:String,required:true},
    price:{type:String,required:true},
    stock:{type:Number,require:true},
    author:{type:String,required:true}

});

//model name:books is going to be the collection name
const book =  mongoose.model('books',bookSchema)
module.exports=book;// Exportando para uma collection chamada 'books'


