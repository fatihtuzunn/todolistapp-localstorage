const input = document.getElementById('input');
const form = document.getElementById('form');
var ul = document.querySelector(ul);
var itemsArray = [];
itemsArray=JSON.parse(localStorage.getItem('items'));
/* Submite basıldığında değeri localstorage yazdırdık.
   Localstorage'daki değerleri de listeledik. */


function limake(a){
    const li = document.createElement('li');
    
    ul.appendChild(li);


}






   form.addEventListener('submit', function (e) {
    console.log(input.value);
     itemsArray.push(input.value); 
    localStorage.setItem('items', JSON.stringify(itemsArray));
    /* limake(input.value);
    input.value = ""; */
});