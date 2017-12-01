'use strict';

const config = {

  javascriptEnabled: false,
  //loadImages: false,
  //userAgent: "",
  //referer: "",

  // blockRequestReg: [],

  // mobileMode: false,
}

async function parser(buffer){
  const $ = require("cheerio").load(buffer.toString('utf-8'))

  return {
    result: {
      title: $("title").text()
    }
  }
}

module.exports = {
  config,
  parser,
}