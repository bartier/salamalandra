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

};

function rodarSlides(){
	switch (n) {
		case 1:
			$("#bemvindo").show("slide", { direction: "left" }, 600);
			$("#arquimedes").show("slide", { direction: "left" }, 600);
			n = 2;
			break;
		case 2:
			$("#arquimedes").SlifeLeft();
			$("#bemvindo").slideLeft();
			n = 1;
			break;
	}
	setTimeout(rodarSlides, 6000);
};