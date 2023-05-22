let button = document.querySelector('button');

function changeColor(event){
    event.target.style.backgroundColor = "hsl(212, 21%, 14%)"
}
function returnColor(event){
    event.target.style.backgroundColor = ''
}

button.addEventListener('mouseover', changeColor)
button.addEventListener('mouseout', returnColor)