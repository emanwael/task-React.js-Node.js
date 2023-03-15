const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({

    valid: Boolean,
    number: String,
    local_format: String,
    international_format: String,
    country_prefix: String,
    country_code: String,
    country_name: String,
    location: String,
    carrier: String,
    line_type: String,

})

const historyModel = mongoose.model('history', historySchema);

module.exports = historyModel;