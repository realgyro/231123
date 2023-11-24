let buttons = document.querySelectorAll('.iconos');
let reset = document.getElementById('reset');

function resetAllIcons(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].checked = false;
    }
}

reset.onclick = resetAllIcons;