var a;
var b;
var c;

a=document.getElementById("slide1");
b=document.getElementById("slide2");
c=document.getElementById("slide3");

//document.getElementById("botao1").checked=true;

var d=1;
var e=0;

/* PRIMEIRO SLIDE */
function botao1(){
	d=1;
	/* BOTAO */
	document.getElementById("botao1div").style.backgroundColor="#41800e";
	document.getElementById("botao2div").style.backgroundColor="white";
	document.getElementById("botao3div").style.backgroundColor="white";

	/* IMAGEM */
	a.style.left="0vw";
	b.style.left="100vw";
	c.style.left="100vw";

	/* TEXTO */
	setTimeout (function(){
		if(d==1){
			document.getElementById("slidetexto1").style.opacity=100;
			//document.getElementById("h62").style.opacity=100;
			//document.getElementById("h63").style.opacity=100;
			//document.getElementById("h64").style.opacity=100;
		}
	}, 1000);

	document.getElementById("slidetexto2").style.opacity=0;
	//document.getElementById("h66").style.opacity=0;

	document.getElementById("slidetexto3").style.opacity=0;
	//document.getElementById("h68").style.opacity=0;

	/* TEMPORIZADOR DO SLIDE, BLOQUEANDO BUGS, como se usa-se um
	relogio para liberar a execucao do slide que esta no tempo certo*/
	e=e+1;
	var f=e;
	setTimeout(function(){if (f==e){botao2()}},10000)

}

/* SEGUNDO SLIDE */
function botao2(){
	d=2;
	/* BOTAO */
	document.getElementById("botao1div").style.backgroundColor="white";
	document.getElementById("botao2div").style.backgroundColor="#41800e";
	document.getElementById("botao3div").style.backgroundColor="white";

	/* IMAGEM */
	a.style.left="-100vw";
	b.style.left="0vw";
	c.style.left="100vw";

	/* TEXTO */
	setTimeout (function(){
		if(d==2){
			document.getElementById("slidetexto2").style.opacity=100;
			//document.getElementById("h66").style.opacity=100;
		}
	}, 1000);

	document.getElementById("slidetexto1").style.opacity=0;
	//document.getElementById("h62").style.opacity=0;
	//document.getElementById("h63").style.opacity=0;
	//document.getElementById("h64").style.opacity=0;

	document.getElementById("slidetexto3").style.opacity=0;
	//document.getElementById("h68").style.opacity=0;

	/* TEMPORIZADOR DO SLIDE, BLOQUEANDO BUGS */
	e=e+1;
	var f=e;
	setTimeout(function(){if (f==e){botao3()}},7000)
	
}

/* TERCEIRO SLIDE */
function botao3(){
	d=3;
	/* BOTAO */
	document.getElementById("botao1div").style.backgroundColor="white";
	document.getElementById("botao2div").style.backgroundColor="white";
	document.getElementById("botao3div").style.backgroundColor="#41800e";

	/* IMAGEM */
	a.style.left="-100vw";
	b.style.left="-100vw";
	c.style.left="0vw";

	/* TEXTO */
	setTimeout (function(){
		if(d==3){
			document.getElementById("slidetexto3").style.opacity=100;
			//document.getElementById("h68").style.opacity=100;
		}
	}, 1000);

	document.getElementById("slidetexto1").style.opacity=0;
	//document.getElementById("h62").style.opacity=0;
	//document.getElementById("h63").style.opacity=0;
	//document.getElementById("h64").style.opacity=0;

	document.getElementById("slidetexto2").style.opacity=0;
	//document.getElementById("h66").style.opacity=0;

	/* TEMPORIZADOR DO SLIDE, BLOQUEANDO BUGS */
	e=e+1;
	var f=e;
	setTimeout(function(){if (f==e){botao1()}},7000)

}

/* POSICIONAMENTO VERTICAL FOTOS DE SLIDE */
document.getElementById("slide1").style.zIndex=-2;
document.getElementById("slide2").style.zIndex=0;
document.getElementById("slide3").style.zIndex=1;

/* SETAS PARA MUDANÇA DE SLIDE */
function setadireita(){
	if (d==1){
		botao2()
	}else if(d==2){
		botao3()
	}else if(d==3){
		botao1()
	}
}
function setaesquerda(){
	if (d==1){
		botao3()
	}else if(d==2){
		botao1()
	}else if(d==3){
		botao2()
	}
}

/* AJUSTE IMAGENS NOS SLIDES */
var largura;
var altura;
var razao;

var x=document.getElementById("slidefoto1");
var y=document.getElementById("slidefoto2");
var z=document.getElementById("slidefoto3");

function ajustefoto(){
	largura=document.documentElement.clientWidth;
	altura=document.documentElement.clientHeight;
	razao=largura/altura;
	if(razao>=1.7){
		x.style.width="100vw";
		y.style.width="100vw";
		z.style.width="100vw";

		x.style.height="auto";
		y.style.height="auto";
		z.style.height="auto";

		var porcentop=(-(razao/1.7-1)/2*100);
		x.style.top=porcentop+"vh";
		y.style.top=porcentop+"vh";
		z.style.top=porcentop+"vh";
		x.style.left=0;
		y.style.left=0;
		z.style.left=0;
	}
	if(razao<1.7){
		x.style.height="100vh";
		y.style.height="100vh";
		z.style.height="100vh";

		x.style.width="auto";
		y.style.width="auto";
		z.style.width="auto";

		var porcentleft=(-(1.7/razao-1)/2*100);
		x.style.top=0;
		y.style.top=0;
		z.style.top=0;
		x.style.left=porcentleft+"vw";
		y.style.left=porcentleft+"vw";
		z.style.left=porcentleft+"vw";
	}
}
function aocarregarSSlide(){
	ajustefoto();
	botao1();
}
function aomudartamanhoSSlide(){
	ajustefoto();
}







