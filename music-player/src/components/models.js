const mongoose = require('mongoose')

var songSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  albumArt: {
    type: String,
    required: true
  }
})

var Song = mongoose.model('Song', songSchema)

module.exports = songSchema
