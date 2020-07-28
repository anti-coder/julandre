//jsCopyBan//
 
var mes="Опа !!!!";
function click(e) {
if (document.all) {
if (event.button == 2) { // Ну а если вы хотите отключить левую кнопку мышки - поставьте вместо 2 цифру 1
alert(mes);
return false;
}
}
if (document.layers) {
if (e.which == 3) {
alert(message);
return false;
}
}
}
if (document.layers) {
document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;
document.oncontextmenu=function (e)
{return false};




