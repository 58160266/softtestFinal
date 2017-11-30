const express = require('express')
const bodyParser = require('body-parser')
const app = express() //

app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())
//จำลองฐานข้อมูล
let students = [
    {id : '1',fullname : 'Panumas Makaew',email : "yo@mail.com"},
    {id : '2',fullname : 'Nattanich Tumsamut',email : "mook@mail.com"}
  ]


app.get('/greeting', (req,res) => {
  res.json({ message : 'Hello!'})
})

app.get('/students' , (req,res) => {
    res.json(students)
})

app.post('/students',(req,res) => {
    let student = req.body
    students.push(student)
    res.json(student)
})



module.exports = app
