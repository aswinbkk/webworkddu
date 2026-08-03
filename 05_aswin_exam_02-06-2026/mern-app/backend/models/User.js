import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true,
  },
  hobbies: {
    type: [String],
    required: true
  },
  address: {
    type: String,
    required: true
  }

}, { timestamps: true });

const User = mongoose.model ("User",userSchema);
export default User