const expect = require('expect')

const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

const truth = true


describe('index', () => {

  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })


  it('runs', () => {
    expect(truth).toEqual(true)
  })
})
