const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    to_do:{
        type: String,
        required: true
    }
});

const contact = module.exports = mongoose.model('Contact', ContactSchema);