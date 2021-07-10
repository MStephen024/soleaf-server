const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
})

module.export = mongoose.model('NewsFeed', newsSchema)
