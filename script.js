const input = document.querySelector('input');
const lista = document.querySelector('li');

input.addEventListener('keyup', enter);

function enter(e){
    if(e.key === 'Enter'){
        lista.innerHTML +='<li>'+ input.value +'</li></br>';

        input.value = ' '
    }
}