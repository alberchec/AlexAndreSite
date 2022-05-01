/* SCRIPT QUE DA ESTILO AO WEBSITE A PARTIR DO TAMANHO DO MONITOR DO USUARIO */
var altT=screen.height;
var largT=screen.width;
var razaopixels=2;
/*var razaopixels=window.devicePixelRatio;*/

var sheet=document.createElement("style");
document.body.appendChild(sheet);

//function larguraEstilo0(){
var difmenudinamico=parseFloat(120)/900*altT;
var sheet2=`
	#aempr{
		top:-`+difmenudinamico+`px;
	}
	#serv{
		top:-`+difmenudinamico+`px;
	}
	#obrasreal{
		top:-`+difmenudinamico+`px;
	}
	#cont{
		top:-`+difmenudinamico+`px;
	}
`;
//}
function larguraEstilo1(){
	sheet.innerHTML=` 
		header nav ul li {
			padding-left:4vw;
		}
		header nav ul li a {
			font-size:1.25vw;
		}
		#botao1div, #botao2div, #botao3div, #botao4div {
			width:`+0.0128*altT+`px;
			height:`+0.016*altT+`px;
			margin-right:`+0.016*altT+`px;
			padding-right:`+0.0016*altT+`px;
			padding-left:`+0.0016*altT+`px;
			border-radius:`+0.11*altT+`px;
		}
		#botao4div{
			margin-right:0;
		}
		/*A EMPRESA*/
		/*#aempresa ul li{
			width:50%;
		}*/
		/*#aempresa ul li p{
			font-size:2vh;
			margin-left:0;
			padding-right:3vw;
		}*/
		#aempresa #aempresafoto1{
			position:relative;
			margin-top:4vh;
			margin-left:13vw;
			left:0vh;
		}
		#aempresa #aempresafoto2{
			margin-top:10vh;
			margin-right:5vw;
		}
		#aempresatexto2{
			margin-left:10vw;
			padding-bottom:10vh;
		}

		/*SERVICOS*/
		#servicos{ 
			padding-left:9.33vw; 
			padding-right:9.33vw; 
		} 
		#servicos ul li{
			width:23.79vw;
			height:25.5vw;
		}
		#servicos h2{
			margin-left:0.66vw;
		} 
		#obras ul li{
			width:24.2%;/*era vw*/
			height:20vw;
		}
		#obras ul li img {
			width:auto;
			max-height:100%;
		}
		#obrasvermobile{
			display:none;
		}
		#galeriadefotos h3{
			font-size:`+0.0192*altT+`px;
		}
		#galeriadefotosinnerinner h3, #galeriadefotosinnerinner2 h3{
			font-size:`+0.0192*altT+`px;
		}
		#galeriadefotosinnerinner p{
			font-size:`+0.016*altT+`px;
		}
	`+sheet2;
	for(i=1;i<=8;i++){
		document.getElementById("obras"+i+"texto").style.opacity="0";
	};
};
function larguraEstilo2(){	
	sheet.innerHTML=`
		header nav ul li {
			padding-left:4vw;
		}
		header nav ul li a {
			font-size:1.5vw;
		}
		#botao1div, #botao2div, #botao3div, #botao4div {
			width:`+0.0128*altT+`px;
			height:`+0.016*altT+`px;
			margin-right:`+0.016*altT+`px;
			padding-right:`+0.0016*altT+`px;
			padding-left:`+0.0016*altT+`px;
			border-radius:`+0.11*altT+`px;
		}
		#botao4div{
			margin-right:0;
		}
		/*A EMPRESA*/
		#aempresa ul li{
			width:50%;
		}
		#aempresa ul li p{
			font-size:3vh;
			margin-left:0;
			padding-right:3vw;
		}
		#aempresa #aempresafoto1{
			position:relative;
			margin-top:4vh;
			margin-right:0;
			margin-left:5vw;
			left:5vh;
		}
		#aempresa #aempresafoto2{
			margin-top:10vh;
			margin-right:3vw;
		}
		#aempresatexto2{
			margin-left:3vw;
		}

		/*SERVICOS*/
		#servicos{ 
			padding-left:3vw; 
			padding-right:3vw; 
		}
		#servicos ul li{
			width:28vw;
			height:30.4vw;
		}
		#servicos h2{
			margin-left:7vw;
		} 
		#servicos ul li h3{
			font-size:1.5vw;
		}
		#servicos ul li p{
			font-size:1.2vw;
		}
		#obras ul li{
			width:32.4vw;
			height:26.77vw;
		}
		#obras ul li img {
			width:auto;
			max-height:100%;
		}
		#obras ul li h3 {
			font-size:2.5vw;
		}
		#obrasvermobile{
			display:none;
		}
		#galeriadefotos h3{
			font-size:`+0.0192*altT+`px;
		}
		#galeriadefotosinnerinner h3, #galeriadefotosinnerinner2 h3{
			font-size:`+0.0192*altT+`px;
		}
		#galeriadefotosinnerinner p{
			font-size:`+0.016*altT+`px;
		}
	`+sheet2;
	for(i=1;i<=8;i++){
		document.getElementById("obras"+i+"texto").style.opacity="0";
	};

};
function larguraEstilo3(){
	sheet.innerHTML=`
		/* CABECALHO */
		header nav ul li {
			padding-left:3vw;
		}
		header nav ul li a {
			font-size:1.7vw;
		}
		/*Menu igual do mobile*/
		#menumobile, #closemenumobile{
			position:absolute;
			top:5vh;
			right:3vw;
			width:7vh;
			margin:0;
			padding:0;
			z-index:6;
		}
		#menumobile{
			display:block;
		}
		#menumobile:hover, #closemenumobile:hover{
			cursor:pointer;
		}
		header nav{
			display:none;
			right:3vw;
			width:39vh;
			padding:0;
			margin:0;
			padding-top:10vh;
		}
		header nav ul li {
			float:none;
			padding:0;
			margin:0;
			padding-left:0vw;
			padding-bottom:3vh; 
		}
		header nav ul li a {
			font-size:4vh;
			padding:0 1vw;
		}
		#fundomobile{
			position:fixed;
			width:40vh;
			height:100%;
			right:0;
			z-index:5;
			background-color:white;
			overflow:hidden;
			box-shadow:-2px 0 5px #aaa; 
		}

		/*SLIDESHOW*/
		#botao1div, #botao2div, #botao3div, #botao4div {
			width:`+0.0128*altT+`px;
			height:`+0.016*altT+`px;
			margin-right:`+0.016*altT+`px;
			padding-right:`+0.0016*altT+`px;
			padding-left:`+0.0016*altT+`px;
			border-radius:`+0.11*altT+`px;
		}
		#botao4div{
			margin-right:0;
		}

		/* A EMPRESA */
		#aempresa ul li{
			width:50%;
		}
		#aempresa ul li p{
			font-size:3vh;
			margin-left:0;
			padding-right:3vw;
		}
		#aempresa #aempresafoto1{
			position:relative;
			margin-top:10vh;
			margin-right:0;
			margin-left:5vw;
			left:5vh;
		}
		#aempresa #aempresafoto2{
			margin-top:10vh;
			margin-right:3vw;
		}
		#aempresatexto2{
			margin-left:3vw;
		}

		/* SERVICOS */
		#servicos{ 
			padding-left:3vw; 
			padding-right:3vw; 
		}
		#servicos ul li{
			width:43.65vw;
			height:47.39vw;
		}
		#servicos h2{
			margin-left:7vw;
		} 
		#servicos ul li h3{
			font-size:2.5vw;
		}
		#servicos ul li p{
			font-size:2vw;
		}
		/* OBRAS REALIZADAS */
		#obras ul li{
			width:32.4vw;
			height:26.77vw;
		}
		#obras ul li img {
			width:auto;
			max-height:100%;
		}
		#obras ul li h3 {
			font-size:3vw;
		}
		#obrasvermobile{
			display:none;
		}
		#galeriadefotos h3{
			font-size:`+0.0192*altT+`px;
		}
		#galeriadefotosinnerinner h3, #galeriadefotosinnerinner2 h3{
			font-size:`+0.0192*altT+`px;
		}
		#galeriadefotosinnerinner p{
			font-size:`+0.016*altT+`px;
		}
	`+sheet2;
	for(i=1;i<=8;i++){
		document.getElementById("obras"+i+"texto").style.opacity="0";
	};
};
function larguraEstiloMobile(){
	sheet.innerHTML=`
		/* CABECALHO E MENU */
		#menumobile, #closemenumobile{
			position:absolute;
			top:4vh;
			right:3vw;
			width:7vh;
			margin:0;
			padding:0;
			z-index:6;
		}
		#menumobile{
			display:block;
		}
		#menumobile:hover, #closemenumobile:hover{
			cursor:pointer;
		}
		header nav{
			display:none;
			right:3vw;
			width:70vw;
			padding-top:10vh;
		}
		header nav ul li {
			float:none;
			padding-left:0vw;
			padding-bottom:3vh; 
		}
		header nav ul li a {
			font-size:7vw;
			padding:0 1vw;
		}
		#fundomobile{
			position:fixed;
			width:75vw;
			height:100%;
			right:0;
			z-index:5;
			background-color:white;
			overflow:hidden;
			box-shadow:-2px 0 5px #aaa; 
		}

		/* SLIDESHOW */
		#botao1div, #botao2div, #botao3div, #botao4div {
			width:`+0.02*altT+`px;
			height:`+0.03*altT+`px;
			margin-right:`+0.05*altT+`px;
			padding-right:`+0.005*altT+`px;
			padding-left:`+0.005*altT+`px;
			border-radius:`+0.3*altT+`px;
		}
		#botao4div{
			margin-right:0;
		}
		#slideshow{
			height:90vh;
		}
		#slidebotao{
			width:`+0.27*altT+`px;
			top:80vh;
		}
		#slideshow h6{
			font-size:7vw;
		}
		#slidetexto1{
			width:94vw;
			left:50vw;
			top:50vh;
		}
		.textoslide1{
			float:left;
			left:50%;
			transform:translate(-50%);
		}
		#slidetexto2{
			width:75vw;
			top:55vh;
			left:50vw;
		}
		.textoslide2{
			float:left;
			left:50%;
			transform:translate(-50%);
		}
		#slidetexto3{
			width:70vw;
			top:50vh;
			left:50vw;
		}
		#slidetexto4{
			width:80vw;
			top:50vh;
			left:50vw;
		}
		#setaesquerdalink, #setadireitalink{
			display:none;
		}

		/* A EMPRESA */

		#aempresa {
			margin-left:3%;
			margin-right:3%;
		}
		#aempresa h2{
			margin-left:0;
		}
		h2 {
			font-size:;
		}
		p {
			font-size:5vw;
		}
		#textoempresa2{
			margin-top:10vh;
		}
		#aempresa #aempresafoto1{
			float:none;
			width:auto;
			height:70vw;
			margin:auto;
			padding:0;
			margin-top:4vh;
			margin-right:5vw;
		}
		#aempresa div #img1{
			width:70vw;
			top:0;
			left:0%;
		}
		#aempresa div #img2{
			width:70vw;
			top:-30%;
			left:25%;
		}
		#aempresa div #img3{
			width:20vw;
			top:-115%;
			left:80%;
			z-index:2;
		}
		#aempresa #aempresafoto2{
			width:90vw;
			height:90vw;
			margin:auto;
		}
		#aempresa div #img4{
			width:70vw;
			top:0%;
			left:10%;
		}
		#aempresa div #img5{
			width:40vw;
			top:-40%;
			left:0%;
		}
		#aempresa div #img6{
			width:70vw;
			top:-80%;
			left:20%;
		}
		#aempresa ul{
			margin-top:2vh;
		}	
		#aempresa ul li{
			float:none;
			width:94vw;
			margin-bottom:3%;
		}
		#aempresatexto2{
			padding-top:10vh;
			padding-bottom:5vh;
		}

		/* SERVIÇOS PRESTADOS */

		#servicos {
			padding-top:3vh;
			padding-bottom:4vh;
			padding-left:3vw;
			padding-right:3vw;
		}
		#servicos ul li {
			float:left;
			width:90vw;
			height:98vw;
			margin:0;
			margin-top:1vh;
			margin-bottom:2vh;
			padding:2vw;
		}
		h3 {
			font:italic lighter 5vw georgia;
		}
		#servicos ul li p {
			font-size:4vw;
		}

		/* OBRAS REALIZADAS */
		#obras h2{
			margin-left:3vw;
		}
		#obras4, #obras5, #obras6, #obras7, #obras8, #obras ul li h3{
			display:none;
		}
		#obras ul{
			padding:1vw;
			margin:3vw;
			background-color:white;
			overflow:hidden;
			border:0.2vw solid #aaaaaa;
			border-radius:1%;
			box-shadow:1px 1px 5px #aaa;
		}
		#obras ul li{
			/*float:left;*/
			width:45.2vw;
			height:35vw;
			padding:0;
			margin:0.3vw;
		}
		#obras ul li img{
			max-height:100%;
			width:auto;
		}
		#obras ul li img:hover{
			opacity:1;
		}
		#obrasvermobile{
			display:block;
			background-color:#f2f2f2;
		}
		#obrasvermobile p{
			color:#555555;
			font-size:10vw;
			text-align:center;
			padding-top:7vh;
			text-decoration:underline;
		}
		/*#obras {
			margin-top:3vh;
			margin-bottom:4vh;
		}
		#obras h2 {
			margin-left:3%;
		}
		#obras ul {
			margin:3vw;
			margin-top:2vh;
			margin-bottom:0vh;
			padding:0;
		}
		#obras ul li {
			width:94vw;
			height:77.7vw;
			padding:0vw;
			margin:0;
			margin-bottom:1vh;
		}
		#obras ul li h3 {
			opacity:1;
			font-size:5vw;
		}
		#obras ul li img:hover {
			opacity:1; 
		}*/

		/* GALERIA DE FOTOS */
		#galeriadefotos h3{
			position:absolute;
			left:78%;
			top:0vh;
		}
		#galeriadefotosinner{
			width:90vmin;
			margin-top:7vh;
			left:50vw;
			margin-left:-46vmin;
			padding:1vmin;
		}
		#galeriasetaesquerda,#galeriasetadireita{
			display:none;
		}
		#galeriadefotosinnerinner {
			float:none;
			width:100%;
			border:none;
		}
		.fontetextogaleria, #caixadeopcoes,#caixadeopcoes2{
			float:left;
			padding-left:3vw;
		}
		#titulogaleria{
			float:none;
		}
		#caixadeopcoes{
			width:30vw;
		}
		#galeriadefotos h3{
			font-size:`+0.0192*altT+`px;
		}
		#galeriadefotosinnerinner h3{
			font-size:`+0.025*altT+`px;
		}
		#galeriadefotosinnerinner2 h3{
			font-size:`+0.0192*altT+`px;
		}
		#galeriadefotosinnerinner p{
			font-size:`+0.016*altT+`px;
		}

		/* CONTATO */

		#contato {
			padding-top:3vh;
			padding-bottom:10vh;
			padding-left:3vw;
			padding-right:3vw;
		}
		#contatolista ul {
			margin:0;
			margin-top:4vh;
			padding:0;
		}
		#contato ul li {
			float:none;
			margin:0;
		}
		#contato #contatoinfo {
			margin-left:0vw;
			margin-top:4vh;
		}
		#contato ul li iframe{
			width:94vw;
			height:71vw;
		}
		#contato ul li h3 {
			font-size:4vw;
		}
		#contato ul li p {
			font-size:4vw;
		}

		/* RODAPE */
		footer img{
			width:33vw;
			margin:auto;
		}
		footer{
			height:15vw
		}
		h16{
			display:none;
		}
		`+sheet2;
		for(i=1;i<=8;i++){
			document.getElementById("obras"+i+"texto").style.opacity="1";
		};
};

function aomudartamanhoSS(){
	if(window.innerWidth>=648*razaopixels){
		larguraEstilo1();
	}else if(window.innerWidth>512*razaopixels && window.innerWidth<648*razaopixels){
		larguraEstilo2();
	}else if(window.innerWidth>360*razaopixels && window.innerWidth<=512*razaopixels){
		larguraEstilo3();
	}else if(window.innerWidth<=360*razaopixels){
		larguraEstiloMobile();
	};
};
function aocarregarSS(){
	if(window.innerWidth>=648*razaopixels){
		larguraEstilo1();
	}else if(window.innerWidth>512*razaopixels && window.innerWidth<648*razaopixels){
		larguraEstilo2();
	}else if(window.innerWidth>360*razaopixels && window.innerWidth<=512*razaopixels){
		larguraEstilo3();
	}else if(window.innerWidth<=360*razaopixels){
		larguraEstiloMobile();
	};
};