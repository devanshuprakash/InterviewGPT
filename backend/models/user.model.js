import moongose from "mongoose";

const userSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  credits:{
    type: Number,
    default: 300,
  }
},{
  timestamps: true,
});            
const User = moongose.model("User", userSchema);

export default User;