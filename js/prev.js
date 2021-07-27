
$(function(){
  $("#bar").click(function(e){
      e.preventDefault();
      $(".hbtn").toggleClass('active');
      $("header, #overlay").toggleClass('visible');
  });
});

$(function (){
  $('body').on("mousewheel", function(e, d) {
    d = e.originalEvent.wheelDelta/120;
    this.scrollLeft -= (d * 100);
    e.preventDefault();
  });
});


var cw = window.innerWidth,
    ch = window.innerHeight,
    nWaves = 5,
    waves = [],
    amp = 10,
    speed = 0.4,
    detail = 30,
    waveY = 250;
    

for (var w=0; w<nWaves; w++) {
    var p = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    waves.push(p);
    $('#m').append(p);
     gsap.set(p, {attr:()=>{ return (w==0) ? {fill:'#fff'} : {fill:'none', stroke:'#fff', 'stroke-dasharray':'2 4', 'stroke-width':3-w/nWaves*3}}});
}


// gsap.timeline({defaults:{duration:1}, delay:0.9})
//     .from('.txt1', {opacity:0, ease:'power2.inOut'}, 0)
//     .to(window, {scrollTo:ch/2}, 0);

gsap.ticker.add(drawWave);

function drawWave(t) { 
  // if (waveY!=-$(window).scrollTop()) gsap.to(window, {duration:1, waveY:Math.round(ch/1.7)});
  
  for (var k=0; k<nWaves; k++) {
    var p = waves[k],
        offset = (1 - k/nWaves) * nWaves/6,
        pts = '';
    
    for(var i=-1; i<(cw+detail); i+=detail) {
      var y = ch-waveY;
      y += Math.sin(i * 0.003 - t/speed + offset) * amp;
      y += Math.sin(i * 0.004 - t/speed + offset) * amp;
      y += Math.sin(i * -0.011 - t/speed + 20+offset) * amp;
      pts += i.toFixed(2)+','+y.toFixed(2)+' ';
    }
    
    gsap.set(p, {attr:{points:'-20,-20 -20,'+ch/2+' '+pts+' '+cw+',-20'}});
  }  
}

$(window).on('resize', ()=>{ cw=window.innerWidth; ch=window.innerHeight; });


$(function(){
  $(".thumb_box").click(function(e){
    e.preventDefault();
      $('#content').css({"transform":"translate3d(200px, 0, 100px)", "opacity":0});
      $('main>p').css({"transform":"translate3d(235px, 0, 100px)", "opacity":0});
      $('main').hide(600);
      $('#prev_box').css({"display":"block","display":"flex"});
      $('#thumb_sm').animate({"marginTop":"0%","opacity":"1"});
      $('.album_desc').animate({"marginLeft":"5%","opacity":"1"});
      $('.album_desc>li:nth-child(1)').animate({"marginLeft":"0","opacity":"1"},200);
      $('.album_desc>li:nth-child(2)').animate({"marginLeft":"0","opacity":"1"},600);
      $('.album_desc>li:nth-child(3)').animate({"marginLeft":"0","opacity":"1"},800);
      $("#back_btn, #audiobox, .scrollDist, svg").addClass('play').delay(1200);  
      $('body').on("mousewheel",function(e){
        e.preventDefault();
      });
  });
});

$(function(){
  $("#back_btn").click(function(){
      $('#prev_box').css({"display":"none","display":"flex"});
      $('#thumb_sm').animate({"marginTop":"10%","opacity":"0"});
      $('.album_desc').animate({"marginLeft":"20%","opacity":"0"});
      $('#content, main>p').css({"opacity":"1"});
      $('#content, main>p').css({"transform":"translate3d(0, 0, 0)"});
      $('main').show(1000);
      
      $('.album_desc>li:nth-child(1)').animate({"marginLeft":"5%","opacity":"0"},200);
      $('.album_desc>li:nth-child(2)').animate({"marginLeft":"5%","opacity":"0"},600);
      $('.album_desc>li:nth-child(3)').animate({"marginLeft":"5%","opacity":"0"},800);
      $("#back_btn, #audiobox, .scrollDist, svg").removeClass('play');
  });
});