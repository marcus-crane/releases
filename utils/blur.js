const fs = require('fs')
const gm = require('gm')

const blurImages = () => {
    gm(`../public/img/bgcover/${process.argv[3]}.jpg`)
    .blur(10, 5)
    .write(`../public/img/bgcover/${process.argv[3]}.jpg`, (err) => {
        if (!err) {
            console.log('Background image has been succesfully blurred!')
        } else {
            console.log('Something went wrong with processing the background image. Are you sure the file exists?')
        }
    })
}

module.exports = blurImages