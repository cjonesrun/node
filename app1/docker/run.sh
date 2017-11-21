
# create db testing with cj:cj
docker run --rm --name postgres \
-v /tmp/postgres:/var/lib/postgresql/data \
-v /tmp/postgres_home:/home/postgres \
-p 5432:5432 \
-e POSTGRES_DB=testing -e POSTGRES_USER=cj -e POSTGRES_PASSWORD=cj postgres

# back up the db
# docker exec -tiu postgres postgres pg_dump testing  > backup.sql

# restore backup
# docker exec -iu postgres postgres psql testing < backup.sql 

# connect to pg via docker exec
# sudo docker exec -tiu postgres postgres psql
# \c <dbname> <user> - connect to database=dbname as <user>

# \l lists all dbs
# \dt list all tables
