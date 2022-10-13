const items = document.querySelectorAll('li')

items.forEach((item)=>{
    item.addEventListener('click',()=>{
        /* alert('Esta etiqueta dice: '+item.innerHTML) */
       item.classList.toggle('delegacion')
    })
})
