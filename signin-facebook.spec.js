function SimpleApp(service){

  //save service value for know value return in mock service
  this.service = service

  this.echo = () => {
    var greet = this.service

    return `Hello world!`
  }
}


// simple mock
test('Simple Mock',() => {
  // call library
  const mockFn = jest.fn()

  var app = new SimpleApp(mockFn)

  var result = app.echo()

  expect(result).toBe('Hello world!')
})
