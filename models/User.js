import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    passwordHash: {
        type: String,
        required: true
    },

    verified: {
        type: Boolean,
        default: false,
    },

    roles: [{type: String, ref: 'Role'}]
    
    },
    {
        timestamps: true
    }
    
    );

    export default mongoose.model('User', UserSchema);