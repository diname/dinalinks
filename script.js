function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light')
    
    // pegar a tag img
    const img = document.querySelector('#profile img')
    

    // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src','./assets/lucas-medina-light.png')
        img.setAttribute('alt',"Minha foto light mode")
    } else {
        // se tiver sem light mode, adicionar a imagem light
       img.setAttribute('src','./assets/lucas-medina.jpeg')
    }


    // TERNARIO para o toggle
    
    // html.classList.contains('light') 
    // ? html.classList.remove('light') 
    // : html.classList.add('light')





}