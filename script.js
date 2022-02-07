const input = document.getElementById('input');
const form = document.getElementById('form');
const list =document.getElementById('list');
var ul = document.querySelector(ul);
var itemsArray = [];

/* Submite basıldığında değeri localstorage yazdırdık.
   Localstorage'daki değerleri de listeledik. */


/* function limake(a){
    const li = document.createElement('li');
    
    ul.appendChild(li);


} */






   form.addEventListener('submit', function (e) {
       e.preventDefault();
    
     itemsArray.push(input.value); 
    localStorage.setItem('items', JSON.stringify(itemsArray));
    itemsArray=JSON.parse(localStorage.getItem('items'));
    list.innerHTML = itemsArray.join('\n');
    /* limake(input.value);
    input.value = ""; */
});