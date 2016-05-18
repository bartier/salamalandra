	var n = 1;
	var m = 1;

function carregar() {

	$("#arquimedes").hide();
	$("#painel").hide();

	var alturaTela = $(document).height();
    var larguraTela = $(document).width();

	$('<div id="painel"></div>').appendTo('body');
	$('<div id="mascara"></div>').css({width:larguraTela,height:alturaTela}).appendTo('body').hide();

	$("#bemvindo").click(function(e){
		e.preventDefault();
        //colocando o fundo preto
        $('#mascara').fadeTo("slow",0.8);
 
        var left = ($(window).width() /2) - ( $("#painel").width() / 2 );
        var top = ($(window).height() / 2) - ( $("#painel").height() / 2 );
     
        $("#painel").css({top: top + document.body.scrollTop,left: left});
        $("#painel").show();   
    });
 
    $("#mascara").click( function(){
        $(this).hide();
        $("#painel").hide();
    });	

    rodarSlides();
    rodarTextos();
};

function rodarSlides(){
	switch (n) {
		case 1:
			$("#4").hide("normal", function(){
			$("#1").show("normal"); });
			n = 2;
			break;
		case 2:
			$("#1").hide("normal", function(){
			$("#2").show("normal"); });
			n = 3;
			break;
		case 3:
			$("#2").hide("normal", function(){
			$("#3").show("normal"); });
			n = 4;
			break;
		case 4:
			$("#3").hide("normal", function(){
			$("#4").show("normal"); });
			n = 1;
			break;
	}

	setTimeout(rodarSlides, 6000);
};

function rodarTextos() {
	switch (m) {
		case 1:
			$("#textoArquimedes").animate({left:'35%',opacity:'1'},1000, function(){
			$("#textoArquimedes2").animate({left:'75%',opacity:'1'},1000) });
			m = 2;
			break;
		case 2:
			$("#textoArquimedes").animate({left:'0%',opacity:'0'},800, function() {
			$("#textoArquimedes2").animate({left:'0%',opacity:'0'},1000, function() { 
			$("#textoArquimedes").css({left:'100%'});
			$("#textoArquimedes2").css({left:'100%'});
			}); });
			m = 3;
			break;
		case 3:
			$("#propaganda").animate({left:'30%',opacity:'1'},1000);
			m = 4;
			break;
		case 4:
			$("#propaganda").animate({left:'100%',opacity:'0'},800, function() {
			$("#propaganda").css({left:'0%'}); });
			m = 1;
			break;
	}

	setTimeout(rodarTextos, 6000);
}