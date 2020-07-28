//write text


function writeTextByJS(id, text, speed){

	var ele = document.getElementById(id),
	    txt = text.join("").split(""); //str.join('') - создание строки из элементов массива,
	                                   //str.split('') - разбивка строки по буквам, 

	var interval = setInterval(function(){

		if(!txt[0]){

			return clearInterval(interval);
		};

		ele.innerHTML += txt.shift(); // ele.innerHTML = ele.innerHTML+txt.shift();
		                              // txt.shift() - по 1 элементу с начала массива 
	}, 

	speed != undefined ? speed : 100);

	return false;
};

//********************************************************

/*

//задержка рекурсивным методом:

function writeTextByJS(id, text, speed){

	var ele = document.getElementById(id),
	    txt = text.join("").split(""); //str.join('') - создание строки из элементов массива,
	                                   //str.split('') - разбивка строки по буквам, 

	var interval = setTimeout(function run(){

		if(!txt[0]){

			return clearInterval(interval);
		};

		ele.innerHTML += txt.shift(); // ele.innerHTML = ele.innerHTML+txt.shift();
		                              // txt.shift() - по 1 элементу с начала массива 
	
		setTimeout(run,100);
	}, 

	speed != undefined ? speed : 100);

	return false;
};

*/
