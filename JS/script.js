function criarartes(event) {
    event.preventDefault()
    let nome = document.querySelector('#nome').value
    let artista = document.querySelector('#artista').value
    let imagem = document.querySelector('#imagem').value
    let list = document.querySelector('#lista-album')
  
    // terms of use
    let assentiu = document.getElementById('termos').checked
  
    // genres
    let generos = Array.from(document.querySelectorAll("input[type='radio']"))
    const genero = generos.find((genero) => genero.checked).value
  
    const novaarte = document.createElement('div')
    novaarte.setAttribute('class', 'album')
    novaarte.innerHTML = `
      <div class="imagem-container">
        <img src="${imagem}"/>
      </div>
      <h3>${nome}</h3>
      <h4>${artista}</h4>
    `
    list.appendChild(novaarte)
    console.log(novaarte)
  }
  
  let botao = document.querySelector('#botao')