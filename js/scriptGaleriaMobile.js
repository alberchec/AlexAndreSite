function getMedImg(album,numFoto){
	return "imagesdb/med-" + img_data[album][numFoto].file;
}
function getSmlImg(album,numFoto){
	return "imagesdb/sml-" + img_data[album][numFoto].file;
}

/*######################*/
var listaObraMobile="-";
for(i=8;i>0;i=i-1){
	var listaMobileFotos=null;
	var fotosloop;
	/* MAXIMO DE QUATRO FOTOS NA LISTA */
	var qtdFotosporObra = img_data[i-1].length;
	if(qtdFotosporObra<=4){
		fotosloop=qtdFotosporObra;
	}else{
		fotosloop=4;
	}
	/* COLOCANDO AS RESPECTIVAS FOTOS NA LISTA, SEM O INCONVENIENTE VALOR DA VARIAVEL INICIAL */
	for(j=fotosloop;j>0;j=j-1){
		if(j==fotosloop){
			listaMobileFotos="<li id='listaMobileObra"+i+"Foto"+j+"' class='listaMobileObraFotoslista'><h15 class='VerMaisMobileGaleria'>&nbsp;+&nbsp;</h15><img src='"+getSmlImg(i,j)+"'/></li>";
		}else{
			listaMobileFotos="<li id='listaMobileObra"+i+"Foto"+j+"' class='listaMobileObraFotoslista'><img src='"+getSmlImg(i,j)+"'/></li>"+listaMobileFotos;
		};
	};
	/* COLOCANDO TODAS AS OBRAS EM FORMA DE LISTA */
	listaObraMobile="<li class='listainternamobile'><h11>"+titgaleria[i]+"</h11><p>"+txtobras[i]+"</p> <ul id='listaMobileFotosObra"+i+"'> "+listaMobileFotos+" </ul> </li>"+listaObraMobile;
	if(i==1){
		document.getElementById("listadefotosmobile").innerHTML=listaObraMobile;
	};
};

/* ENTRAR NA GALERIA MOBILE */
document.getElementById("obraslista").onclick=function(){
	if(window.innerWidth<=360*razaopixels){
		document.getElementById("menugaleriamobile").style.display="block";
		document.getElementById("galeriadefotosmobile").style.display="block";
		document.getElementById("galeriadefotosmobile").scrollTop=0;
		document.getElementById("corpo").style.position="fixed";
		document.getElementById("corpo").style.overflow="hidden";
	};
};
/* FECHAR A GALERIA MOBILE */
document.getElementById("fechargalmobile").onclick=function(){
	document.getElementById("menugaleriamobile").style.display="none";
	document.getElementById("galeriadefotosmobile").style.display="none";
	document.getElementById("corpo").style.position="static";
	document.getElementById("corpo").style.overflow="scroll";
	scrollTo(0,document.getElementById("obrasreal").getBoundingClientRect().y);
};

/* DESIGN FOTOS GALERIA MOBILE */
for(i=1;i<=8;i++){
	var qtdFotosporObra = img_data[i-1].length;
	if(qtdFotosporObra==1){
		document.getElementById("listaMobileObra"+i+"Foto1").style.width="90vw";
		document.getElementById("listaMobileObra"+i+"Foto1").style.height="70vw";
		document.getElementById("listaMobileObra"+i+"Foto1").style.opacity="1";
	}else if(qtdFotosporObra==2){
		document.getElementById("listaMobileObra"+i+"Foto1").style.width="90vw";
		document.getElementById("listaMobileObra"+i+"Foto1").style.height="35vw";

		document.getElementById("listaMobileObra"+i+"Foto2").style.width="90vw";
		document.getElementById("listaMobileObra"+i+"Foto2").style.height="35vw";
		document.getElementById("listaMobileObra"+i+"Foto2").style.opacity="1";
	}else if(qtdFotosporObra==3){
		document.getElementById("listaMobileObra"+i+"Foto1").style.width="90vw";
		document.getElementById("listaMobileObra"+i+"Foto1").style.height="40vw";

		document.getElementById("listaMobileObra"+i+"Foto2").style.width="44.625vw";
		document.getElementById("listaMobileObra"+i+"Foto2").style.height="30vw";
		document.getElementById("listaMobileObra"+i+"Foto2").style.paddingRight="0.75vw";

		document.getElementById("listaMobileObra"+i+"Foto3").style.width="44.625vw";
		document.getElementById("listaMobileObra"+i+"Foto3").style.height="30vw";
		document.getElementById("listaMobileObra"+i+"Foto3").style.opacity="1";
	}else if(qtdFotosporObra>=4){
		document.getElementById("listaMobileObra"+i+"Foto1").style.width="90vw";
		document.getElementById("listaMobileObra"+i+"Foto1").style.height="40vw";

		document.getElementById("listaMobileObra"+i+"Foto2").style.paddingRight="0.75vw";
		document.getElementById("listaMobileObra"+i+"Foto3").style.paddingRight="0.75vw";
		document.getElementById("listaMobileObra"+i+"Foto4").style.opacity="1";

		for(j=2;j<=4;j++){
			document.getElementById("listaMobileObra"+i+"Foto"+j).style.width="29.5vw";
			document.getElementById("listaMobileObra"+i+"Foto"+j).style.height="22.13vw";
		};
	};
};

/* SLIDESHOW DAS FOTOS DE OBRAS */
function slideshowMobileObras(i){
	document.getElementById("listaMobileFotosObra"+i).onclick=function(){
		document.getElementById("slideshowMobileFotoDiv").style.display="block";
		document.getElementById("slideshowMobilePropriamente").style.display="block";
		document.getElementById("slideshowMobilePropriamente").scrollTop=0;
		document.getElementById("fechargaleriamobile").style.display="block";
		determinarFotosSlideShowMobile(i);
		document.getElementById("galeriadefotosmobile").style.overflow="hidden";
	};
};
for(i=1;i<=8;i++){
	var qtdFotosporObra = img_data[i-1].length;
	slideshowMobileObras(i);
};
/* FECHAR SLIDESHOW MOBILE */
function fecharslideshowmobile(){
	document.getElementById("slideshowMobileFotoDiv").style.display="none";
	document.getElementById("slideshowMobilePropriamente").style.display="none";
	document.getElementById("fechargaleriamobile").style.display="none";
	document.getElementById("galeriadefotosmobile").style.overflow="scroll";
};
document.getElementById("fechargaleriamobile").onclick=function(){
	fecharslideshowmobile();
};
document.getElementById("slideshowMobileFotoDiv").onclick=function(){
	fecharslideshowmobile();
};

function determinarFotosSlideShowMobile(i){
	for(j=qtdFotosporObra;j>0;j=j-1){
		var fotosSlideShowMobileProp;
		if(j==qtdFotosporObra){
			fotosSlideShowMobileProp="<li><img src='"+getMedImg(i,j)+"'/></li>";
		}else{
			fotosSlideShowMobileProp="<li><img src='"+getMedImg(i,j)+"'/></li>"+fotosSlideShowMobileProp;
		};
		document.getElementById("slideshowMobilePropriamente").innerHTML=fotosSlideShowMobileProp;
	};
	
};
