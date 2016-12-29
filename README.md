## Releases

### What?

I got fed up with there being no nice, simple to parse sites that show release dates for upcoming games so I just decided to make my own.

It's not done by any means but I may as well open source it in case anyone wants to poke around.

### It's messy

Yeah, I know. It's very much just a thing I hack away at. I'm basically just making it up as I go along hence why you've got a utils folder containing code that doesn't seem to do anything.

Just testing what I want out of this thing since it's primarily for myself.

### What do I need?

At the moment, just a Postgres container. You can see some docs about how I go about setting that up myself (and I have no idea if it's the correct way, haha!)

Optionally, if you want to use import.js in the utils folder, move `example.env` to `.env` and put a [Giant Bomb](http://giantbomb.com) API key in there.

### Docker stuff you mentioned?

Yeah, here it is:

Pull a Postgres image from Docker's repository and check that it is running on the correct posts

```
docker run -d -p 5432:32768 postgres (OR JUST USE KITEMATIC ON A MAC IT'S WAY EASIER)
docker ps
```

You should see something like

| CONTAINER ID | IMAGE    | COMMAND                | CREATED        | STATUS        | PORTS                             | NAMES           |
| ------------ | -------- | ---------------------- | -------------- | ------------- | --------------------------------- | --------------- |
| 18e167d5fc61 | postgres | "/docker-entrypoint.s" | 53 seconds ago | Up 52 seconds | 5432/tcp, 0.0.0.0:5432->32768/tcp | snapping_turtle **(OR PROBABLY JUST POSTGRES)** |

Take note of the container name (which will be unique to your install and **may just be called postgres**) and run the following command

```
docker exec -it snapping_turtle bash
```

You should see a bash shell awaiting entry so go ahead and connect to postgres

```
root@18e167d5fc61:/# psql -U postgres
psql (6.9.1)
Type "help" for help
```

At this point, you'll want to create the database that the dummy data will be entered into

```
postgres=# CREATE DATABASE releases;
```

and check that it has been created properly

```
postgres=# \c releases
You are now connected to database "releases" as user "postgres".
```

Now all you've got left is to run the migrations and seeds.

```
npm install knex -g (if you haven't already)
knex migrate:latest
knex seed:run
```
