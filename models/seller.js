const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    cars:[{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]//one to many
});
module.exports = mongoose.model('seller',sellerSchema);