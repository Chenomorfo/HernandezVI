document.getElementById('getBtn').addEventListener('click',async()=>{
    //console.log('hola')
    const data = await (await fetch('./data.php')).json()
    console.log(data)
    document.getElementById('firstName').value = data.name
    document.getElementById('phone').value = data.phone

    

})