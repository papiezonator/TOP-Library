//variables
let dialogForm = document.querySelector("#dialogForm");
let bookForm = document.querySelector("bookForm")
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
let yesRead = document.querySelector("#yes-button");
let noRead = document.querySelector("#no-button");
let submitButton = document.querySelector("#submit");


let myLibrary = [];

//creating a form on the button click
bookButton.addEventListener('click', () => {
    dialogForm.showModal();    

})

//submitting the form
submitButton.addEventListener('click', () => {
    if(yesRead.checked === true){
        addBook(bookTitle.value, bookAuthor.value, bookPages.value, yesRead.value);
    }
    
    if(noRead.checked === true){
        addBook(bookTitle.value, bookAuthor.value, bookPages.value, noRead.value);
    }

    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    yesRead.checked = false;
    noRead.checked = false;
})


//displaying the objects
function addTest() {
    let newDiv = document.createElement("div");
        
    
    for (let i = myLibrary.length-1 ; i < myLibrary.length; i++) {
        let newAuthor = document.createTextNode(`Author: ${myLibrary[i].author}`);
        let newTitle = document.createTextNode(`Title: ${myLibrary[i].title}`);
        let newPages = document.createTextNode(`Number of pages: ${myLibrary[i].pages}`);
        let read = document.createTextNode(`Read: ${myLibrary[i].read}`)
        let paraAuth = document.createElement("p");
        let paraTit = document.createElement("p");
        let paraPag = document.createElement("p");
        let paraRead = document.createElement("p");
        paraAuth.appendChild(newAuthor);        
        newDiv.appendChild(paraAuth);
        paraTit.appendChild(newTitle);
        newDiv.appendChild(paraTit);
        paraPag.appendChild(newPages);  
        newDiv.appendChild(paraPag);
        paraRead.appendChild(read);
        newDiv.appendChild(paraRead);
        document.body.appendChild(newDiv);
    } 
}




//book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title, author, pages, read){
    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
    addTest();
}

