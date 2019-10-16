const color_change_btn1=document.querySelector('#btn-1');
const color_change_btn2=document.querySelector('#btn-2');
const color_change_btn3=document.querySelector('#btn-3');
const h1=document.querySelector('#h1-1');
const myArray=['red','green','blue','pink','orange','yellow'];
const bg=document.querySelector('.container');
const h2=document.querySelector('#h1-2');




//form
const userList = document.querySelector('#users');
const myForm = document.querySelector('#my-form');
const name=document.querySelector('#name');
const email=document.querySelector('#email');
const msg=document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
		  e.preventDefault();

		  if(name.value===''||email.value===''){
			msg.classList.add('error')
			msg.innerHTML="please Enter all the fileds"
			setTimeout(()=> msg.remove(),2200)
		}

		  else{
	const li = document.createElement('li');
	const button = document.createElement('button');
    li.appendChild(document.createTextNode(`${name.value}: ${email.value}   `  ));
    li.appendChild(button);
    userList.appendChild(li);
    name.value = '';
    email.value = '';
            msg.classList.add('success')
			msg.innerHTML="Data Added successfully"
		    setTimeout(()=> msg.remove(),2200)


		  }
		

		console.log(name.value,email.value);	         


}







color_change_btn1.addEventListener('click', e => {
	var rand_1 = myArray[Math.floor(Math.random() * myArray.length)];
   	var rand_2 = myArray[Math.floor(Math.random() * (myArray.length)*2)];
   
   h1.style.background=rand_1; 
   bg.style.background=rand_2;

   console.log(rand_1,rand_1)

});

color_change_btn2.addEventListener('mouseover',e=>{

valtext=h2.innerHTML
h2.innerHTML="<h6>" +valtext+  "</h6>"
console.log(h2.innerText,"Small");

});

color_change_btn3.addEventListener('mouseover',e=>{

valtext2= h2.innerHTML
h2.innerHTML="<h1>" +valtext2+ "</h1>"
console.log(h2.innerText,"large");

});








