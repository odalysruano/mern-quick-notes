const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: {type: String, timestamps: true, required: true},
    user:{type: Schema.Types.ObjectId, ref: "User", required: true},
});

module.exports = mongoose.model('Note', noteSchema);
