# comandos no docker do postgres:

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

# para fazer as migrations:
yarn sequelize migration:create --name=create-user
