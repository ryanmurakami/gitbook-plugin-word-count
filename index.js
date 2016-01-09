var colors = require('colors'),
  _ = require('lodash');

var wordCount = 0,
  sanitizer = /\#{1,6}|`{3}|\d+\./g,
  wordRegex = /\b[\w\d\?><;,\{\}\[\]\-_\+=!@\#\$%^&\*\|\']+\b/g,
  WordCount = {
    countWords: function (content) {
      var sanitizedContent = content.replace(sanitizer, ''),
        contentArr = _.words(sanitizedContent, wordRegex);

      return contentArr.length;
    },
    hooks: {
      'init': function () {
        wordCount = 0;
      },

      'page:before': function (page) {
        if (page.content) {
          wordCount += WordCount.countWords(page.content);
        }
        return page;
      },

      'finish': function () {
        console.log('Completed counting with '.green + wordCount.toString().cyan + ' words.'.green);
      }
    }
  };

module.exports = WordCount;