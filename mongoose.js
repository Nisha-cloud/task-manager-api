const mongoose = require('mongoose')
require('dotenv').config()


// const { required } = require('nodemon/lib/config')
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    
    useCreateIndex: true
})


// const me = new  User({
//     name: 'Nisha',
//     email: 'nisharaitani19@gmail.com',
//     age: 7,
//     password: 'Raitani@n'

    
// })
// me.save().then(() => {
//     console.log(me)

// }).catch((error) => {
//     console.log('error', error)

// })
// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim:true
//     },
//     completed: {
//         type: Boolean ,
//         default: false

//     }
// })
// const t = new Task({
//     description: 'Done Assignment',
//     // completed: true
// })
// t.save().then(() => {
//     console.log(t)
// }).catch((error) => {
//     console.log('error', error)
// })