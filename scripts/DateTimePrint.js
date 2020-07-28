<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">

</head>
    
 
<body onload="start()">
<p id='DateTimePrint'>Текущее время</p> 

<script>
//Зададим функцию time, которая будет выводить текущие дату и время в абзац 
//с id=DateTimePrint
function time(){
   //Определим текущие дату и время
   var dat = new Date();
   //Выведем текущие дату и время в абзац с id=DateTimePrint
   document.getElementById('DateTimePrint').innerHTML=dat;
}
/* Функция start будет запущена после полной загрузки документа и будет 
вызывать функцию time через каждую секунду */
function start(){
   id=setInterval('time()',1000);
}
</script>
</body>


</html> 