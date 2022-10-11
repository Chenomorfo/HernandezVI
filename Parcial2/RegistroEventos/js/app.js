const items = document.querySelectorAll('li')

items.forEach((item)=>{
    item.addEventListener('click',()=>{
        /* alert('Esta etiqueta dice: '+item.innerHTML) */
        document.getElementById('evento').innerHTML = 'Esta etiqueta dice: '+item.innerHTML
    })
})

console.log(items)