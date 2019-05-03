const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    firmname: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    email: { 
        type: String, 
        required: true, 
        unique: true },
    street: {
        type: String,
    },
    streetNr: {
        type: Number,
    },
    ort: {
        type: String,
    },
    plz: {
        type: Number,
    },
    telephone: {
        type: Number,
    },
    vatNumber: {
        type: Number,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    logo: String,
    hands:{
        type: Array
    }
});


module.exports = mongoose.model('Supplier', SupplierSchema);