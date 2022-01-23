const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Decimal = Schema.Types.Decimal128;

let SmartphoneSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        min: 2, max: 180
    },
    brand: {
        type: String, 
        required: true
    },
    image: { 
        type: String
    },
    price:  {
        type: Decimal,
        required: false
    },
    release:{
        type: Number,
        required: false
    }
}, { timestamps: true });


// Export model
module.exports =  mongoose.model(
    'Smartphone', 
    SmartphoneSchema
);