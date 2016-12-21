const fs = require('fs')
const gm = require('gm')

gm('../public/img/image.jpg')
.blur(10, 5)
.write('../public/img/image.jpg', (err) => {
    if (!err) {
        console.log('Blurred!')
    }
})
