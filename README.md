# VGDates ~ Backend Server

## Table of Contents

1. [What is this?](#what-is-this)
1. [What do I need to run it?](#what-do-i-need-to-run-it)
1. [What features are you planning on adding?](#what-features-are-you-planning-on-adding)
1. [Can I contribute?](#can-i-contribute)


## What is this?

You can read about what this project is meant to be [here](https://github.com/vgdates/planning) in the planning repo. There's still quite a bit of documentation missing seeing as it's all in my head!

This is the backend part of VGDates side project.

## What do I need to run it?

Currently, all you need is your own `keys.env` file and a MongoDB instance.

You can find an example file (`keys.example.env`) that you can fill in yourself.

It requires the following values:

```js
NODE_ENV= // At the moment, this is always just DEVELOPMENT by default
DATABASE= // A MongoDB database where the connection string looks like so: mongodb://localhost:{port}/vgdates
SECRET= // A secret for the Express cookie, This can be anything you like.
KEY= // A key for the Express cookie. This can be anything you like.
```

Personally, I just use Docker to run a MongoDB container. Just remember to change the mapped ports for MongoDB (I change them to Mongo)

## What features are you planning on adding?

You can take a look back through closed issues to see what the previous version had, and will likely be readded.

I'm rewriting everything from scratch since I've learnt quite a bit since the first version.

## Can I contribute?

At the moment, the project isn't really set up for others to contribute. Most of the information around it hasn't been written down and I barely have a working prototype.

Thanks for the offer though!