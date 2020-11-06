create table tabelaGastos(
id int not null auto_increment,
dia date,
descricao varchar(250),
valor float,
primary key(id)
)default charset = utf8;