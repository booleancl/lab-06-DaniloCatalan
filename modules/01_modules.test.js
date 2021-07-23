const simpleModule = require('./01_modules')

describe('Basic module', () => {
  it('01 - Javascript gives arguments when loading modules', () => {    
    expect(simpleModule).toEqual({ a: 'a'})
    expect(simpleModule.a).toEqual('a')
  })
  it('02 - Local variables are not accesible outside of the module', () => {
    expect(simpleModule.b).toBe(undefined)
  })
})
