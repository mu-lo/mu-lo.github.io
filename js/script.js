
let Nav = document.querySelector('.Nav');
let Navlist = document.querySelector('.Navlist')

window.onscroll = function(){myFunction()}

document.querySelector('#menu-btn').onclick = () =>{
    Navlist.classList.toggle('active');
}

document.querySelector('#menu-cross').onclick =()=>{
    Navlist.classList.remove('active');
}

Navlist.addEventListener('click',()=>{
    Navlist.classList.remove('active');
})


var sticky = navbar.offsetTop;

function myFunction(){
    if(window.pageYOffset >= sticky){
        Nav.classList.add('sticky');
    }else{
        Nav.classList.remove('sticky');
    }
}