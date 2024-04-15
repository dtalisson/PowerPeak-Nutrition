if(document.readyState === "loading") { 
    document.addEventListener("DOMContentLoaded", ready) 
} else { 
    ready()
}
let totalAmount = ""
function ready(){
    const removeProduct = document.getElementsByClassName("buttonRemove")  // variavel do button remove
    for (var i = 0; i < removeProduct.length; i++) {
    removeProduct[i].addEventListener("click", removeProduto)
}
    const qtdInputs = document.getElementsByClassName("inputNumber")
    for (let i = 0; i < qtdInputs.length; i++) {
        qtdInputs[i].addEventListener("change",chefNumberNull)     
    }
    const addCart = document.getElementsByClassName("buttonAdd")
    for (let i = 0; i < addCart.length; i++) {
        addCart[i].addEventListener("click", addProduct)      
    }
    const buttonSucesso = document.getElementsByClassName("buttonSucess")[0]
    buttonSucesso.addEventListener("click", sucessItem)
}
// funções. 
function sucessItem() { 
    if(totalAmount === "0,00") { 
         alert(`
         Infelizmente seu carrinho de compras está vázio.
         Verifique novamente.       
         `) 
         } else {
            alert(`
            Obrigado pela sua compra!
            Valor do seu pedido: R$${totalAmount}
            Nos contate no botão abaixo para confirmar seu item.
            
            `) 
            
         }
    }


function chefNumberNull(event) { 
    if(event.target.value === "0" ) { 
        event.target.parentElement.parentElement.remove()
    }
    updateTotal()
}
// função de checar caso não tiver nenhuma quantidade > remover o item.
function addProduct(event) { 
    const button = event.target
    const produtoInfo = button.parentElement.parentElement.parentElement
    const produtoImage = produtoInfo.getElementsByClassName("productImage")[0].src
    const produtoNome =  produtoInfo.getElementsByClassName("nomeProduto")[0].innerText
    const produtoPrice = produtoInfo.getElementsByClassName("precoProduto")[0].innerText

    const productTitle = document.getElementsByClassName("nomeItem")
    for (let i = 0; i < productTitle.length; i++) {
        if(productTitle[i].innerText === produtoNome) { 
            productTitle[i].parentElement.parentElement.getElementsByClassName("inputNumber")[0].value++
            updateTotal()
            return
        }
        
    }    
    let newCartProduto = document.createElement("div")
    newCartProduto.classList.add("box-menu")

    newCartProduto.innerHTML = 
    `
    <div class="box-img">
    <img src="${produtoImage}" alt="">
        </div>
        <div class="box-inf">
            <span class="nomeItem">${produtoNome}</span>
            <span class="precoItem">${produtoPrice}</span>
        </div>
        <div class="qtd">
            <label for="inputNumber">QTD</label>
            <input type="number" class="inputNumber" value="1" min="0">
        </div>
        <div class="remove">
            <button type="button" class="buttonRemove"><i class='bx bxs-coffee-togo'></i></button>  
        </div>
    `
    const tBody = document.querySelector(".quadrado")
    tBody.append(newCartProduto)
    newCartProduto.getElementsByClassName("inputNumber")[0].addEventListener("change", chefNumberNull)
    newCartProduto.getElementsByClassName("buttonRemove")[0].addEventListener("click",removeProduto)
    updateTotal()

    document.getElementById("nav").classList.add("active");
    document.getElementById("header").scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });}

// função de pegar os dados e adicionar o item no carrinho de compras.

function removeProduto(event) { 
    event.target.parentElement.parentElement.parentElement.remove()
    updateTotal()
}
// FUNÇÃO DE PROCURAR O ITEM CLICADO E REMOVER.

function updateTotal () {  
 totalAmount = 0 // 
    const cardProduct = document.getElementsByClassName("box-menu") // variavel do card do produto
for (let i = 0; i < cardProduct.length; i++) {
    //   console.log(cardProduct[i])

    const precoProduto = cardProduct[i].getElementsByClassName("precoItem")[0].textContent.replace("R$","").replace(",",".")
    //  console.log(precoProduto) 
    const qtdProduto = cardProduct[i].getElementsByClassName("inputNumber")[0].value
    // console.log(qtdProduto)
    totalAmount += precoProduto * qtdProduto 
}
totalAmount = totalAmount.toFixed(2)
totalAmount = totalAmount.replace(".",",")
document.querySelector(".totalPriceProduct").innerText = "R$" + totalAmount
}
// função de pegar os dados do card [valor e a quantidade // e fazer a soma deles com o resultado.]
updateTotal()

