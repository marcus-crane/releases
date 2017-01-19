# Releases (http://releases.thingsima.de)

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/marcus-crane/releases/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/marcus-crane/releases/?branch=master)

## Table of Contents

1. [What's this?](#what's-this)
1. [What do I need to run it?](#what-do-i-need-to-run-it)
1. [What features are you planning on adding?](#what-features-are-you-planning-on-adding)
1. [Can I use Docker?](#can-i-use-docker)


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

### What features are you planning on adding?

You can see what I'm considering adding under the [Issues](https://github.com/marcus-crane/releases/issues) and what I'm working on adding/about to work on under the [Projects](https://github.com/marcus-crane/releases/projects/2) tab.

### Can I use Docker?

Sure, I use Docker for the production database and it was a pain in the butt to set up (initially) so here's a walkthrough for both of us.

You'll need to pull a Postgres image from the Docker repository and check that you've got the right ports.

You should have `5432` as the internal port and anything you like as the external Docker port.

**NOTE**: If you're using macOS, I can recommend using Kitematic which has a nice UI. The following are terminal instructions though for those who might be deploying on a headless server

With the Docker image pulled, you'll want to run it, binding `32768` in this case, to `5432`.

This means any requests we make to the database will need to hit Port `32768`, which you can see reflected in the development settings for knexfile.js.

You can probably bind `5432` to `5432` but if you actually have a real install as well, you'll likely overwrite requests to it or cause a clash.

```
docker run -d -p 5423:32768 postgres
docker ps
```

You should see something like this

| CONTAINER ID | IMAGE    | COMMAND                | CREATED        | STATUS        | PORTS                             | NAMES           |
| ------------ | -------- | ---------------------- | -------------- | ------------- | --------------------------------- | --------------- |
| 18e167d5fc61 | postgres:latest | "/docker-entrypoint.s" | 3 weeks ago | Up 8 hours | .0.0.0:32768->5432/tcp | postgres |

Now that we have our container running, we'll need to actually create the database so that Knex can upload our migration tables and seed files.

```
docker exec -it {name} bash
```

`{name}` in this case is the name in the table above so for me, it would be `postgres`

You should see a bash shell within the docker container waiting for you to enter something so connect to postgres with the postgres user (or another user if you want to make one)

```
root@18e167d5fc61:/# psql -U postgres
psql (6.9.1)
Type "help" for help

postgres=#
```

Let's now create the database itself

```
postgres=# CREATE DATABASE releases;
```

and connect to see that we've made it properly

```
postgres=# \c releases
You are now connected to database "releases" as user "postgres".
```

Now all we've got left to do is install Knex if you haven't done so (`npm install knex -g`) and run the migrations and seeds

```
knex migrate:latest
knex seed:run
```

If you get a `Connection Refused` error, make sure that you're specifying the correct port in `knexfile.js` or check that the container is running Kitematic.

Mine stops after each restart and doesn't restart automatically on bootup.
