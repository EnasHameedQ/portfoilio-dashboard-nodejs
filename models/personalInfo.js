const mongoose = require("mongoose");

const Sechema = mongoose.Schema;
// create an schema
var personalInfoSchema = new Sechema({
        person_name: {
            type: String,
            required: true
        },
        person_country: {
            type: String,
            required: true,
        },
        person_phone_number: {
            type: Number,
            required: true,
        },

        person_birthdate: {
            type: String,
            required: true,
        },
        person_email: {
            type: String,
            required: true,
        },
        person_maijor: {
            type: String,
            required: true,
        },
        person_exp_years: {
            type: Number,
            required: true,
        },
    }, {
        timestamps: true
    }

);

var personalInfoModel = mongoose.model('personalInfo', personalInfoSchema);

module.exports = personalInfoModel;