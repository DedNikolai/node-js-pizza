import mongoose from "mongoose";

const PizzaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    weight: {
        type: Number,
        required: true
    },

    types: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    },
    
    {
        timestamps: true,
    }
    
);

export default mongoose.model('Pizza', PizzaSchema);

