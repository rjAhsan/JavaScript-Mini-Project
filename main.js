



const color_change_btn1=document.querySelector('#btn-1');
const color_change_btn2=document.querySelector('#btn-2');
const color_change_btn3=document.querySelector('#btn-3');
const h1=document.querySelector('#h1-1');
const myArray=['red','green','blue','pink','orange','yellow'];
const bg=document.querySelector('.container');
const h2=document.querySelector('#h1-2');




//form
const userList = document.querySelector('.items');
const myForm = document.querySelector('#my-form');
const name=document.querySelector('#name');
const email=document.querySelector('#email');
const msg=document.querySelector('.msg');

//delete item list 




myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
		  e.preventDefault();

		  if(name.value===''||email.value===''){
			msg.classList.add('error')
			msg.innerHTML="please Enter all the fileds"
             setTimeout(()=>{ msg.innerHTML=''  
		 	msg.classList.remove('error')},2200)
		}
		  else{
	const li = document.createElement('li');
	const button = document.createElement('Button');
	button.innerHTML='Delete';
	button.classList.add('btnsm');
	li.classList.add('item')
    //li.appendChild(document.createTextNode(`name=${name.value}email=${email.value}`));
    li.innerText="name"+"="+name.value+ " " + "email" +"="+email.value
  
    li.appendChild(button);
    userList.appendChild(li);
    name.value = '';
    email.value = '';
            msg.classList.add('success')
			msg.innerHTML="Data Added successfully"
		    setTimeout(()=>{ (msg.innerHTML='' ) 
		 	msg.classList.remove('success')},2200)

		  }
		

		console.log(name.value,email.value);	         


}
// var lists,y;
// //Remove List item 
// // setInterval( () => {  lists=document.querySelectorAll("li")



// console.log(lists.length)
// }, 3000);\


 setInterval( y=() =>{
   const lists=document.querySelectorAll("li") 
   // console.log(lists.length)
  return lists

	},3000);
 
 

 
var lists=y();

if (lists.length > 0){

 lists.forEach( e => {
	//console.log(e.lastElementChild)
   e.lastElementChild.addEventListener('click',el => {
   	el.preventDefault();
   	 //console.log(el.target.parentNode.innerHTML);
	//el.target.parentNode.remove();
    console.log(el.target.innerText)
   }); 	
                // e.target.parentElement.remove();
                // console.log(val);
               
           });
}

else{
console.error("NOt ound anty lists ite ")

}


//function to change the random color of headers and form background 

color_change_btn1.addEventListener('click', e => {
	var rand_1 = myArray[Math.floor(Math.random() * myArray.length)];
   	var rand_2 = myArray[Math.floor(Math.random() * (myArray.length)*2)];
   
   h1.style.background=rand_1; 
   bg.style.background=rand_2;

   console.log(rand_1,rand_1)

});

//function to change the font of Add User Data

color_change_btn2.addEventListener('mouseover',e=>{
 const valtext=h2.innerText
 h2.innerHTML="<h6>" +valtext+  "</h6>"
 console.log(h2.innerText,"Small");

});

//function to change the font of Add User Data
color_change_btn3.addEventListener('mouseover',e=>{
const valtext2= h2.innerText
h2.innerHTML="<h1>" +valtext2+ "</h1>"
console.log(h2.innerText,"large");

});






