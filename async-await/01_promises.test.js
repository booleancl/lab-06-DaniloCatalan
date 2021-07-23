const {
  simplePromise,
  simpleAsyncAwait,
  notSoSimpleAsyncAwait,
} = require('./01_promises')

describe('Promises with async await', () => {

  it('01 - Simple promise', async () => {
    const returnValue = await simplePromise()
    expect(returnValue).toEqual('success value')
  })

  it('02 - Simple async-await', async () => {
    const returnValue = await simpleAsyncAwait()
    expect(returnValue).toEqual('success value')
  })

  it('03 - Not so simple async-await', async () => {
    const returnValue = await notSoSimpleAsyncAwait()
    expect(returnValue).toEqual(14242)
  })
})
