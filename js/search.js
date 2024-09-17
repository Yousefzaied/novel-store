
let searchProduct = document.getElementById('search-product');
let search = document.getElementById('search');
let novels = []; // To store all the books from JSON

// create display novel
function displayNovels(novelsArray) {
    searchProduct.innerHTML = ``;
    novelsArray.forEach(novel => {
        searchProduct.innerHTML += `
        <div class="box-search">
            <img src="${novel.imageLink}" " loading="lazy">
            <p class="box-name text-center pt-2">${novel.title}</p>
            <a href="#" class="text-center d-block">Add</a>
        </div>
        `
    });
}

// create get all novel
function getAllNovel() {
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange  = function() {
        if(this.status === 200 && this.readyState === 4) {
            novels = JSON.parse(this.responseText);   // storage all novel in array
            displayNovels(novels);
        }
    }
    myRequest.open("GET", "book.json");
    myRequest.send();
}

// create search function
function filterSearch(query){
    const filterNovel = novels.filter(novel =>
        novel.title.toLowerCase().includes(query.toLowerCase())
    );
    displayNovels(filterNovel)
}

getAllNovel();

search.addEventListener("input", function() {
    const query = search.value;
    filterSearch(query);
})