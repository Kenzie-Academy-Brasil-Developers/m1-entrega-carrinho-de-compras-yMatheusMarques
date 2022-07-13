const productsCart = [
    {
        id: 1,
        name: "Cadeira Gamer",
        price: 1600
    },

    {
        id: 2,
        name: "Notebook Dell Ispirion 15 3000",
        price: 4000
    },

    {
        id: 3,
        name: "Processador Intel core I9 10****",
        price: 3000
    },

    {
        id: 4,
        name: "Nvidea Geforce Rtx 3090",
        price: 17800
    },

    {
        id: 5,
        name: "Fone de ouvido Astro Gaming A50",
        price: 3000
    },

    {
        id: 6,
        name: "Macbook M2",
        price: 60000
    }
]

let body = document.getElementsByTagName('body')[0] // precisa do indice ou ocorrera um erro
let main = document.createElement('main')
let tittle = document.createElement('h1')
let subTittle = document.createElement('h2')
let productList = document.createElement('ul')


main.appendChild(productList)
body.appendChild(tittle)
body.appendChild(subTittle)
body.appendChild(main)

tittle.innerText = "Loja"
subTittle.innerText = "Seu carrinho"

for( let i = 0; i < productsCart.length; i++){
    let productItem = document.createElement('li')
    let p = document.createElement('p')

    p.innerHTML = `${productsCart[i].name} - R$ ${productsCart[i].price} `

    productItem.appendChild(p)
    productList.appendChild(productItem)   
}

function soma(){
    
    let valorTotal = 0

    for(let i = 0; i < productsCart.length; i++){
        valorTotal += productsCart[i].price
    }
    return valorTotal
}

let productDetails = document.createElement('section')
productDetails.innerHTML = `Total: R$ ${soma()} `

main.appendChild(productDetails)

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br
let quebraLinha = document.createElement('br')

productDetails.appendChild(quebraLinha)

let buttonEnd = document.createElement('button')
buttonEnd.innerHTML = "Finalizar Compra"

productDetails.appendChild(buttonEnd)


