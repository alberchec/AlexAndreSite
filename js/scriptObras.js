var numFoto = 0;
var album = 0;
var img = document.getElementById("fotogaleria");

/*Get Image*/
function getImage(){
	var year = img_data[album][numFoto].file.substring(0,4);
	var month = img_data[album][numFoto].file.substring(4,6);
	var day = img_data[album][numFoto].file.substring(6,8);
	return "piwigo_app/upload/" + year +"/"+ month +"/"+ day +"/"+ img_data[album][numFoto].file;
}

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
			numFoto = 0;
			document.getElementById("galeriadefotos").style.display="block";
			document.getElementById("galeriadefotosinner").style.display="block";
			img.src = getImage();
			document.getElementById("textogaleria").innerHTML = img_data[album][0].comment;
			titgal();
			document.getElementById("corpo").style.overflow="hidden";
			galleryControl();
		};
	};

};
for(j=0;j<8;j++){handleElement(j);};

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
	img.src = getImage();
	document.getElementById("textogaleria").innerHTML = img_data[album][numFoto].comment;
	titgal();
};


/* MUDAR FOTOS PELAS SETAS*/
function setas(escolhadaSeta){
	var qtdFotosporObra = img_data[album].length;
	if(escolhadaSeta == 0){
		/* MUDA PARA A FOTO MAIOR ATE A ULTIMA DA OBRA */
		if(numFoto < qtdFotosporObra - 1){
			numFoto += 1;
		/* NA ULTIMA FOTO MUDAR PARA OUTRA OBRA AO CLICAR NA DIREITA */
		}else{
			if(album < 7){
				album += 1
				mudarobra123();
			}else{
				album = 0
				mudarobra123();
			};
			numFoto = 0;
		};
	}else{
		/* MUDA PARA A FOTO MENOR ATE A PRIMEIRA DA OBRA */
		if(numFoto > 0 && numFoto < qtdFotosporObra){
			numFoto -= 1;
		/* NA PRIMEIRA FOTO MUDAR PARA OUTRA OBRA AO CLICAR NA ESQUERDA */
		}else{
			if(album > 0){
				album -= 1;
				mudarobra123();
			}else{
				album = 7;
				mudarobra123();
			};
			numFoto = qtdFotosporObra - 1;
		};
	};
	img.src = getImage();
};

/* MUDAR FOTOS PELAS SETAS */
document.getElementById("galeriasetadireita").onclick=function(){setas(0)};
document.getElementById("galeriasetaesquerda").onclick=function(){setas(1)};


/* SETAR TITULO DA GALERIA DE IMAGENS */
function titgal(){
	document.getElementById("titulogaleria").innerHTML = img_data[album][numFoto].name;
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

	var galleryWidth;
	var galleryHeight;
	if(screenRatio >= (4/3)){
		galleryHeight = windHeight * 0.95;
		galleryHeight -= galleryHeight % 3;
		galleryWidth = galleryHeight * 4 / 3;
	}else{
		galleryWidth = windWidth * 0.95;
		galleryWidth -= galleryWidth % 4;
		galleryHeight = galleryWidth * 3 / 4;
	}
	if(galleryWidth > 1500){
		galleryWidth = 1500;
		galleryHeight = 1125;
	}
	gallery.style.width = galleryWidth+"px";
	gallery.style.height = galleryHeight+"px";
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