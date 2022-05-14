var titgaleria=["","Base de Piso","Pavimentação","Corte e Aterro","Pavimento Externo","Loteamentos",
"Drenagem","Demolição","Infraestrutura"];

var textoobra1="Preparo de base de pisos de galpões industriais. Nivelamento a laser com \
excelente planicidade, resultando em redução de matéria prima na confecção do piso de concreto.\
 Preparo da base de câmaras frias.";
var textoobra2="Pavimentação de vias, rodovias e áreas externas de galpões industriais.";
var textoobra3="Disponível o uso de GPS, para melhor precisão e economia nos cortes e aterros.";
var textoobra4="Preparo da base de pavimentos externos, com nivelamento a laser, para posterior \
assentamento de bloquetes ou pavimentação.";
var textoobra5="Solução completa para loteamentos. Desde corte e aterro, drenagem, \
infraestrutura subterrânea, nivelamento de vias e pavimentação.";
var textoobra6="Instalação de tubos, confecção de caixas.";
var textoobra7="Demolição de estruturas de concreto.";
var textoobra8="Confecção de caixas para elétrica, esgoto e águas pluviais. Construção de guias,\
entre outros.";

var txtobras=["", textoobra1, textoobra2, textoobra3, textoobra4, textoobra5, textoobra6, textoobra7, textoobra8];

/*var qtdFotosporObra=[0,10,7,10,8,8,17,2,4];*/

function jsonEscape(str){
    return str.replace(/\n/g,"<br>").replace(/\r/g,"\\r").replace(/\t/g,"&emsp;");
}

BasePiso = JSON.parse(jsonEscape(BasePiso));
Pav = JSON.parse(jsonEscape(Pav));
CorteAterro = JSON.parse(jsonEscape(CorteAterro));
PavExt = JSON.parse(jsonEscape(PavExt));
Lot = JSON.parse(jsonEscape(Lot));
Dren = JSON.parse(jsonEscape(Dren));
Dem = JSON.parse(jsonEscape(Dem));
Infra = JSON.parse(jsonEscape(Infra));

var img_data = [""];
img_data.push(BasePiso);
img_data.push(Pav);
img_data.push(CorteAterro);
img_data.push(PavExt);
img_data.push(Lot);
img_data.push(Dren);
img_data.push(Dem);
img_data.push(Infra);
