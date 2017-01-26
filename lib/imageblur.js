const gm = require('gm')

// Doesn't work as the directory doesn't exist anymore
// Keeping for future reference of settings mainly

const blurImages = () => {
  gm(`../public/img/bgcover/${process.argv[2]}.jpg`)
    .blur(10, 5)
    .write(`../public/img/bgcover/${process.argv[2]}.jpg`, (err) => {
      if (!err) {
        console.log('Background image has been succesfully blurred!')
      } else {
        console.log('Something went wrong with processing the background image. Are you sure the file exists?')
      }
    })
}

blurImages()
