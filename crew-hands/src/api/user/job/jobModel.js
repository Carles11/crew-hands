const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({

    client: {
        type: String
    },
    jobtitle: {
        type: String
    },
    categorytontechnik: {
        type: Boolean
    },
    categorylichttechnik: {
        type: Boolean
    },
    categoryrigging: {
        type: Boolean
    },
    categorystagehand: {
        type: Boolean
    },
    categoryvideotechnik: {
        type: Boolean
    },
    categorymessebau: {
        type: Boolean
    },
    date: {
        type: Date
    },
    starttime: {
        type: String
    },
    endtime: {
        type: String
    },
    drivingpkw: {
        type: Boolean
    },
    drivinglkw7: {
        type: Boolean
    },
    drivinglkw14: {
        type: Boolean
    },
    drivingstappler: {
        type: Boolean
    },
    drivingsteiger: {
        type: Boolean
    },
    street: {
        type: String,
    },
    streetnumber: {
        type: Number,
    },
    city: {
        type: String,
    },
    zipcode: {
        type: Number,
    },
    jobcontact: {
        type: String
    },
    jobcontactphone: {
        type: Number
    },
    hourrate: {
        type: Number
    },
    mincall: {
        type: Number
    },
    proof: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now,
    },
    jobstatusconfirmed: {
        type: Boolean
    },
    jobstatuscancelled: {
        type: Boolean
    },
    jobstatuspendent: {
        type: Boolean
    },
    createdBy: {
        type: String
    }
});

module.exports = mongoose.model('Job', JobSchema);


