let card = document.querySelector(".eter");

function ativa(){
    document.querySelector('.olho').style.display = "block"
     document.querySelector('.view').style.display = "block"
      document.querySelector('.view').style.transition = "2s"
}

function desativa(){
     document.querySelector('.olho').style.display = "none"
     document.querySelector('.view').style.display = "none"
}


card.addEventListener('mouseover',ativa);
card.addEventListener('mouseleave',desativa);