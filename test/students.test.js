const test = require('tape')
const app = require('../server')
const request = require('supertest') // ออกแบบมาเพื่อ test express โดยเฉพาะ

test('First test case',(t)=> {
  t.equal(1,1)
  t.end()
})



// test call request in express app
test('GET /students',(t) =>{
    //บรรทันนี้เหมือนเราใช้ postman
    //open browser type automate
          //server หรือ domain
                //action // resources
    request(app).get('/students')
    //ในทุกครั้งจะมี http status บอก ถ้าทำงานผ่าน http protocal
    //  $ curl -I http://localhost:3001/students ลองใน git bash จะมีบอก status
    .expect(200) // success
    .then((res) =>{ // จบการ test
      let students = res.body // ส่งค่ากลับมาเป็นlist
      t.equal(2,students.length)
      let student = students[0]
      //ตรวจสอบเชิงโครงสร้าง
      t.notEqual(undefined, student.id) // มีค่า property id หรือป่าว //ถ้ามันมีค่าจริงๆมันจะไม่ undefined
      t.end() //close connection ไม่งั้นมันจะเปิดทิ้งไว้
    })


})

//หกติในการทำ web API คนเขียนต้องมีการกำหนด http status code ในกรณีต่างๆ
//ผ่านเรียนได้อะไร // ไม่ผ่านเรียกได้อะไร
//เพราะคนเอาไปใช้ต่อจะได้รู้ว่าเรียกสำเร็จไหม หรือทำโปรแกรมของเขาผิด
