window.onclick = function () {

    var selected = window.location.href.indexOf('#')
    var value = parseInt(window.location.href.substring(selected + 1))

    SelectText(value);
}

function SelectText(value) {
    var title = document.getElementById('Title')
    var text = document.getElementById('Text')
    title.innerHTML = ''
    text.innerHTML = ''
    switch (value) {
        case 1:
            title.innerHTML = 'Historias de Miedo'
            text.innerHTML = `
            <ul><li><div>
            <p>${LoveCraft.name}</p><p>${LoveCraft.author}</p>
            <img src="${LoveCraft.img}">
            </div></li>
            <li><div>
            <p>${It.name}</p><p>${It.author}</p>
            <img src="${It.img}">
            </div></li>
            </ul>`
            break;
        case 11:
            title.innerHTML = `${LoveCraft.name} - ${LoveCraft.author} `
    text.innerHTML = LoveCraft.desc
            break;
        case 12:
            title.innerHTML = `${It.name} - ${It.author} `
    text.innerHTML = It.desc
            break;

        case 2:
            title.innerHTML = 'Historias de SciFi/Fantasia'
            text.innerHTML = `
                <ul><li><div>
                <p>${Warcraft.name}</p><p>${Warcraft.author}</p>
                <img src="${Warcraft.img}">
                </div></li>
                <li><div>
                <p>${StarWars.name}</p><p>${StarWars.author}</p>
                <img src="${StarWars.img}">
                </div></li>
                <li><div>
                <p>${LotR.name}</p><p>${LotR.author}</p>
                <img src="${LotR.img}">
                </div></li>
                </ul>`
            break;
        case 21:
            title.innerHTML = `${StarWars.name} - ${StarWars.author} `
    text.innerHTML = StarWars.desc
            break;
        case 22:
            title.innerHTML = `${LotR.name} - ${LotR.author} `
    text.innerHTML = LotR.desc
            break;
        case 23:
            title.innerHTML = `${Warcraft.name} - ${Warcraft.author} `
    text.innerHTML = Warcraft.desc
            break;
        case 3:
            title.innerHTML = 'Historias de SciFi/Fantasia'
            text.innerHTML = `
                <ul><li><div>
                <p>${BelowStar.name}</p><p>${BelowStar.author}</p>
                <img src="${BelowStar.img}">
                </div></li>
                <li><div>
                <p>${Crepusculo.name}</p><p>${Crepusculo.author}</p>
                <img src="${Crepusculo.img}">
                </div></li>
                </ul>`
            break;

        case 31:
            title.innerHTML = `${Crepusculo.name} - ${Crepusculo.author} `
    text.innerHTML = Crepusculo.desc
            break;
        case 32:
            title.innerHTML = `${BelowStar.name} - ${BelowStar.author} `
    text.innerHTML = BelowStar.desc
            break;
    }
}

LoveCraft = {
    name: 'Call of Cthulhu',
    author: 'H.P. Lovecraft',
    img: "./imgs/chtulhu.jpg",
    desc: "El narrador de esta historia comienza una insólita investigación tras la muerte en extrañas circunstancias de su tío abuelo George Gammell Angell, profesor de lenguas semíticas en la Universidad de Brown.  Siguiendo los pasos de su tío, así como los de otros personajes vinculados a él por sus oscuros estudios, el narrador entra en contacto con un material de lo más sensible: unas horripilantes historias que giran en torno a un arcano monstruo o ser cósmico llamado Cthulhu que amenaza la cordura y la vida de cuantos son conscientes de su existencia."
}

