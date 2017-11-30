function SimpleApp(service){

  //save service value for know value return in mock service
  this.service = service

  this.echo = (nickname) => {
                // function jest.fn()
    var firstname = this.service(nickname)
    //return "Hello world!"
    return `Hello ${firstname}!`
  }
}


// simple mock
test('Simple Mock',() => {
  // call library
  const mockFn = jest.fn()
      .mockReturnValue('panumat')

  var app = new SimpleApp(mockFn)
  var nickname = 'yo'
  //สมมุติเราลองส่งชื่อไป
  var result = app.echo(nickname)

  // check mockFn be used
  expect(mockFn).toHaveBeenCalled()
  expect(mockFn).toHaveBeenCalledWith(nickname)
  expect(result).toBe('Hello panumat!')
  //expect(result).toEqual('Hello panumat!')
})


function BuuAuthen(service){
  this.service = service

  this.signIn = (username,password) =>{
    var obj = service(username,password)
    return {
          name : obj.nickname,
          token : '000889'
          }
  }
}


test('Sign-in with Facebook',()=>{
  const object = {
    nickname : "yo" ,
    phone : 12345667,
    email : "zaza@go.buu.ac.th"
  }
  const mockBuuAuth = jest.fn("Panumat","123456")
      .mockReturnValue(object)
  var auth = new BuuAuthen(mockBuuAuth)

  var username = "Panumat"
  var password = "123456"
  var accouthInfo = auth.signIn(username,password)

  expect(accouthInfo.name).toBe("yo")
  expect(accouthInfo.token).toBe('000889')
  expect(mockBuuAuth).toHaveBeenCalledWith(username,password)
  expect(mockBuuAuth).toHaveBeenCalled()
  expect(accouthInfo).toHaveProperty('token')
  expect(accouthInfo.token).toHaveLength(6)

})
