//Плавный переход по якорям//

$(document).ready(function(){
$('a[href*=#]').bind("click", function(e){ 
	/*Получаем все ссылки, у которых атрибут href начинается с решетки. 
	При клике по этим ссылкам, будут последовательно выполняться действия, внутри функции*/
var anchor = $(this);
/*Создаем переменную anchor(произвольное название) и присваиваем ей значение атрибута href 
(#about, #services, #blog, #works, #contact)*/
$('html, body').stop().animate({
	/*Внутри тегов html и body, произойдет анимация, дальше опишем её.*/

scrollTop: $(anchor.attr('href')).offset().top
/*Устанавливает текущее положение значений переменной anchor с отступом относительно верха 
при прокрутке страницы сверху вниз*/
}, 1000); /*Время, в течении которого произойдет анимация*/
e.preventDefault();
});
return false;
});
