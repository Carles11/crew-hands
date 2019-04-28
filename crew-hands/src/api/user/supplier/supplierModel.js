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
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
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
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    hands:[{ 
        firstName: String, 
        lastName: String, 
        userName: String, 
        address: String, 
        city: String, 
        plz: Number, 
        email: String, 
        telephone: Number, 
        aboutMe: String,
        avatar: {
            src: {
                type: String,
            }
        },
        category: {
            type: Array
        },
        drivingLicense: {
            type: Array
        },
        insurance:{
            type: Array
        },
        documents:[{
            items: [{
                title: {
                    type: String,
                },
                url: {
                    type: String,
                    required: true,
                },
            }],
        }],
    }]
});


module.exports = mongoose.model('Supplier', SupplierSchema);