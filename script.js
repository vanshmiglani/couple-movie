let about = document.getElementById('about')
let hidden = document.getElementById('hidden')

about.addEventListener('click', run= ()=>{
    if(hidden.style.display === 'none'){
        hidden.style.display = 'block'
        hidden.className = 'go_in'
    }
    else{
        hidden.style.display ='none'
    }
})

