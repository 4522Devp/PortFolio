
const ham= document.querySelector('.Humburger');
const navL= document.querySelector('.nav-links');
const links= document.querySelector('.nav-links a');

function togglemenu(){
    ham.classList.toggle('active');
    navL.classList.toggle('active');
}

// close menu

function closemenu(){
    ham.classList.remove('active');
    ham.classList.remove('active');
}

// event listner
ham.addEventListener('click',togglemenu);