<?php
// definições de host, database, usuário e senha
$host = "localhost";
$db   = "1387483";
$user = "1387483";
$pass = "132469578";
// conecta ao banco de dados
$con = mysql_pconnect($host, $user, $pass) or trigger_error(mysql_error(),E_USER_ERROR);
// seleciona a base de dados em que vamos trabalhar
mysql_select_db($db, $con);

$dia = $_POST['dia']; 
$descricao = $_POST['descricao'];
$valor = $_POST['valor'];

if ($dia != '0000-00-00' && $valor > 0){
    $add = "INSERT INTO tabelaGastos (dia, descricao, valor) VALUES  ('{$dia}', '{$descricao}', '{$valor}')";
    $insere = mysql_query($add, $con) or die(mysql_error());
}

$query = sprintf("SELECT dia, descricao, valor FROM tabelaGastos");
$dados = mysql_query($query, $con) or die(mysql_error());

// transforma os dados em um array
$linha = mysql_fetch_assoc($dados);

// calcula quantos dados retornaram
$total = mysql_num_rows($dados);
?>

<html>
	<head>
    <title>Spending control</title>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Poppins&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="index.php" method="post">
        <fieldset>
            <legend>Add new bill</legend>
            <input type="date" name="dia" placeholder="01/01/2020">
            <input type="text" name="descricao" placeholder="Descrição">
            <input type="number" step=".01" name="valor" placeholder="123"></div>
            <input type="submit" value="Enviar"/>
        </fieldset>
    </form>
    <table class="table table-responsive">
      <thead>
        <tr>
          <th>DATA</th>
          <th>DESCRIÇÃO</th>
          <th>PREÇO</th>
        </tr>
    </thead>
          <tbody>
<?php

	if($total > 0) {
		do {
?>
        <tr>
            <td><?=$linha['dia']?></td>
            <td><?=$linha['descricao']?></td>
            <td>R$&nbsp;<?=$linha['valor']?></td>
        </tr>

<?php
		// finaliza o loop que vai mostrar os dados
    }while($linha = mysql_fetch_assoc($dados));
	// fim do if
}
?>  
    </tbody>
</table>
<?php

// parte de soma dos valores
$soma = sprintf("SELECT SUM(valor) FROM tabelaGastos");
$resultado = mysql_query($soma, $con) or die(mysql_error());
while($row = mysql_fetch_array($resultado)){
    ?>
    <h2>Total: R$<?=$row['SUM(valor)']?></h2>
<?php    
}
?>
<!-- <h2>Teste</h2> -->
</body>
</html>

<?php
// tira o resultado da busca da memória
mysql_free_result($dados);
?>
