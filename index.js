var colors = require('colors');

var wordCount = 0,
  WordCount = {
    hooks: {
      'init': function () {
        wordCount = 0;
      },

      'page:before': function (page) {
        if (page.content) {
          wordCount += page.content.split(' ').length;
        }
        return page;
      },

      'finish': function () {
        console.log('Completed counting with '.green + wordCount.toString().cyan + ' words.'.green);
      }
    }
  };

module.exports = WordCount;