const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Schema Set Up
const brandSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    brandCategory: {type: String, required: true, default: "Personal"},
    socials: {type: [String], default: ["https://www.instagram.com/"]},
    typographyOne: {type: [String], default: ["Times New Roman"]},
    typographyTwo: {type: [String], default: ["Times New Roman"]},
    colorsOne: {type: String, default: "f5e7e0"},
    colorsTwo: String,
    colorsThree: String,
    brandValues: [String],
    logoImage: String,
    moodboardImage: String,
    notesEntry: [String],
});

//Collection name
const brandData = mongoose.model('brandData', brandSchema);

//make this exportable to be accessed in `app.js`
module.exports = brandData;
