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
const close = document.getElementById('close');
const product_1 = document.getElementById('product1');
const product_2 = document.getElementById('product2');
const banner_ = document.getElementById('banner3');


if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}

if(product1){
    product_1.addEventListener('click', () =>{
        window.location.href='singleproduct.html';
    })
}

if (product2) {
    product_2.addEventListener('click', ()=> {
        window.location.href='singleproduct.html'
    })
}

if(banner3){
    banner_.addEventListener('click',()=>{
        window.location.href='shop.html'
    })
}