let botao = document.getElementById('button')
let tarefa = document.getElementById('tarefa')
let lista = document.getElementById('list')

botao.addEventListener('click', function() {
    let paragrafo = document.createElement('p')
    paragrafo.innerHTML = tarefa.value
    paragrafo.classList.add('estilo-paragrafo')
    lista.appendChild(paragrafo)

    paragrafo.addEventListener('click', function() {
        paragrafo.style.textDecoration = 'line-through'
    })

    paragrafo.addEventListener('dbclick', function() {
        paragrafo.removeChild(paragrafo);
    })
})
