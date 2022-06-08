import mongoose from 'mongoose'
import config from 'config'
const db = config.get('mongoURI')

mongoose.connect(db)

const connectDB = async () => {
    try {
        await mongoose.connect(db)
        console.log('Mongoose Connected')
    } catch (err) {
        console.error(err.message)
    }
}

export default connectDB