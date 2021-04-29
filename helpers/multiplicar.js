const fs = require('fs')
require('colors')

const createFile = async (base = 5, listar, hasta = 10) => {
  let output = ''

  try {
    for (let i = 1; i <= hasta; i++) {
      output += `${base} x ${i} = ${base * i}\n`
    }
    fs.writeFileSync(`./output/tabla-${base}.txt`, output)

    if (listar) print(base, output)

    return `tabla-${base}.txt`
  } catch (error) {
    throw error
  }
}

const print = (base, output) => {
  console.log('================='.green)
  console.log(`Tabla del ${base}`)
  console.log('================='.green)
  console.log(output)
}

module.exports = {
  createFile,
}
