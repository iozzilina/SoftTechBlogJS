const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    email: {type: String, requires: true, uniqie: true},
    passwordHash: {type: String, required: true},
    fullName: {type : String, required: true},
    salt: {type: String, required: true}
});

userSchema.method({
    authenticate: function (password){
        let inputPassword = encryption.hashPassword(password, this.salt);
        let isSamePasswordHash = inputPassword === this.passwordHash;

        return isSamePasswordHash;
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

