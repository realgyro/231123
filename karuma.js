let iconos = document.querySelectorAll('.iconos');
let fakeWindow = document.querySelector('.window');
let windowLeft = document.querySelector('.windowLeft');
let windowRight = document.querySelector('.windowRight');

fakeWindow.style.opacity = 0;

let fc = {
    img: 'resources/maxresdefault.jpg',
    title: 'NCT Fanclub',
    desc: 'A resgister/sign in fanclub made for interaction and sharing',
    tech: ['dir.ico', 'wrl.ico', 'class.ico'],
    gh: 'https://fonts.google.com/',
}

let ecommerce = {
    img: 'resources/joggocard.jpg',
    title: 'JOGGO DOUGH',
    desc: 'An e-commerce website for a bakery',
    tech: ['ocx.ico', 'dir.ico', 'class.ico'],
    gh: 'https://fonts.google.com/',
}

let cheatsheet = {
    img: 'resources/mypicture.jpg',
    title: 'Cheat Sheet',
    desc: 'A media queries cheat sheet',
    tech: ['wrl.ico', 'class.ico', 'ocx.ico'],
    gh: 'https://fonts.google.com/',
}

let windowFactory = {
    crearElemento (obj, className) {
        let image = document.createElement('img');
        let title = document.createElement('h3');
        let desc = document.createElement('p');
        let tech = document.createElement('div');
        let gh = document.createElement('a')

        image.className = 'project-image ' + className;
        image.src = obj['img'];
        image.alt = 'A project preview.';
        windowLeft.appendChild(image);

        title.className = 'project-title ' + className;
        title.innerHTML = obj['title'];

        desc.className = className;
        desc.id = 'project-desc'; //needs to be ID to override other rules
        desc.innerHTML = obj['desc'];

        tech.className = 'project-tech ' + className;
        obj['tech'].forEach(element => {
            tech.innerHTML += `<img src="resources/${element}">`;
        })

        gh.className = 'project-gh ' + className;
        gh.href = obj['gh'];
        gh.target = '_blank'
        gh.innerHTML = '<svg id="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>';
        
        windowRight.appendChild(title);
        windowRight.appendChild(desc);
        windowRight.appendChild(tech);
        windowRight.appendChild(gh);
    }
}

let newObject = windowFactory.crearElemento(ecommerce, 'e-commerce');
let newObject2 = windowFactory.crearElemento(fc, 'fanclub');
let newObject3 = windowFactory.crearElemento(cheatsheet, 'cheatsheet')


function whichIsPushed () {
    let newArray = [];
    for(let i = 0; i < buttons.length; i++){
        newArray.push(buttons[i].checked);
    }
    return newArray;
}

let allEcommerce = document.querySelectorAll('.e-commerce');
let allFanclub = document.querySelectorAll('.fanclub');
let allCheatsheet = document.querySelectorAll('.cheatsheet');

const hideElements = (array => {
    array.forEach(element => {
        element.style.display = 'none';
    })
})

const displayElements = (array => {
    array.forEach(element => {
        element.style.display = 'block';
    })
})

const showContents = () => {
    let selectionArray = whichIsPushed();
    let index = selectionArray.findIndex(element => element === true)
    fakeWindow.style.opacity = 1;
    switch(index){
        case 0:
            hideElements(allCheatsheet);
            hideElements(allEcommerce);
            displayElements(allFanclub);
            break;
        case 1:
            hideElements(allFanclub);
            hideElements(allCheatsheet);
            displayElements(allEcommerce);
            break;
        case 2:
            hideElements(allFanclub);
            hideElements(allEcommerce);
            displayElements(allCheatsheet);
            break;
        default:
            hideElements(allFanclub);
            hideElements(allEcommerce);
            hideElements(allCheatsheet);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', showContents);
});

let date = new Date().toLocaleDateString();
let time = date.getHours() + ':' + date.getMinutes() + ':' + today.getSeconds();