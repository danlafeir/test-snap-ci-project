var assert = require('assert')
var names = require('./app')

describe("names", function() {
  it("has akon's last name", function() {
    assert.equal(names.akon, 'ngoh')
  })

  it("has dan's last name", function() {
    assert.equal(names.dan, 'lafeir')
  })
})
