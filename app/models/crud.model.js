const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
    tittle:String,
    description:String
},{
    timestamps : true
});

module.exports = mongoose.model('Note', crudSchema);