"use strict"
/* Как только страничка загрузилась */
window.onload = function () { 
	/* проверяем поддерживает ли браузер FormData */
if(!window.FormData) { alert("Браузер не поддерживает загрузку файлов на этом сайте"); } }

console.clear();

const registerUrl="mail.php";
let form=document.forms;
let registerForm=form.register;
let contactnameField=registerForm.elements.contactname;
let emailField=registerForm.elements.email;
let userMessageField=document.getElementById('message');


registerForm.addEventListener('submit', (event)=>{
	event.preventDefault();


let contactname=registerForm.contactname.value;
let email=registerForm.email.value;
let userMessage=userMessageField.value; 

let userFormData = new FormData(registerForm);//конструктор, который позволяет доставать данные из формы и удобно отправлять их на сервер

for (let field of userFormData) {
  console.log(field);
}


let resultPromise = new Promise ((resolve, reject) => {
fetch(registerUrl, { //промис дожидается fetch-отправки данных на сервер; resolve - функция, которая будет выполнена, когда код завершится удачно
	method: 'POST',
    body: userFormData
    
})
.then(responce => {
	resolve(responce.text());//}//ответ-текстовый файл
})

	.catch(error => {
	reject(error)
})
});


//ответ от сервера - когда срабатывает обработчик промиса
 
resultPromise
.then(responce => {
	alert('Спасибо, сообщение  	отправлено!')//функция-обработчик
})
	.catch(error => alert('Ошибка! Сообщение не отправлено!'))
})