function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //adicionar a tag img
    const img = document.querySelector("#profile img")

    //substituir a img
    if (html.classList.contains("light")) {
        //se estiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/assets/assets/avatar-light.png")
        img.setAttribute("alt", "foto de mayke brito sorrindo de oculos escuro e camiseta preta, fundo azul")
    } else {
        //se estiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/assets/assets/avatar.png")
        img.setAttribute("alt", "foto de mayke brito sorrindo de oculos e camiseta preta, barba, fundo amarelo")
    }


    /* a opção alternativa abaixo é substituida pela função pronta chamada
      toggle.
      lembrando que no JS existem OBJETOS que são dividos em 2. 
      tudo ou quase tudo pode ser entendido como OBJETO.
  
      ATRIBUTOS que são as propriedades de um objeto.
      MÉTODOS que são as funcionaliudades de um objeto.
      
      Exemplo.
      Celular é um OBJETO
      peso de 200 gramas é um ATRIBUTO cor preta um ATRIBUTO. Largura é um atributo, etc.
      Conectar a internet é um MÉTODO, fazer uma ligação é uma FUNCIONALIDADE(MÉTODO), etc.
      */

    /* if (html.classList.contains("light")){
            html.classList.remove("light")
        } else{
            html.classList.add("light")
        }*/

    /*isso é uma maneira de DISPARAR eventos, existem outras.*/
    /*agora vamos aprender a trocar a imagem*/
    /*Fica de exercicio alterar o ALTERNATIVE*/

}