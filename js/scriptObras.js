var numFoto = 1;
var album = 1;
var img = document.getElementById("fotogaleria");

/* SETAR OPCOES CAIXA DE OBRAS */

function handleElement(j){
	var list = document.getElementById("obras"+j);
	/* APARECER TEXTO SOBRE FOTO */
	list.onmouseover=function(){
		if(window.innerWidth>=0.5*screen.width){
			document.getElementById("obras"+j+"texto").style.opacity = "1";
			list.getElementsByTagName("img")[0].style.opacity = "0.7";
		};
	};
	list.onmouseout=function(){
		if(window.innerWidth>=0.5*screen.width){
			document.getElementById("obras"+j+"texto").style.opacity="0";
			list.getElementsByTagName("img")[0].style.opacity = "1";
		};
	};

	/* APARECER GALERIA DE FOTOS AO CLICAR EM UMA FOTO*/
	list.onclick=function(){
		if(window.innerWidth>360*razaopixels){
			album = j;
			document.getElementById("galeriadefotos").style.display="block";
			document.getElementById("galeriadefotosinner").style.display="block";
			img.src="Images/Gallery/obra"+j+"foto1.jpg";
			document.getElementById("textogaleria").innerHTML=txtobras[j];
			numFoto = 1;
			titgal(j);
			document.getElementById("corpo").style.overflow="hidden";
			galleryControl();
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
	img.src="Images/Gallery/obra"+album+"foto1.jpg";
	document.getElementById("textogaleria").innerHTML=txtobras[album];
	titgal(album);
};


/* MUDAR FOTOS PELAS SETAS*/
function setas(escolhadaSeta){
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
	img.src="Images/Gallery/obra"+album+"foto"+numFoto+".jpg";
};

/* MUDAR FOTOS PELAS SETAS */
document.getElementById("galeriasetadireita").onclick=function(){setas(0)};
document.getElementById("galeriasetaesquerda").onclick=function(){setas(1)};


/* SETAR TITULO DA GALERIA DE IMAGENS */
function titgal(i){
	document.getElementById("titulogaleria").innerHTML=titgaleria[i];
};

/*############################################################################*/
/*############################################################################*/
/*############################################################################*/
/*CSS REPLACEMENT*/

/*Control size of gallery*/
function galleryControl(){
	var windWidth = window.innerWidth;
	var windHeight = window.innerHeight;
	var screenRatio = windWidth/windHeight;
	var gallery = document.getElementById("galeriadefotosinner");
	gallery.style.top = "50%";
	if(screenRatio >= (4/3)){
		var galleryHeight = windHeight * 0.95;
		galleryHeight -= galleryHeight % 3;
		var galleryWidth = galleryHeight * 4 / 3;
		gallery.style.height = galleryHeight+"px";
		gallery.style.width = galleryWidth+"px";
	}else{
		var galleryWidth = windWidth * 0.95;
		galleryWidth -= galleryWidth % 4;
		var galleryHeight = galleryWidth * 3 / 4;
		gallery.style.width = galleryWidth+"px";
		gallery.style.height = galleryHeight+"px";
	}
}

/*Control arrows hover effect*/
function changeArrow(){
	var img = this.getElementsByTagName("img")[0].style;
	img.backgroundColor = "rgba(255,255,255,0.7)";
	img.transition = "0.1s";
	img.transform = "translate(0,-50%) scale(1.2)";
	img.opacity = "1";
}
function restoreArrow(){
	var img = this.getElementsByTagName("img")[0].style;
	img.backgroundColor = "transparent";
	img.transition = "0.3s";
	img.transform = "translate(0,-50%)";
	img.opacity = "0";
}

var arrowLeft = document.getElementById("galeriasetaesquerda");
var arrowRight = document.getElementById("galeriasetadireita");

arrowRight.addEventListener("mouseover",changeArrow);
arrowLeft.addEventListener("mouseover",changeArrow);

arrowRight.addEventListener("mouseout",restoreArrow);
arrowLeft.addEventListener("mouseout",restoreArrow);