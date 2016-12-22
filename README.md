### Releases (I might register upcomingreleas.es?)


Pull a Postgres image from Docker's repository and check that it is running on the correct posts
```
sudo docker run -d -p 5432:32768 postgres
sudo docker ps
```

You should see something like

| CONTAINER ID | IMAGE    | COMMAND                | CREATED        | STATUS        | PORTS                             | NAMES           |
| ------------ | -------- | ---------------------- | -------------- | ------------- | --------------------------------- | --------------- |
| 18e167d5fc61 | postgres | "/docker-entrypoint.s" | 53 seconds ago | Up 52 seconds | 5432/tcp, 0.0.0.0:5432->32768/tcp | snapping_turtle |

Take note of the container name (which will be unique to your install) and run the following command

```
sudo docker exec -it snapping_turtle bash
```

You should see a bash shell awaiting entry so go ahead and connect to postgres

```
root@18e167d5fc61:/# psql -U postgres
psql (6.9.1)
Type "help" for help
```

At this point, you'll want to create the database that the dummy data will be entered into

```
postgres=# CREATE DATABASES releases;
```

and check that it has been created properly

```
postgres=# \c releases
You are now connected to database "releases" as user "postgres".
```

Now all you've got left is to run the migrations and seeds.
