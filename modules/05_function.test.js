const templateGenerator = require('./05_function');

describe('Object module', () => {
  it('01 - Change from object to function', () => {
    expect(typeof templateGenerator).toEqual('function')
  })
  it('02 - Can receive arguments', () =>{
    const myTemplate = templateGenerator('Hello Boolean!');
    expect(myTemplate).toMatch(/(Boolean)/i)

    const myTemplateII = templateGenerator('Hello Tutelkan!');
    expect(myTemplateII).toMatch(/(Tutelkan)/i)
  })
})
