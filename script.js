const card = document.querySelector('.card');

showSide = {
    front: '',
    back: 'rotateY(180deg)'
}

function sideChange(event){
    if(card.style.transform === showSide.front){
        card.style.transform = showSide.back;
    } else {
        card.style.transform = showSide.front;
    }
}

card.addEventListener('click',sideChange);


// info intersection observer
const info = document.querySelectorAll(".info");

const observer = new IntersectionObserver(
    entries => {        // callback
        entries.forEach(entry =>{
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    },
    {   //object
        root: null,
        threshold: 0.5,
    }
);

info.forEach(content => {
    observer.observe(content)
})

let buttons = document.querySelectorAll('.iconos');
let reset = document.getElementById('reset');

function resetAllIcons(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].checked = false;
        document.querySelector('.window').style.opacity = '0';
    }
}

reset.onclick = resetAllIcons;

