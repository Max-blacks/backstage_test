// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// const axios = require('axios');

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  // cms
  // api.loadSource(async ({ addCollection }) => {
  //   const collection = addCollection('Stack');

  //   const { data, status } = await axios.get('http://172.30.1.130:1337/stacks?_sort=published_at:DESC');

  //   for (const item of data) {
  //     collection.addNode({
  //       id: item.id,
  //       title: item.title,
  //       date: item.date,
  //       author: item.author,
  //       summary: item.summary,
  //       content: item.content,
  //       path: `/blog/${item.id}`,
  //       published_at: item.published_at
  //     })
  //   }
  // })
}
