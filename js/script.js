
// service section
let specialBook = document.getElementById('special-book');
let newBook = document.getElementById('new-novel');
let search = document.querySelectorAll(".navbar .btn");
function getBox() {
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function() {
        if(this.status === 200 && this.readyState === 4) {
            
            let requestObject = JSON.parse(this.responseText);

            // show data in special book section
               for(let i = 0; i < 8 ; i++) {
                specialBook.innerHTML += `
                   <div class="card-special-book">
                      <img src="${requestObject[i].imageLink}" alt="">
                      <p class="text-center fw-bold pt-1 pb-1">${requestObject[i].title}</p>
                      <p class="text-center price">${requestObject[i].pages}$</p>
                      <a href="#" class="btn d-block">Add</a>
                    </div>
                `
               }

               // show data in new novel section
               for(let i = 10; i < 30; i++) {
                 newBook.innerHTML += `
                    <div class="card-special-book">
                      <img src="${requestObject[i].imageLink}" alt="">
                      <p class="text-center fw-bold pt-1 pb-1">${requestObject[i].title}</p>
                      <p class="text-center price">${requestObject[i].pages}$</p>
                      <a href="#" class="btn d-block">Add</a>
                    </div>
                 `
               }
        }
    }
    myRequest.open("GET", "book.json");
    myRequest.send();
}
getBox();


// =================================== //
function diplay(element) {
  element.style.opacity = ".5";
}
