$(function(){
  // $("body").append("<div id='lightBox'></div>");
  
    //nav 
    $('#toggle').click(function() {
        $('#toggle .bar').toggleClass('animate');
        $('nav').toggleClass('overlay');
        $("#lightBox").toggle();
    });
    $("#lightBox").click(function(){
        $("#lightBox").hide();
        $('nav').toggleClass('overlay');
        $('#toggle .bar').toggleClass('animate');
    });

    //container01이동 
    $('#overlay').find('.listeners').click(function(){
      // $('.wave').find('#txt2 text').remove();
        $('.wave').find('#txt1 text').remove();
        $('.container01').show();
        $('nav').toggleClass('overlay');
        $("#lightBox").hide();
        $('#toggle .bar').toggleClass('animate');
        $('.scrollDist').remove();
    });
});

