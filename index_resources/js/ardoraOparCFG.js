//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=5; scoreDec=5
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Times New Roman', Times, serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Excelente! Lograste reconstruir la secuencia lógica"; messageTime="5 minutos"; messageError="Incorrecto: Revisa la relación temporal entre los eventos y la conexión de causa-consecuencia."; messageErrorG="Incorrecto: Revisa la relación temporal entre los eventos y la conexión de causa-consecuencia."; messageAttempts="2"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="index_resources/media/";
var indexG=0;
var words1G=["Q2FkYSB0YXJkZSwgQ2FybGEgcGFzYWJhIHBvciBlbCBwYXJxdWUgZGUgc3UgYmFycmlvIGNhbWlubyBhIGNhc2EsIHkgc2llbXByZSBub3RhYmEgdW4gZmFyb2wgYXBhZ2FkbyBjZXJjYSBkZWwgbGFnby4=","VW5hIG5vY2hlLCBkZWNpZGnDsyBhY2VyY2Fyc2UgeSBkZXNjdWJyacOzIHF1ZSBlbCBmYXJvbCBlc3RhYmEgZW5jZW5kaWRvLCBhdW5xdWUgbm8gaGFiw61hIG5hZGllIGFscmVkZWRvciB5IGVsIHBhcnF1ZSBlc3RhYmEgZGVzaWVydG8u","QWwgbWlyYXIgbcOhcyBkZSBjZXJjYSwgdmlvIHF1ZSBkZW50cm8gZGVsIGZhcm9sIGhhYsOtYSB1bmEgcGVxdWXDsWEgbm90YSBlbnJvbGxhZGEgcXVlIGRlY8OtYTog4oCcU2lndWUgbGEgbHV6IHkgaGFsbGFyw6FzIGxvIHF1ZSBidXNjYXPigJ0u","R3VpYWRhIHBvciBsYSBsdXosIGNhbWluw7MgaGFjaWEgdW4gc2VuZGVybyBvY3VsdG8gZW50cmUgbG9zIMOhcmJvbGVzIHF1ZSBudW5jYSBhbnRlcyBoYWLDrWEgdmlzdG8u","QWwgZmluYWwgZGVsIHNlbmRlcm8sIGVuY29udHLDsyB1biBwZXF1ZcOxbyBiYW5jbyBjb24gdW4gbGlicm8gYW50aWd1byBlbmNpbWEsIGN1YmllcnRvIGRlIHBvbHZvLCBxdWUgcGFyZWPDrWEgZXNwZXJhciBhIHF1ZSBhbGd1aWVuIGxvIGRlc2N1YnJpZXJhLg==","QWJyacOzIGVsIGxpYnJvIHkgdmlvIHF1ZSBlc3RhYmEgbGxlbm8gZGUgaGlzdG9yaWFzIGVzY3JpdGFzIHBvciBsb3MgaGFiaXRhbnRlcyBkZWwgYmFycmlvLCBkZXNkZSBoYWNlIGTDqWNhZGFzLCBjb21vIHVuIHJlZ2lzdHJvIHNlY3JldG8gZGUgbGEgY29tdW5pZGFkLg==","Q2FybGEgY29tcHJlbmRpw7MgcXVlIGVsIGZhcm9sIHkgZWwgbGlicm8gZXJhbiBwYXJ0ZSBkZSB1biBsZWdhZG8gcXVlIGNvbmVjdGFiYSBhIGxhcyBnZW5lcmFjaW9uZXMgZGVsIGJhcnJpbywgeSBkZWNpZGnDsyBjb25zZXJ2YXIgZWwgc2VjcmV0byBwYXJhIGNvbXBhcnRpcmxvIGFsZ8O6biBkw61hIGNvbiBvdHJvcyBuacOxb3MgY3VyaW9zb3Mu","RGVzZGUgYXF1ZWxsYSBub2NoZSwgY2FkYSB2ZXogcXVlIHBhc2FiYSBwb3IgZWwgcGFycXVlLCBzYWx1ZGFiYSBhbCBmYXJvbCwgY29tbyBzaSBmdWVyYSB1biBhbWlnbyBzaWxlbmNpb3NvIHF1ZSBndWFyZGFiYSBoaXN0b3JpYXMgeSBzZWNyZXRvcyBwYXJhIHF1aWVuZXMgc2UgYXRyZXbDrWFuIGEgYnVzY2FyLg=="];
var words2G=[];
var words3G=[];
var c1=[116,132,132,96,145,152,193,177];
var c2=[];
var c3=[];
