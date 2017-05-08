/**
 *
 * Created by wachs on 23/04/16.
 */

var http = require('http');


function trataSolicitacao(requisicao, resposta){
    resposta.write("OI")
    resposta.end();
}

var meuServidor=http.createServer(trataSolicitacao);
meuServidor.listen(80);

console.log("Servidor Rodando" );

