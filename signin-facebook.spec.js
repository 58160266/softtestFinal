function SimpleApp(service){

  //save service value for know value return in mock service
  this.service = service

  this.echo = () => {
                // function jest.fn()
    var greet = this.service()
    //return "Hello world!"
    return `Hello ${greet}!`
  }
}


// simple mock
test('Simple Mock',() => {
  // call library
  const mockFn = jest.fn()
      .mockReturnValue('world')

  var app = new SimpleApp(mockFn)

  var result = app.echo()

  // check mockFn be used
  expect(mockFn).toHaveBeenCalled()
  expect(result).toBe('Hello world!')
})
