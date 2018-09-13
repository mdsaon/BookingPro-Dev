const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema(it is to define the type of the input fields for eg. input field should be string typea and required or not. )

const ItemSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model("item" , ItemSchema);