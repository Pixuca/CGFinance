/**
 * Created by Marcelo Macedo on 08/05/17.
 */
var http = require('http');
function trataSolicitacao(requisicao, resposta) {
    resposta.write('<html>' +
        '<head>' +
        '<meta charset="utf-8">' +
        '<title>Tabela que apaga</title>' +
        '<style type="text/css">' +
        '.doido{' +
        'display: flex;' +
        'justify-content: center;' +
        '}' +
        '.bg{' +
        'background-color: #91C9DB;' +
        '}' +
        '</style> ' +
        '</head>' +
        '<body class="bg">' +
        '<div class="doido">Código<input type="text" id="codigo">' +
        'Descrição: <input type="text" id="descricao">' +
        'Preço: <input type="text" id="preco"></div>' +
        '<br><br>' +
        '<button type="button" onclick="cadastra()" value="Adicionar Produto">Adicionar Produto</button> ' +
        '<button type="button" onclick="removeTudo()" value="Limpar Pedido">Limpar Pedido</button> ' +
        '<button type="button" onclick="removeUltimo()" value="Apagar Ultimo">Apagar Último</button>' +
        '<button type="button" onclick="removePrimeiro()" value="Aapagar Primeiro">Apagar Primeiro</button>' +
        '<div id="codigos"><table border="1" width="100%">' +
        '<tr><td>Códigos</td></tr><tr>Descrição</tr><tr>Preço</tr>' +
        '</table></div>' +
        '<p>Total: </p>' +
        '<h1 id="precoTotal">R$: 0.00</h1>' +
        '' +
        '<script>' +
        'function Pedido(codigo, descricao, preco) { ' +
        'this.codigo = codigo;' +
        'this.descricao = descricao;' +
        'this.preco = parseFloat(preco);' +
        '}' +
        'var pedidos = [];' +
        'function cadastra() {' +
        'var codigo = document.getElementById("codigo").value;' +
        'var descricao = document.getElementById("descricao").value;' +
        'var preco = document.getElementById("preco").value;' +
        'document.getElementById("codigo").value = "";' +
        'document.getElementById("descricao").value = "";' +
        'document.getElementById("preco").value = "";' +
        'var novoPedido = new Pedido(codigo, descricao, preco);' +
        'pedidos.push(novoPedido);' +
        'tabeladePedidos();' +
        'total();' +
        '}' +
        'function tabeladePedidos() {' +
        'var div = document.getElementById("codigos");' +
        'var html = <table class="tabela" border="1" witdth="100%"> + <tr><td>Código</tr><tr>Descrição</tr><tr>Preço</tr></td>;' +
        'for(var i = 0 ; i < pedidos.lenght; i++){' +
        'html += <tr><td> + pedidos[i].codigo + </td>  + <td> + pedidos[i].descricao + </td> + <td> + pedidos[i].preco + </td></tr>;' +
        '}' +
        'html += </table>;' +
        'div.innerHTML = html ;' +
        '}' +
        'function removeUltimo() {' +
        'pedidos.pop();' +
        'tabeladePedidos();' +
        'total()' +
        '}' +
        'function removePrimeiro() {' +
        'pedidos.shift();' +
        'tabeladePedidos();' +
        'total()' +
        '}' +
        'function removeTudo() {' +
        'pedidos.splice(0, Number.MAX_VALUE);' +
        'tabeladePedidos();' +
        'total()' +
        '}' +
        'function total() {' +
        'var dinheiro = 0;' +
        'var precototal = document.getElementById("precototal");' +
        'for(var i = 0; i < pedidos.length; i++){' +
        'var dinheiro = dinheiro + pedidos[i].preco;' +
        '}' +
        'var rs = "R$" + dinheiro.toFixed(2);' +
        'precototal.innerHTML = rs;' +
        '}' +
        '</script>' +
        '</body>' +
        '</head>');
    resposta.end();
}

var Servidor = http.createServer(trataSolicitacao);
Servidor.listen(8080);

console.log("Servidor Ativo");