var alturaTela=screen.height;

var razaoCabecalho=parseFloat(100)/900;
var alturaCabecalho=razaoCabecalho*alturaTela+"px";

var razaologo=parseFloat(94)/900;
var alturalogo=razaologo*alturaTela+"px";
var razaologo2=parseFloat(5)/900;
var marginlogo=razaologo2*alturaTela+"px";

var razaomenu=parseFloat(12)/900;
var topmenu=razaomenu*alturaTela+"px";

document.getElementById("cabecalho").style.height=alturaCabecalho;
document.getElementById("imagemlogo").style.height=alturalogo;
document.getElementById("imagemlogo").style.marginTop=marginlogo;
document.getElementById("navmenu").style.top=topmenu;