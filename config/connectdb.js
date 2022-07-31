import mongoose from 'mongoose';

const connectdb = () => {
    mongoose.connect(process.env.MONGO_URI,{
                useUnifiedTopology:true,
                useNewUrlParser:true,
            })
            .then(() => console.log('MongoDB connnected'))
            .catch((err) => console.log('Error occured ' + err))
}

export default connectdb