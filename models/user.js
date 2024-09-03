
import { Schema, model}  from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required:[ true, 'Email is required'],
        unique: [true, 'Email already exists'],
        minlength: [10, 'Email must be at least 10 characters long'],

    },
    password: {
        type: String,
        required:[ true, 'Password is required'],
       
    }
});

export default model('User', userSchema);