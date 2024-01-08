function generateCategories(element){
    let category = `    
        <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${element.toUpperCase()}</h5>
        </a>
    `

    return category
}

let mainDiv = document.getElementById("categories")
fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {
            mainDiv.innerHTML += generateCategories(element)
        })
    })