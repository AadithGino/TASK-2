const mongoose = require("mongoose");

const journalSchema = mongoose.Schema({
    journal:{type:String},
    name:{type:String},
    type:{type:String},
    size:{type:Number}
})

const model = mongoose.model("Journal",journalSchema);
module.exports = model;