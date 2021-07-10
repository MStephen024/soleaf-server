const express = require('express')
// const passport = require('passport')
// const Example = require('../models/example')
// const customErrors = require('../../lib/custom_errors')
// const handle404 = customErrors.handle404
// const requireOwnership = customErrors.requireOwnership
// const removeBlanks = require('../../lib/remove_blank_fields')
// const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()
let Parser = require('rss-parser')
let parser = new Parser()

const feedArr = [
  'http://feeds.bbci.co.uk/news/world/rss.xml',
  'https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/section/world/rss.xml',
  'https://www.buzzfeed.com/world.xml'
  // 'http://www.aljazeera.com/xml/rss/all.xml',
  // 'https://defence-blog.com/feed/',
  // 'https://www.globalissues.org/news/feed'
]

router.get('/news', (req, res, next) => {
  feedArr.forEach(e =>
    parser.parseURL(e)
      .then((data) => res.send(data.items))
      .catch(next)
  )
})

// if e.link matches grouped key, push data.items[i], else create new or nothing.

// let grouped = {}
// feedArr.forEach((e, i) =>
//   // for each news rss link, parse it into objects of their data.
//   parser.parseURL(e)
//     // data = the objects(~25) containing the data after rssparsed.
//     // THESE NEED TO BE INDIVIDUAL OBJECTS IN 1 ARRAY.
//     .then(data => {
//       // allSources.push(data.items[0])
//       console.log('~~~~~STARTS HERE: ', data.items.concat(data.items[i]), '~~~~~ENDS HERE!')
//     })
//     .catch(next)
// )

// await feedArr.forEach((e, i) =>
//   parser.parseURL(e)
//     .then(data => {
//       // allSources.push(data.items[0])
//       console.log(i, data.items)
//     })
//     .catch(next)
// )
// console.log('THIS IS ALL SOURCES: ', grouped)

// function groupBy2(feedArr, prop) {
//   var grouped = {};
//   for (var i=0; i<feedArr.length; i++) {
//     var p = feedArr[i][prop];
//     if (!grouped[p]) { grouped[p] = []; }
//     grouped[p].push(feedArr[i]);
//   }
//   return grouped;
// }

// (async () => {
//   let feed = await parser.parseURL('https://www.reddit.com/.rss')
//   console.log(feed.items)
//
//   // feed.items.forEach(item => {
//   //   console.log(item.title + ' : ' + item.link)
//   // })
// })()

module.exports = router
