# GeoLocation-Video

## The postgres container was created using:
```
docker run --name=videoPostgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p 5433:5432 -d postgres           
```

## make these commands inside your postgres container
```
#after running de postgres container, install postgis in it to be able to handle geometry types
#inside postgres container, run:

apt-get update && apt-get install postgis -y

#then login into psql

psql -U ice -h localhost -d ice

#then run:

CREATE EXTENSION postgis;
CREATE EXTENSION postgis_topology;
```

## to create migrations:
```
yarn sequelize migration:create --name=create-user
```

## to build your migrations:
```
yarn sequelize db:migrate
```