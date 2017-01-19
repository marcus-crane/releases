const searchClient = require('google-images')

let images = new searchClient(process.env.GOOGLE_CSE_ID, process.env.GOOGLE_API_KEY)

const searchImages = (title) => {
    return images.search(title, {
        size: 'large'
    })
}

module.exports = searchImages
