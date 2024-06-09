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

// const newUser = new User({
//     username: 'Taimoor',
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
// })
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


// User.insertMany([
    
//     {
//     username: 'Uzair',
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
// },
//   {
//     username: 'afnan',
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
// },


//   {
//     username: 'Yasu',
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
// },





// ]).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>console.log(err))


// ! Read Operation

// !find()

// User
// .find()
// .then((data)=>{
//      console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// !findOne()


// User
// .findOne({
//     age:26
// })
// .then((data)=>{
//      console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// !findById()

// User
// .findById('666464985117f720c762f5a4')
// .then((data)=>{
//      console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// !where()

// const findUser = async ()=>{
//     try{
//         const users = await User.find().where('age').gte(20)
//         console.log(users);
//     }catch(e){
//         console.log(e);
//     }
// }

// findUser()

// ! sort()  limit()


const findUser = async ()=>{
    try{
        const users = await User.find().where('age').gte(20).sort({username:1}).
        limit(1)
        console.log(users);
    }catch(e){
        console.log(e);
    }
}

findUser()





app.listen(3000)