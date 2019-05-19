const mongoose = require('mongoose');

const LogoSchema = new mongoose.Schema({
    img:
        { data: Buffer, contentType: String }
});

module.exports = mongoose.model('Logo', LogoSchema);


