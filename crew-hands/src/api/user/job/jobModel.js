const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({

    client: {
        type: String
    },
    category: {
        type: Array
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
    drivinglicense: {
        type: Array
    },
    jobcity: {
        type: String
    },
    jobplz: {
        type: Number
    },
    jobstreet: {
        type: String
    },
    jobstreetnumber: {
        type: Number
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
    jobstatus: {
        type: String
    },
    createdBy: {
        type: String
    }
});

module.exports = mongoose.model('Job', JobSchema);


