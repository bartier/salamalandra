
function carregar(){
	$("#arquimedes").hide();
	$("#painel").hide();

	// rodarSlides();

	$("#bemvindo").click( function(){
		$("<div id='mascara'></div>");

		//achar a altura atual
        var alturaTela = $(document).height() + $(document).scrollTop();
        var larguraTela = $(window).width();
     	
        //colocando o fundo preto
        $('#mascara').css({'width':larguraTela,'height':alturaTela});
        $('#mascara').fadeTo("slow",0.8);
 
        var left = ($(window).width() /2) - ( $("#painel").width() / 2 );
        var top = ($(window).height() / 2) - ( $("#painel").height() / 2 );
     
        $("#painel").css({top: top,left: left});
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
}