const { createFile } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

createFile(argv.b, argv.l, argv.h)
  .then((fileName) => console.log(fileName, 'created'))
  .catch((err) => console.error(err))
