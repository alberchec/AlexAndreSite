var elemPos1;
var elemPos2;
var pagPos;
/* HOME */
document.getElementById("hom2").onclick=function(){
	linkdesliza("hom");
	//Fecha menu mobile, em todos os onclicks desse script
	fecharmenu();
};
document.getElementById("logao").onclick=function(){
	linkdesliza("hom");
};
/* A EMPRESA */
document.getElementById("aempr2").onclick=function(){
	linkdesliza("aempr");
	fecharmenu();
};
/* SERVICOS */
document.getElementById("serv2").onclick=function(){
	linkdesliza("serv");
	fecharmenu();
};
/* OBRAS REALIZADAS */
document.getElementById("obrasreal2").onclick=function(){
	linkdesliza("obrasreal");
	fecharmenu();
};
/* CONTATO */
document.getElementById("cont2").onclick=function(){
	linkdesliza("cont");
	fecharmenu();
};

function linkdesliza(posicaoPagina){
	elemPos1=document.getElementById(posicaoPagina);
	elemPos2=elemPos1.getBoundingClientRect();
	pagPos=window.scrollY;
	var temporizador1=1;
	var temporizador=setInterval(tmpz,1);
	function tmpz(){
		var	posIncre=(pagPos+elemPos2.y/50*temporizador1);
		scrollTo(0,posIncre);
		temporizador1=temporizador1+1;
		if(temporizador1==51){clearInterval(temporizador)};
	};
};

/* SCRIPT MENU MOBILE */
document.getElementById("menumobile").onclick=function(){
	abrirmenu();
};
document.getElementById("closemenumobile").onclick=function(){
	fecharmenu();
};

function abrirmenu(){
	if(window.innerWidth<=512*razaopixels){
		document.getElementById("navmenu").style.display="block";
		document.getElementById("fundomobile").style.display="block";
		document.getElementById("menumobile").style.display="none";
		document.getElementById("closemenumobile").style.display="block";
	};
};
function fecharmenu(){
	if(window.innerWidth<=512*razaopixels){
		document.getElementById("navmenu").style.display="none";
		document.getElementById("fundomobile").style.display="none";
		document.getElementById("menumobile").style.display="block";
		document.getElementById("closemenumobile").style.display="none";
	};
};

function aomudartamanhoSMM(){
	if(window.innerWidth>512*razaopixels){
		document.getElementById("menumobile").style.display="none";
		document.getElementById("closemenumobile").style.display="none";
		document.getElementById("navmenu").style.display="block";
	}else{
		document.getElementById("menumobile").style.display="block";
		document.getElementById("navmenu").style.display="none";
	};
};