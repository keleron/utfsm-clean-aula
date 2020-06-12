$('head').append('<link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@700&display=swap" rel="stylesheet">')
$("h4.media-heading a").each(function(index) {
  if ($(this).text().includes('2020')){
      $(this).text($(this).text().split('(')[0]);
  } else {
      $(this).parent().parent().parent().parent().parent().parent().remove();
  }
  /*             console.log( index + ": " + $(this)[0].outerHTML); */
});
$('.row-fluid.hidden').css('visibility', 'visible')
var a = $('nav div.container-fluid')
//console.log(a.attr('href'))
a.append('<a class="brand" href="https://bibliotecas.usm.cl/az.php">PAPERS</a>');
a.append('<a class="brand" href="https://siga.usm.cl/pag/sistemas.jsp">SIGA</a>');
a.append('<a class="brand" href="https://sci-hub.tw/">SCIHUB</a>');
a.append('<a class="brand" href="https://mallas.labcomp.cl/">MALLA</a>');
a.append('<span id="alarmButton" class="brand" style="cursor:pointer">AUTODESTRUCCIÓN</span>');
$('li.type_course.depth_6 p a').each(function(index){
  try {
      var name = $(this).attr('title').split('(')[0];
      console.log(name);
      $(this).text(name);
  } catch (error){
      console.log(error);
  }
})
$('html').css('visibility','visible')

var alarmTimer=0;
var alarmInterval=0;
var alarmSet=false;
function flash(){
  alarmTimer+=1;
  document.getElementById('alarm').style.opacity=((Math.sin(alarmTimer/20)+1)*50)+"%";
};
function alarm(){
  alarmSet=!alarmSet;
  if(alarmSet){
    document.getElementById('alarm').style.visibility='visible';
    document.getElementById('audio').play();
    alarmInterval=setInterval(flash,8);
  } else {
    clearInterval(alarmInterval);
    document.getElementById("audio").pause();
    document.getElementById("audio").currentTime=0;
    document.getElementById('alarm').style.visibility='hidden';
  }
};
document.getElementById("alarmButton").onclick=function(){alarm()};
$('body').append('<div id="alarm" style="position:fixed;top:0;left:0;height:100%;width:100%;visibility:hidden;background-color:red;z-index:100"></div>');
$('body').append('<audio id="audio" src="https://metroid.retropixel.net/games/metroid3/music/sm05.mp3"></audio>');