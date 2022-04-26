const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.static.userExist = async function (userId) {
    if (!userId) throw new Error('Invalid userId')
    try {
        const user = await this.findOne({ userId })
        if (user) return false
        return true;
    } catch (error) {
        console.log('error userExist', error.message);
        return false
    }

}

module.exports = mongoose.model('User', userSchema)