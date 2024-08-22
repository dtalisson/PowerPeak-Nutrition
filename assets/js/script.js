const btnMobile = document.querySelector("#btn-mobile")



function toggleMenu() { 
    const nav = document.querySelector("#nav")
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const btnMobile = document.getElementById("btn-mobile");
    const icon = btnMobile.querySelector("i");

    // Adiciona um event listener para o botão mobile
    btnMobile.addEventListener("click", function(event) {
        event.stopPropagation(); // Impede que o clique no botão propague para o documento
        menu.classList.toggle("active"); // Altera a classe para "active"

        // Altera o ícone do botão mobile
        if (menu.classList.contains("active")) {
            icon.classList.remove("bx-menu");
            icon.classList.add("bx-x");
        } else {
            icon.classList.remove("bx-x");
            icon.classList.add("bx-menu");
        }
    });

    // Adiciona um event listener para detectar cliques fora do menu
    window.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && event.target !== btnMobile) {
            menu.classList.remove("active"); // Remove a classe "active"
            icon.classList.remove("bx-x");
            icon.classList.add("bx-menu");
        }
    });
});


let botaoClick = document.querySelector('.botaoClick');
let conteudo1 = document.querySelector('.conteudo');

botaoClick.addEventListener('click', function() { 
    if(conteudo1.style.display === 'block') { 
        conteudo1.style.display = 'none'
    } else { 
        conteudo1.style.display = 'block'
    }
})