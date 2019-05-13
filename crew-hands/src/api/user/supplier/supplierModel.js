const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    firmname: {
        type: String
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String
    },
    address: {
        street: {
            type: String,
        },
        streetnumber: {
            type: Number,
        },
        ort: {
            type: String,
        },
        plz: {
            type: Number,
        }
    },
    telephone: {
        type: Number,
    },
    vatnumber: {
        type: Number,
    },
    hands: {
        type: Array
    },
    role: {
        type: String,
    },
    logo: String,
    versichert: String,
    docs: {
        type: Array
    },
    created: {
        type: Date,
        default: Date.now,
    },
    admin: {
        type: Boolean,
        default: false,
    }
});


module.exports = mongoose.model('Supplier', SupplierSchema);