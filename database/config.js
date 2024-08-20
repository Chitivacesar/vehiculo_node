import mongoose from 'mongoose'

export default async function dbConnection(){
    try{
        await mongoose.connect(process.env.MONGO_CNN,)
        console.log('connect to database')
    }catch(error){
        console.log ('Error')
    }
}
