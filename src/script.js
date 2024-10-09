// const menuBar = document.querySelector('.menubar')
// menuBar.addEventListener('click', ()=>{
//     const navbarsm = document.querySelector('.navbarsm')
//     const currentDisplay = navbarsm.computedStyleMap.display
//     if(currentDisplay == 'none') {
//         navbarsm.computedStyleMap.display = 'block'
//     }
//     else{
//         navbarsm.computedStyleMap.display = 'none'
//     }
// })

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}