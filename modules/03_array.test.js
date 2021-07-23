const api = require('./03_array');

describe('Object module', () => {
  it('01 - Change from object to array', () => {
    expect(Array.isArray(api)).toEqual(true)
    expect(api.length).toEqual(4)
  })
})
