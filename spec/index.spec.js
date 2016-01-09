var WordCount = require('../index.js');

describe('Word Count', function () {
  var counter = WordCount.countWords;

  it('should calculate the right words-short', function () {
    var words = 'This is four words.';

    expect(counter(words)).toEqual(4);
  });

  it('should calculate the right words-long', function () {
    var words = 'This is going to be a long-ish string to make sure the number of words is being counted correctly.';
    
    expect(counter(words)).toEqual(19);
  });

  it('should handle double spaces fine', function () {
    var words = 'Here  are   double and    triple      spaces.';

    expect(counter(words)).toEqual(6);
  });

  it('should ignore hashes', function () {
    var words = '# This is a header. ### This is a sub-header.';

    expect(counter(words)).toEqual(8);
  });

  it('should handle hyphenated words and contractions', function () {
    var words = 'these a\'re so-me pos\'sible wo-rds';

    expect(counter(words)).toEqual(5);
  })

  it('shouldnt count code blocks', function () {
    var words = '``` this is some code ```';

    expect(counter(words)).toEqual(4);
  });

  it('shouldnt count line breaks', function () {
    var words = '========= -------- - - - - * * * * *****';

    expect(counter(words)).toEqual(0);
  });

  it('shouldnt count block quotes, lists', function () {
    var words = '> > > * + - 1. 2. 3. 4.';

    expect(counter(words)).toEqual(0);
  });
});