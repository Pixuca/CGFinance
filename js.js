encoding = 'UTF-8';
    function Pedido(codigo, descricao, preco){
        this.codigo = codigo;
        this.descricao = descricao;
        this.preco = parseFloat(preco);
    }
var pedidos = [];
function cadastra(){
    var codigo = document.getElementById("codigo").value;
    var descricao = document.getElementById("descricao").value;
    var preco = document.getElementById("preco").value;
    document.getElementById("codigo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("preco").value = "";
    var novoPedido = new Pedido(codigo, descricao, preco);
    pedidos.push(novoPedido);
    tabeladePedidos();
    total()
}
function tabeladePedidos(){
    var div = document.getElementById("codigos");
    var html = "<table class='tabela' border='1' width='100%'>" + "<tr><th>C�digo</th><th>Descri��o</th><th>Pre�o</th></tr>";
    for(var i=0 ; i < pedidos.length; i++){
        html += "<tr><td>" + pedidos[i].codigo + "</td>" +
            "<td>" + pedidos[i].descricao + "</td>" +
            "<td>" + pedidos[i].preco + "</td></tr>";
    }
    html += "</table>";
    div.innerHTML = html ;
}
function removeUltimo(){
    pedidos.pop();
    tabeladePedidos();
    total()
}

function removePrimeiro(){
    pedidos.shift();
    tabeladePedidos();
    total()
}

function removeTudo(){
    pedidos.splice(0,Number.MAX_VALUE);
    tabeladePedidos();
    total()
}

function total() {
    var dinheiro = 0;
    var precototal = document.getElementById("precototal");
    for(var i=0 ; i < pedidos.length; i++){
        var dinheiro = dinheiro + pedidos[i].preco ;
    }
    var rs = "R$" + dinheiro.toFixed(2);
    precototal.innerHTML = rs ;

}
