const Monstros = [
    {
        id: 1,
        nome: 'Rafael',
        altura: 2,
        habilidades: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, officiis.',
        foto: 'https://robohash.org/Rafael',

    },

    {
        id: 2,
        nome: 'Loianne',
        altura: 3,
        habilidades: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, officiis.',
        foto: 'https://robohash.org/Loianne',

    },

    {
        id: 4,
        nome: 'Devinho',
        altura: 4,
        habilidades: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, officiis.',
        foto: 'https://robohash.org/Devinho',

    },

    {
        id: 1,
        nome: 'Rex',
        altura: 5,
        habilidades: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, officiis.',
        foto: 'https://robohash.org/Rex',

    },
]

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click',  () =>{
    document.documentElement.classList.toggle('dark')
})

const TodosOsMonstros = Monstros.map( (Monstros) =>{
    return `<div>
        <p>Nome: ${Monstros.nome}</p>
        <p>Altura: ${Monstros.altura}</p>
        <p>Habilidades: ${Monstros.habilidades}</p>
        <img src="${Monstros.foto}"
</div>`
})

secao.innerHTML = TodosOsMonstros

