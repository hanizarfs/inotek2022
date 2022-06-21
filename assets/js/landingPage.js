/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY > 0) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*========================= TOGGLE MENU ============================*/ 
const navOpen = document.getElementById('menuOpen')
const navClose = document.getElementById('menuClose')
const navMenu = document.getElementById('menu')

/*===== MENU SHOW =====*/
if(navOpen){
    navOpen.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

