const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
// const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
})

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
  
        // secret , salt => sdkfhsdkfh , secret + sdkfhsdkfh => dskfgkcskdfgsdkfsdf
        // salt
        // hashing rounds =>
    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
  });

  userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };


module.exports = mongoose.model('User', userSchema)