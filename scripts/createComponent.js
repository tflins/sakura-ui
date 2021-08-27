const args = require('minimist')(process.argv.slice(2))
const fs = require('fs')
const path = require('path')

const packagesDir = path.resolve(__dirname, '../packages')
