function listProduct (products) {
    const productsDivs = document.querySelector('.products')
    productsDivs.innerHTML = ""
    
    products.forEach((product) => {
        const blockProduct = document.createElement("div")
        blockProduct.className = "products__product"
        const id = document.createElement("span")
        id.textContent = `Id: ${product.id}`
        const name = document.createElement("h3")
        name.textContent = `${product.name}`
        const price = document.createElement("span")
        price.textContent = `${product.price}`
        const category = document.createElement("span")
        category.textContent = `Категория: ${product.category}`
        const description = document.createElement("p")
        description.textContent = `О товаре: ${product.description}`
        
        blockProduct.append(id)
        blockProduct.append(name)
        blockProduct.append(price)
        blockProduct.append(category)
        blockProduct.append(description)
        
        document.querySelector('.products').append(blockProduct)
    })
}

function updateVisibleProducts() {
    let visibleProducts = products.slice()

    if(selectCategory.value == "smartphones") {
        visibleProducts = visibleProducts.filter((product) => product.category == "Смартфоны")
    }
    else if(selectCategory.value == "laptops") {
        visibleProducts = visibleProducts.filter((product) => product.category == "Ноутбуки")
    }
    else if(selectCategory.value == "accessories") {
        visibleProducts = visibleProducts.filter((product) => product.category == "Аксессуары")
    }

    if(selectSort.value == "cheap") {
        visibleProducts.sort((product1,product2) => product1.price - product2.price)
    }
    else if(selectSort.value == "dear") {
        visibleProducts.sort((product1,product2) => product2.price - product1.price)
    }

    listProduct(visibleProducts)
}

function genereteFindProduct(findProduct) {
    const blockProduct = document.createElement("div")
    blockProduct.className = "search-products__product"
    const id = document.createElement("span")
    id.textContent = `Id: ${findProduct.id}`
    const name = document.createElement("h3")
    name.textContent = `${findProduct.name}`
    const price = document.createElement("span")
    price.textContent = `${findProduct.price}`
    const category = document.createElement("span")
    category.textContent = `Категория: ${findProduct.category}`
    const description = document.createElement("p")
    description.textContent = `О товаре: ${findProduct.description}`
    
    blockProduct.append(id)
    blockProduct.append(name)
    blockProduct.append(price)
    blockProduct.append(category)
    blockProduct.append(description)

    return blockProduct
}

const selectCategory = document.querySelector(".category")
const selectSort = document.querySelector(".sort")

const products = [
    { id: 1, name: "iPhone 14", price: 999, category: "Смартфоны", description: "придумай сам" },
    { id: 2, name: "MacBook Pro", price: 1999, category: "Ноутбуки", description: "придумай сам" },
    { id: 3, name: "AirPods Pro", price: 249, category: "Аксессуары", description: "придумай сам" },
    { id: 4, name: "Samsung Galaxy S23", price: 899, category: "Смартфоны",description: "придумай сам" },
    { id: 5, name: "Asus ROG", price: 1599, category: "Ноутбуки",description: "придумай сам" }
];
listProduct(products)
selectCategory.onchange = updateVisibleProducts
selectSort.onchange = updateVisibleProducts   


const blockSearch = document.createElement("div")
blockSearch.className = "search-products"
blockSearch.style.marginTop = "40px"
const input = document.createElement("input")
input.style.width = "300px"
input.style.height = "30px"
input.style.border = "2px solid rgb(31, 31, 31)"
input.style.borderRadius = "8px"
input.style.margin = "0px 30px"
input.placeholder = "Введите Id товара"
const buttonSearch = document.createElement("button")
buttonSearch.className = "search-products__button-search"
buttonSearch.textContent = "Найти"
buttonSearch.style.height = "30px"
buttonSearch.style.width = "60px"
buttonSearch.style.border = "2px solid rgb(31, 31, 31)"
buttonSearch.style.borderRadius = "8px"
const foundProduct = document.createElement("div")
foundProduct.className = "search-products__found-product"

blockSearch.append(input)
blockSearch.append(buttonSearch)
blockSearch.append(foundProduct)

document.body.append(blockSearch)

buttonSearch.onclick = () => {
    foundProduct.innerHTML = ""
    const findProduct = products.find((product) => product.id == input.value)
    if(findProduct) {
        const blockProduct = genereteFindProduct(findProduct)
        document.querySelector('.search-products__found-product').append(blockProduct)
    } else {
        const answer = document.createElement("h3")
        answer.textContent = `Такого продукта нет`
    
        document.querySelector('.search-products__found-product').append(answer)
    }
}
