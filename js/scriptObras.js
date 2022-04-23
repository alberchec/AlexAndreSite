var numFoto;

/* SETAR OPCOES CAIXA DE OBRAS */
var htmlnacaixa2;
var caixadeselecao=document.getElementById("caixadeopcoes");
for(i=(titgaleria.length-1);i>0;i=i-1){
	htmlnacaixa2="<option value="+i+">"+titgaleria[i]+"</option>"+htmlnacaixa2;
};
caixadeselecao.innerHTML=htmlnacaixa2;

function handleElement(j){
	/* APARECER TEXTO SOBRE FOTO */
	document.getElementById("obras"+j).onmouseover=function(){
		if(window.innerWidth>=0.5*screen.width){
			document.getElementById("obras"+j+"texto").style.opacity="1";
		};
	};
	document.getElementById("obras"+j).onmouseout=function(){
		if(window.innerWidth>=0.5*screen.width){
			document.getElementById("obras"+j+"texto").style.opacity="0";
		};
	};

	/* APARECER GALERIA DE FOTOS AO CLICAR EM UMA FOTO*/
	document.getElementById("obras"+j).onclick=function(){
		if(window.innerWidth>360*razaopixels){
			document.getElementById("galeriadefotos").style.display="block";
			document.getElementById("galeriadefotosinner").style.display="block";
			document.getElementById("fotogaleria").src="ObrasFotosTexto/obra"+j+"foto1.jpg";
			document.getElementById("textogaleria").innerHTML=txtobras[j];
			document.getElementById("caixadeopcoes").value=j;
			numFoto=1;
			gerarNumfotos();
			titgal(j);
			document.getElementById("corpo").style.overflow="hidden";
			//manocrien=document.getElementById("fotogaleria").getAttribute("data-src");
			//document.getElementById("fotogaleria").setAttribute("src",manocrien);
		};
	};

};
for(j=1;j<=8;j++){handleElement(j);};

/* FECHAR GALERIA DE IMAGENS */
function fechargal(){
	document.getElementById("galeriadefotos").style.display="none";
	document.getElementById("galeriadefotosinner").style.display="none";
	document.getElementById("corpo").style.overflow="scroll";
};
document.getElementById("galeriadefotos").onclick=function(){   
	fechargal();
};
document.getElementById("fechargaleria").onclick=function(){   
	fechargal();
};

/* MUDAR OBRA PELA CAIXA DE OPCOES */
document.getElementById("caixadeopcoes").onchange=function(){
	mudarobra123();
};
function mudarobra123(){
	var caixaValue=parseInt(document.getElementById("caixadeopcoes").value);
	document.getElementById("fotogaleria").src="ObrasFotosTexto/obra"+caixaValue+"foto1.jpg";
	document.getElementById("textogaleria").innerHTML=txtobras[caixaValue];
	gerarNumfotos();
	titgal(caixaValue);
};


/* MUDAR FOTOS PELAS SETAS*/
var escolhadaSeta;
function setas(k){
	var caixaValue5=parseInt(document.getElementById("caixadeopcoes2").value);
	if(escolhadaSeta==0){
		/* MUDA PARA A FOTO MAIOR ATE A ULTIMA DA OBRA */
		if(caixaValue5<qtdFotosporObra[k]){
			caixaValue5=caixaValue5+1;
		/* NA ULTIMA FOTO MUDAR PARA OUTRA OBRA AO CLICAR NA DIREITA */
		}else{
			if(k<8){
				k=parseInt(document.getElementById("caixadeopcoes").value)+1;
				document.getElementById("caixadeopcoes").value=k;
				mudarobra123();
			}else{
				document.getElementById("caixadeopcoes").value=1;
				k=1;
				mudarobra123();
			};
			caixaValue5=1;
		};
	}else{
		/* MUDA PARA A FOTO MENOR ATE A PRIMEIRA DA OBRA */
		if(caixaValue5>1 && caixaValue5<=qtdFotosporObra[k]){
			caixaValue5=caixaValue5-1;
		/* NA PRIMEIRA FOTO MUDAR PARA OUTRA OBRA AO CLICAR NA ESQUERDA */
		}else{
			if(k>1){
				k=parseInt(document.getElementById("caixadeopcoes").value)-1;
				document.getElementById("caixadeopcoes").value=k;
				mudarobra123();
			}else{
				document.getElementById("caixadeopcoes").value=8;
				k=8;
				mudarobra123();
			};
			caixaValue5=qtdFotosporObra[k];
		};
	};
	document.getElementById("fotogaleria").src="ObrasFotosTexto/obra"+k+"foto"+caixaValue5+".jpg";
	/* SETAR CAIXA DE SELECAO DAS FOTOS */
	document.getElementById("caixadeopcoes2").value=caixaValue5;	
};
for(k=1;k<=8;k++){setas(k);};
/* MUDAR FOTOS PELAS SETAS */
document.getElementById("galeriasetadireita").onclick=function(){
	escolhadaSeta=0;
	var f=parseInt(document.getElementById("caixadeopcoes").value);
	setas(f);
};
document.getElementById("galeriasetaesquerda").onclick=function(){
	escolhadaSeta=1;
	var f=parseInt(document.getElementById("caixadeopcoes").value);
	setas(f);
};

/* MUDAR FOTOS PELA CAIXA DE SELECAO */
function gerarNumfotos(){
	var htmlnacaixa;
	var caixadeselecao2=document.getElementById("caixadeopcoes2");
	var caixaValue2=parseInt(document.getElementById("caixadeopcoes").value);
	for(l=qtdFotosporObra[caixaValue2];l>0;l=l-1){
		htmlnacaixa="<option value="+l+">foto "+l+"</option>"+htmlnacaixa;
	};
	caixadeselecao2.innerHTML=htmlnacaixa;
	htmlnacaixa=null;
};
document.getElementById("caixadeopcoes2").onchange=function(){
	var caixaValue3=document.getElementById("caixadeopcoes2").value;
	var caixaValue4=document.getElementById("caixadeopcoes").value;
	document.getElementById("fotogaleria").src="ObrasFotosTexto/obra"+caixaValue4+"foto"+caixaValue3+".jpg";
};

/* SETAR TITULO DA GALERIA DE IMAGENS */
function titgal(i){
	document.getElementById("titulogaleria").innerHTML=titgaleria[i];
};

/*  ESCONDER CAIXA DE INFORMACOES */
document.getElementById("botaoesconder").onclick=function(){
	if(document.getElementById("galeriadefotosinnerinner").style.display=="none"){
		document.getElementById("galeriadefotosinnerinner").style.display="block";
		document.getElementById("galeriadefotosinnerinner2").style.display="block";
		document.getElementById("galeriadefotosinnerinner0").style.padding="1%";
		document.getElementById("botaoesconder2").src="hidebutton.png";
	}else{
		document.getElementById("galeriadefotosinnerinner").style.display="none";
		document.getElementById("galeriadefotosinnerinner2").style.display="none";
		document.getElementById("galeriadefotosinnerinner0").style.padding="0.2%";
		document.getElementById("botaoesconder2").src="hidebutton2.png";
	};
};

//B>numFoto, a>caixaValue, c>escolhadaSeta, e>qtdFotosporObra, g>caixaValue2
