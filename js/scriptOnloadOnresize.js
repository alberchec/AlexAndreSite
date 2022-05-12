window.onload=function(){
	aocarregarSSlide();
	aocarregarSS();
	document.getElementById("corpo").style.display="block";

	//Fazer que tudo que é pesado para carregar,
	//carregue depois de o site aparecer.
	//Coisas que demoram para carregar incluem:
	//fotos, conteudo de outros sites, como mapa
	//do Google, etc.
	//setTimeout(function(){
	var atributoObras=document.getElementById("scObras").getAttribute("data-src");
	document.getElementById("scObras").setAttribute("src",atributoObras);

	var atributoMapaGoogle=document.getElementById("mapaGoogle").getAttribute("data-src");
	document.getElementById("mapaGoogle").setAttribute("src",atributoMapaGoogle);

	var atributoObrasMobile=document.getElementById("scObrasMobile").getAttribute("data-src");
	document.getElementById("scObrasMobile").setAttribute("src",atributoObrasMobile);
	//},3000);	
};
window.onresize=function(){
	aomudartamanhoSSlide();
	aomudartamanhoSS();
	aomudartamanhoSMM();
	galleryControl();
};