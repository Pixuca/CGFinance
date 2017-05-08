/**
 * Created by marcelo on 08/05/17.
 */
var http = require('http');
function trataSolicitacao(requisicao, resposta) {
    resposta.write('OI');
    resposta.end();
}

var Servidor = http.createServer(trataSolicitacao);
Servidor.listen(8080);

console.log("Servidor Ativo");