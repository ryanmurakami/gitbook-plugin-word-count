# gitbook-plugin-word-count v0.2

### A word counting plugin for Gitbook

It's still a bit naive, but this will count all the words in your gitbook. 

It currently excludes most [normal](https://daringfireball.net/projects/markdown/syntax) Markdown syntax, but still hasn't been widely tested. If you have code in your project, it will likely inflate the number of words in your book.

I'll be working on updates to make the output more verbose, exclude code, and some more things.

## Installation

Add to your book.json plugins array

```json
{
	"plugins": ["word-count"]
}
```

Then install with gitbook-cli

```sh
$ gitbook install
```

