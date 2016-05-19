function janelaModal() {

    var alturaTela = $(document).height();
    var larguraTela = $(document).width();

    $('<div id="painel"></div>').appendTo('body');
    $('<div id="mascara"></div>').css({width:larguraTela,height:alturaTela}).appendTo('body').hide();

    $(".produtos").click(function(e){
    		e.preventDefault();
            //colocando o fundo preto
            $('#mascara').fadeTo("slow",0.8);

            var left = ($(window).width() /2) - 250;
            var top = ($(window).height() / 2) - 250;

            $('<img class="fotoAmpliada">')
            .attr('src',$(this).attr('src')).css({width:500, heigth: 500, left: left }).appendTo('#painel');
         
            $("#painel").css({top: top + document.body.scrollTop,
                              left: left});
            $("#painel").show();   
        });
     
        $("#mascara").click( function(){
            $(this).hide();
            $("#painel").hide();
            $(".fotoAmpliada").hide();
        });	
}