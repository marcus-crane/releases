# Releases (http://releases.thingsima.de)

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/marcus-crane/releases/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/marcus-crane/releases/?branch=master)

## Table of Contents

1. [What's this?](#what's-this)
2. [What do I need to run it?](#what-do-i-need-to-run-it)
3. [Can I use Docker?](#can-i-use-docker)


### What's this?

I was recently wondering what games were coming up and it's such an annoying process.

Specifically, I wished the sites were

- Single serving
  - In the case of game journalism sites, release dates took the form of a wiki site or a blog post which wasn't the most efficient layout
  - More "traditional" sites like Metacritic could take a lot of clicking to get the information I wanted. They primarily served other functions and keeping upcoming titles updated wasn't their focus
- Easy to parse both visually and technically
  - There's a number of lists that may be hugely comprehensive, like Giant Bomb, but there's almost too much data. It's hard to just glimpse at the information and be done.
  - While Giant Bomb has an API, other sites just serve up plain HTML which can be a pain in the ass for requesting that data for other uses
- Up to date
  - Giant Bomb is great for this sorta stuff
  - Wiki/blog post sites can take a long time to get updated with new titles.
  - Publishers may push back dates or outright cancel games leading to confusion as to what dates are correct!

I had felt like this for a long time but finally got around to forming my own answer to this problem recently.

It was just meant to be a simple side project but I started to use it personally so I've been adding more and more to it in between searching for my first proper development job.

It's also a good testing ground for trying out new things I wouldn't otherwise have any reason to eg; any of the [V3 milestones](https://github.com/marcus-crane/releases/milestone/3).

### What do I need to run it?

At the moment, all you need is a Giant Bomb API Key which you can pick up [here](http://www.giantbomb.com/api/) and a Postgres database.

You'll then want to create a `.env` file with the key `GIANT_BOMB_API_KEY={key_goes_here}` or rename `example.env`.

Eventually, I plan to add the ability to choose the background on-site when adding a new title and when I do, you'll likely need a Google Custom Search Engine key and general API key.

### Can I use Docker?
