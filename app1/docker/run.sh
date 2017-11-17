
# create db testing with cj:cj
sudo docker run --rm --name postgres \
-v /tmp/postgres:/var/lib/postgresql/data \
-v /tmp/postgres_home:/home/postgres \
-e POSTGRES_DB=testing -e POSTGRES_USER=cj -e POSTGRES_PASSWORD=cj postgres


# connect to pg via docker exec
# sudo docker exec -tiu postgres postgres psql
# \c <dbname> <user> - connect to database=dbname as <user>


# \l lists all dbs
# \dt list all tables
