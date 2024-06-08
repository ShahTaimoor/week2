const express = require('express')
const { default: mongoose, mongo } = require('mongoose')

const app = express()


const URL = 'mongodb://localhost:27017/Mongodb'

// connect mongodb

const connectDb = async ()=>{
try{
      await mongoose.connect(URL)
      console.log('mongodb connnected succesfully');
}catch(err){
    console.log(err);
}
}


// call the function

connectDb()

// ! Design Schema

const userProfileSchema = new mongoose.Schema({
    username: String,
    age: Number,
    birthday: Date,
    isActive: Boolean,
    hobbies: [String],
    objectId : mongoose.Schema.Types.ObjectId,
    address: {
        street: String,
        city: String,
        postcode: Number
    },
    customData: mongoose.Schema.Types.Mixed
})


// ! Compile the schema to form the model

const User = mongoose.model('user',userProfileSchema)





app.listen(3000)