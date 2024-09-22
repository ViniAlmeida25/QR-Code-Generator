const fs = require('node:fs/promises')
const prompt = require('prompt-sync')()
const qr = require('qr-image')



const urlName = prompt('Qual o nome do arquivo que você vai criar? ')
const url = prompt('Qual o link que vocêr quer transformar em QR Code? ')
const qrImg = qr.image(`${url}`, {type: 'png'})
qrImg.pipe(require('fs').createWriteStream(`${urlName}.png`))

fs.writeFile(`${urlName}.txt`, `${url}`, (error) => {
  if(error) throw error
  console.log("Criado com sucesso")
})
