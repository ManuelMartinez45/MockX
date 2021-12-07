const searchBar = document.querySelector('.searchBar')
const searchBtn = document.querySelector('.searchBtn')
const gridContainer = document.querySelector('.cardMaster')

searchBtn.addEventListener('click', handleClick);
searchBar.addEventListener('focus', handleReset);

async function handleClick(){
    const searchTerm = searchBar.value;
    if(!searchTerm){
        searchBar.style.border = '2.5px solid rgb(248, 46, 46, .4)'
        searchBar.style.color = 'black'
    }
    const response = await fetch(`/search?term=${searchTerm}`);

    const data = await response.json()
    console.log(data)

    if(data.results.length === 0){
        gridContainer.innerHTML = 'No Results Found'
    }else{
        const list = data.results.map(product => {
            return `
            <div class="cell small-12 medium-6 large-4">
            <div class="card ">
                <a href="/${product._id}"><img src="${product.img}" alt=""></a> 
                <div class="card-divider">
                    <span class='productHeader'>${product.name}</span>
                </div>
            </div>
            </div>`
        })
        gridContainer.innerHTML = list
    }
    searchBar.value = ''
}

async function handleReset(){
    searchBar.style.border = 'none';
    searchBar.innerHTML = ''
}

// btn.addEventListener('click', handleClick);
// inputElement.addEventListener('focus', handleReset);

// async function handleClick(){
//     const searchTerm = inputElement.value;
//     if(!searchTerm) return alert('Sorry No Search Term Was Provided')
    
//     const response = await fetch('/books/search?term=' + searchTerm);
    
//     const data = await response.json();
    
//     if(data.results.length === 0){
//         ul.innerHTML = ' No Results Found'
//     }else{
//         const list = data.results.map(book => {
//             return `<li style='text-transform: capitalize'>
//                 <a href="/books/${book._id}">
//                     ${book.title}
//                 </a>
//                 </li>`
//         }).join('');
//         ul.innerHTML = list;
//     }
//     inputElement.value = ''
// }

// function handleReset(){
//     ul.innerHTML = '';
// }