It = {
    name: 'IT (ESO)',
    author: 'Stephen King',
    img: "./imgs/it.jpg",
    desc: "¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano? ¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela. Tras veintisiete años de tranquilidad y lejanía una antigua promesa infantil les hace volver al lugar en el que vivieron su infancia y juventud como una terrible pesadilla. Regresan a Derry para enfrentarse con su pasado y enterrar definitivamente la amenaza que los amargó durante su niñez. Saben que pueden morir, pero son conscientes de que no conocerán la paz hasta que aquella cosa sea destruida para siempre. It es una de las novelas más ambiciosas de Stephen King, donde ha logrado perfeccionar de un modo muy personal las claves del género de terror."
}
Warcraft = {
    name: 'Warcraft',
    author: 'Duncan Jones',
    img: "./imgs/wow.jpg",
    desc: "El pacífico reino de Azeroth está a punto de entrar en guerra para enfrentarse a unos terribles invasores: guerreros orcos que han dejado su moribundo mundo para colonizar otro. Al abrirse un portal que conecta ambos mundos, el ejército de los hombres se enfrenta a la destrucción, mientras que el mundo de los orcos intenta evitar su extinción. Dos héroes, uno en cada bando, están a punto de chocar en un enfrentamiento que cambiará el destino de sus familias, sus hogares y sus pueblos."
}
StarWars = {
    name: 'Star Wars',
    author: 'George Lucas',
    img: "./imgs/starWars.jpg",
    desc: "La historia de las guerras galacticas donde la orden Jedi busca desterrar a los Sith de la existencia, para mantener un equilibrio en la Fuerza, pero el lado oscuro es una enemiga facil de abrazar por la corrupcion que esta genera al practicar sus tecnicas."
}
LotR = {
    name: 'Lord of the Rings',
    author: 'J.R.R Tolkien',
    img: "./imgs/LotR.jpg",
    desc: "Su historia se desarrolla en la Tercera Edad del Sol de la Tierra Media, un lugar ficticio poblado por hombres y otras razas antropomorfas como los hobbits, los elfos o los enanos, así como por muchas otras criaturas reales y fantásticas. La novela narra el viaje del protagonista principal, Frodo Bolsón, hobbit de la Comarca, para destruir el Anillo Único y la consiguiente guerra que provocará el enemigo para recuperarlo, ya que es la principal fuente de poder de su creador, el Señor oscuro Sauron."
}
Crepusculo = {
    name: 'Crepusculo',
    author: 'Matt Reeves',
    img: "./imgs/batman.jpg",
    desc: "Ciudad Gótica tiene un par de años bajo el cobijo de un justiciero enmascarado conocido como Batman. Este vigilante ha logrado imponer sus reglas en los oscuros callejones de la ciudad, por lo que una vez que su señal brilla en el cielo, los criminales lo piensan dos veces antes de salir de sus escondites. Sin embargo, este par de años solo han servido como entretenimiento para el vigilante, pues la teatralidad en sus actos de venganza ha comenzado a inspirar a las mentes más peligrosas de Gótica. Tras un importante operativo contra el crimen organizado en la ciudad, un misterioso villano comienza a desenmascarar la verdad sobre dicha proeza, señalando la corrupción y las mentiras de todos los involucrados… dejando un rastro de sangre que parece no tener fin."
}
BelowStar = {
    name: 'Bajo la misma estrella',
    author: 'John Green',
    img: "./imgs/belowStar.jpg",
    desc: "Hazel tenía un libro favorito el cual compartió con Augustus titulado Un dolor imperial, escrito por Peter Van Houten, un bohemio norteamericano que residía en Ámsterdam, quien no solía dar conferencias de prensa ni responder las cartas de sus admiradores. Él les responde que no les dirá que ocurre después del final de Un dolor imperial a no ser que se vean en persona, por lo que los invita a viajar a Ámsterdam. Lo cual, lleva a Gus a utilizar el deseo que la fundación The Genies les entrega a los niños con cáncer y decide usarlo para viajar con Hazel a Ámsterdam, a conocer al autor de la maravillosa novela. Después de recibir el alta y algunas consultas a sus doctores, Hazel consigue el permiso para viajar a Ámsterdam con su madre y con Gus."
}