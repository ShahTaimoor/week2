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

// ! ====Crud Operation====

// Create Doc

// ! save()
const newUser = new User({
    username: 'Taimoor',
    age:20,
    birthday:new Date('2002-6-20'),
    isActive:true,
    hobbies: ['soccer','reading','coding'],
    address:{
        street:'dalazak',
        city:'l',
        postcode:3434
    },
    customData: {
        country: 'hi'
    }
})
// save document

// newUser
// .save()
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>console.log(err))


// ! create()

// User.create({
//     username: 'fahad',
//     age:20,
//     birthday:new Date('2002-6-20'),
//     isActive:true,
//     hobbies: ['soccer','reading','coding'],
//     address:{
//         street:'dalazak',
//         city:'l',
//         postcode:3434
//     },
//     customData: {
//         country: 'hi'
//     }
// }).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>console.log(err))

// !insertMany()


User.insertMany([
    
    {
    username: 'Uzair',
    age:20,
    birthday:new Date('2002-6-20'),
    isActive:true,
    hobbies: ['soccer','reading','coding'],
    address:{
        street:'dalazak',
        city:'l',
        postcode:3434
    },
    customData: {
        country: 'hi'
    }
},
  {
    username: 'afnan',
    age:20,
    birthday:new Date('2002-6-20'),
    isActive:true,
    hobbies: ['soccer','reading','coding'],
    address:{
        street:'dalazak',
        city:'l',
        postcode:3434
    },
    customData: {
        country: 'hi'
    }
},


  {
    username: 'Yasu',
    age:20,
    birthday:new Date('2002-6-20'),
    isActive:true,
    hobbies: ['soccer','reading','coding'],
    address:{
        street:'dalazak',
        city:'l',
        postcode:3434
    },
    customData: {
        country: 'hi'
    }
},





]).then((data)=>{
    console.log(data);
})
.catch((err)=>console.log(err))





app.listen(3000)