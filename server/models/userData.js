import mongoose from 'mongoose'

const userDataSchema = mongoose.Schema({
    userName: {
        type: 'String',
        required: true,
    },
    emailId: String,
    phnNo: String,
    applNo: String,
    education: {
        board: String,
        RegNo: String
    }
});

userDataSchema.index({ userName: 'text'})
const UserData = mongoose.model('UserData', userDataSchema)

export default UserData;