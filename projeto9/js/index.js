window.onload =function(){
var li = document.querySelectorAll(".menu-desktop li");
var liMobile = document.querySelectorAll(".menu-mobile-show li");
var liAbsolute = document.getElementsByClassName('li-absolute');

var icone = document.getElementsByClassName('icone');

li[0].addEventListener('mouseover',function(){
	mostrarBarra(0);
});
li[1].addEventListener('mouseover',function(){
	mostrarBarra(1);
});
li[2].addEventListener('mouseover',function(){
	mostrarBarra(2);
});
li[3].addEventListener('mouseover',function(){
	mostrarBarra(3);
});

li[0].addEventListener('click',function(){
	moverTela(0);
});
li[1].addEventListener('click',function(){
	moverTela(1);
});
li[2].addEventListener('click',function(){
	moverTela(2);
});
li[3].addEventListener('click',function(){
      moverTela(3);
});
liMobile[0].addEventListener('click',function(){
	moverTela(0);
});
liMobile[1].addEventListener('click',function(){
	moverTela(1);
});
liMobile[2].addEventListener('click',function(){
	moverTela(2);
});
liMobile[3].addEventListener('click',function(){
      moverTela(3);
});



icone[0].addEventListener('click',function(){
	exibirMenuMobile()
});






	//console.log(event.target.indexOf('Invisalign'))





function mostrarBarra(x){
for(var i=0; i<liAbsolute.length; i++){
			liAbsolute[i].style.display="none";
		}
		liAbsolute[x].style.display="block";
        liAbsolute[x].style.backgroundColor="#509d87";

}

function moverTela(x) {

	 var beneficios = document.getElementById('beneficios');
	 var servePraMin = document.getElementById('servePraMin');
	 var contato = document.getElementById('contato');
	 var posicao;
	 console.log(servePraMin);
 console.log(beneficios.offsetTop);
	if(x==1){
	 posicao =beneficios.offsetTop;
	 window.scrollBy(0,posicao-50);
	}else if(x==2){
	 posicao = servePraMin.offsetTop;
		
		window.scrollBy(0,posicao);
	}else if(x==3){
		posicao = contato.offsetTop;
		window.scrollBy(0,posicao);
	}
	
}
function exibirMenuMobile() {
	// body...

	var menuMobile = document.getElementById('menu-mobile-show');
    var status = menuMobile.style.display;
	

	if(status=="block"){
		menuMobile.style.display="none";
       menuMobile.style.width= 0+"%";
	}else{
		menuMobile.style.display="block";
		
		menuMobile.style.animation = "menu-animation 1s";
		menuMobile.style.width= "100%";
		}
		
	}







}


