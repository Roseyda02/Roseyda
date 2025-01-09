//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=3;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Juego Iniciado";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Times New Roman', Times, serif";
var fActi="'Times New Roman', Times, serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=5; messageOk="Exelente Trabajo."; messageTime="Se termino el tiempo."; messageError="Puedes Mejorar"; messageErrorG="Puedes Mejorar"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Cuál es la función principal de Google Classroom?","¿Qué plataforma permite la creación de cuestionarios y encuestas para evaluación formativa?","¿Cuál de estas plataformas es un Entorno Virtual de Aprendizaje (EVA)?","En Moodle, un \"Recurso\" se refiere a:",". ¿Qué herramienta de Google permite almacenar y compartir archivos de una clase virtual?","Google Classroom permite la creación de tareas con rúbricas y la retroalimentación inmediata."];
var answers2=["MUdlc3Rpb25hciBjbGFzZXMgeSB0YXJlYXMgZW4gbMOtbmVhLg==","MEVkaXRhciB2aWRlb3MgZWR1Y2F0aXZvcw==","MENyZWFyIHByZXNlbnRhY2lvbmVzIGludGVyYWN0aXZhcw=="];
var answers3=["MUdvb2dsZSBGb3Jtcy4=","MFByZXppLg==","ME1vb2RsZS4="];
var answers4=["MUdvb2dsZSBDbGFzc3Jvb20u","MENhbnZhLg==","MEthaG9vdC4="];
var answers5=["MVVuIHZpZGVvIG8gYXJjaGl2byBQREYgc3ViaWRvIGEgbGEgcGxhdGFmb3JtYQ==","MCkgVW4ganVlZ28gaW50ZXJhY3Rpdm8u","MFVuIGN1ZXN0aW9uYXJpbyBjb24gcHJlZ3VudGFzIGFiaWVydGFzLg=="];
var answers6=["MUdvb2dsZSBEcml2ZS4=","MEdvb2dsZSBNZWV0Lg==","MEdvb2dsZSBEb2NzLg=="];
var answers7=["MUNvcnJlY3Rv","MEluY29ycmVjdG8="];
var ans=[answers2,answers3,answers4,answers5,answers6,answers7];
var err=["Error","Error","Error","Error","","Error"];
var ima=["","","","","",""];
var mp4=["","","","","",""];
var ogv=["","","","","",""];
var alt=["","","","","",""];
var info=["","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="index_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
