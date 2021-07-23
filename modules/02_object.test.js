const api = require('./02_object');

describe('Object module', () => {
  it('01 - Extends de module "exports" object', () => {
    expect(typeof api).toEqual('object')
    expect(api.encoding).toEqual('UTF-8')
  })
})
