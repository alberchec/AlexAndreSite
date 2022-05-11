var numFoto = 1;
var album = 1;

/* SETAR OPCOES CAIXA DE OBRAS */

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
			album = j;
			document.getElementById("galeriadefotos").style.display="block";
			document.getElementById("galeriadefotosinner").style.display="block";
			document.getElementById("fotogaleria").src="Images/Gallery/obra"+j+"foto1.jpg";
			document.getElementById("textogaleria").innerHTML=txtobras[j];
			numFoto = 1;
			titgal(j);
			document.getElementById("corpo").style.overflow="hidden";
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

function mudarobra123(){
	document.getElementById("fotogaleria").src="Images/Gallery/obra"+album+"foto1.jpg";
	document.getElementById("textogaleria").innerHTML=txtobras[album];
	titgal(album);
};


/* MUDAR FOTOS PELAS SETAS*/
var escolhadaSeta;
function setas(){
	if(escolhadaSeta == 0){
		/* MUDA PARA A FOTO MAIOR ATE A ULTIMA DA OBRA */
		if(numFoto < qtdFotosporObra[album]){
			numFoto += 1;
		/* NA ULTIMA FOTO MUDAR PARA OUTRA OBRA AO CLICAR NA DIREITA */
		}else{
			if(album < 8){
				album += 1
				mudarobra123();
			}else{
				album = 1
				mudarobra123();
			};
			numFoto = 1;
		};
	}else{
		/* MUDA PARA A FOTO MENOR ATE A PRIMEIRA DA OBRA */
		if(numFoto > 1 && numFoto <= qtdFotosporObra[album]){
			numFoto -= 1;
		/* NA PRIMEIRA FOTO MUDAR PARA OUTRA OBRA AO CLICAR NA ESQUERDA */
		}else{
			if(album > 1){
				album -= 1;
				mudarobra123();
			}else{
				album = 8;
				mudarobra123();
			};
			numFoto = qtdFotosporObra[album];
		};
	};
	document.getElementById("fotogaleria").src="Images/Gallery/obra"+album+"foto"+numFoto+".jpg";
};

/* MUDAR FOTOS PELAS SETAS */
document.getElementById("galeriasetadireita").onclick=function(){
	escolhadaSeta=0;
	setas();
};
document.getElementById("galeriasetaesquerda").onclick=function(){
	escolhadaSeta=1;
	setas();
};


/* SETAR TITULO DA GALERIA DE IMAGENS */
function titgal(i){
	document.getElementById("titulogaleria").innerHTML=titgaleria[i];
};
