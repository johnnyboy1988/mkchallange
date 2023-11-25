Comando para criar o Docker do banco de dados. 
$  docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
