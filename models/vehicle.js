import {model, Schema} from 'mongoose';
const vehicleSchema = new Schema({
    plate:{
        type: String,
        required: true,
        unique: true,
        minlenght: [5,'Min 5 characters'],
        maxlenght: [6,'Max 6 characters']
    },

    color:{

    type: String,
    required:[true,'Color is required'],
    minlenght: [3,'Min 3 characters'],

    },


    model:{
        type: Number,
        required: [true,'model is required'],

    }
    })

export default model('Vehicle',vehicleSchema, 'vehicle')