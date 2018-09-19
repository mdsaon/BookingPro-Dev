const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema(it is to define the type of the input fields for eg. input field should be string typea and required or not. )

const SignUpSchema = new Schema({
    firstName: {
        type:String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        required: true
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        required: true
    },
    phone: {
        type: String,
        optional: true
    },
    email: {
        type: String,
        label: "email",
        required: true
    },
    password: {
        type: String,
        label: "Password",
        min: 6
    },
    passwordConfirmation: {
        type: String,
        min: 6,
        label: "Password Confirmation",
        custom: function() {
          if (this.value !== this.field('password').value) {
            return "passwordMissmatch";
          }
        },
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
});

module.exports = SignUpInfo = mongoose.model("SignUpInfo" , SignUpSchema);