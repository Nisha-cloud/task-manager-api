const express = require('express')
require('./mongoose')
const User = require('./src/models/user')
const Task = require('./src/models/task')
const userRouter = require('./src/routers/user')
const taskRouter = require('./src/routers/task')
 require('dotenv').config()

// const res = require('express/lib/response')


const app = express()
const port = process.env.PORT 






// app.use((req,r es,next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }
//     else{
//         next() 
//     }
// })

// app.use((req,res,next) => {
//     res.status(503).send('Site is currently down. Check back soon!')

// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const myFunction = async() => {
//     // const password = 'Redcarpet123'
//     // const hashedPassword = await bcrypt.hash(password, 8)
//     // console.log(password)
//     // console.log(hashedPassword)

//     // const isMatch = await bcrypt.compare('redcarpet',hashedPassword)
//     // console.log(isMatch)
//     const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', { expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }
// myFunction()

// const Task = require('./models/task')
// const User = require('./models/user') 



// const main = async () => {
//     const user = await User.findById('628ff1de88a75f0b10dde0b7')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()
