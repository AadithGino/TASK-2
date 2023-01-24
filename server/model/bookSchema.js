const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    book:{type:String},
    name:{type:String},
    type:{type:String},
    size:{type:Number}
})

const model = mongoose.model("Book",bookSchema);
module.exports = model;