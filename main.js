const selectCategory = document.querySelector(".category")

const products = [
    { id: 1, name: "iPhone 14", price: 999, category: "Смартфоны", description: "придумай сам" },
    { id: 2, name: "MacBook Pro", price: 1999, category: "Ноутбуки", description: "придумай сам" },
    { id: 3, name: "AirPods Pro", price: 249, category: "Аксессуары", description: "придумай сам" },
    { id: 4, name: "Samsung Galaxy S23", price: 899, category: "Смартфоны",description: "придумай сам" },
    { id: 5, name: "Asus ROG", price: 1599, category: "Ноутбуки",description: "придумай сам" }
];


let newProducts = products

selectCategory.onchange = () => {
    if(selectCategory.value == "all") {
        newProducts = products
    }
    if(selectCategory.value == "smartphones") {
        newProducts = products.filter((product) => product.category == "Смартфоны")    
    }
    if(selectCategory.value == "laptops") {
        newProducts = products.filter((product) => product.category == "Ноутбуки")    

    }
    if(selectCategory.value == "accessories") {
        newProducts = products.filter((product) => product.category == "Аксессуары")    
    }
}

console.log(newProducts)
newProducts.forEach((product, idx) => {
    
    const blockProduct = document.createElement("div")
    blockProduct.className = "products__product"
    const id = document.createElement("span")
    id.textContent = `Id: ${products[idx].id}`
    const name = document.createElement("h3")
    name.textContent = `${products[idx].name}`
    const price = document.createElement("span")
    price.textContent = `${products[idx].price}`
    const category = document.createElement("span")
    category.textContent = `Категория: ${products[idx].category}`
    const description = document.createElement("p")
    description.textContent = `О товаре: ${products[idx].description}`
    
    blockProduct.append(id)
    blockProduct.append(name)
    blockProduct.append(price)
    blockProduct.append(category)
    blockProduct.append(description)
    
    document.querySelector('.products').append(blockProduct)
})
