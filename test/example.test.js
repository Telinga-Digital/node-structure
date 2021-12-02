const build = require('../app')
const app = build()
const sinon = require('sinon')
const expect = require('chai').expect

describe("Example Testing", () => {
  afterEach(() => {
    sinon.restore()
  })

  it("Should return working API", async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/v1'
    })

    const body = JSON.parse(response.body)

    expect(response.statusCode).to.equal(200)
    expect(body.message).to.equal('API Works!')
  })
})