const menuBar = document.querySelector('.menubar')
menuBar.addEventListener('click', ()=>{
    const navbarsm = document.querySelector('.navbarsm')
    const currentDisplay = navbarsm.computedStyleMap.display
    if(currentDisplay == 'none') {
        navbarsm.computedStyleMap.display = 'block'
    }
    else{
        navbarsm.computedStyleMap.display = 'none'
    }
})