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
