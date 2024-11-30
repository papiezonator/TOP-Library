//variables
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
let yesRead = document.querySelector("#yes-button");
let noRead = document.querySelector("#no-button");

let object = {
    author: 'author1',
    title: 'title1',
    pages: 123
}

let object1 = {
    author: 'author2',
    title: 'title2',
    pages: 69
}

let myLibrary = [
    object, 
    object1
];


//displaying the objects
function addTest() {
    let newDiv = document.createElement("div");
        
    
    for (let i = 0; i < myLibrary.length; i++) {
        let newAuthor = document.createTextNode(`Author: ${myLibrary[i].author}`);
        let newTitle = document.createTextNode(`Title: ${myLibrary[i].title}`);
        let newPages = document.createTextNode(`Number of pages: ${myLibrary[i].pages}`);
        let paraAuth = document.createElement("p");
        let paraTit = document.createElement("p");
        let paraPag = document.createElement("p");
        paraAuth.appendChild(newAuthor);        
        newDiv.appendChild(paraAuth);
        paraTit.appendChild(newTitle);
        newDiv.appendChild(paraTit);
        paraPag.appendChild(newPages);  
        newDiv.appendChild(paraPag);
        document.body.appendChild(newDiv);
    }
    myLibrary = [];   
}




//book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages();
    this.read = read;
}

function addBook(){
    let title = prompt("Title: ");
    let author = prompt("Author: ");
    let pages = () => {
        let pageNumber;
        while(Number.isInteger(pageNumber) != true){
            pageNumber = parseInt(prompt("Number of pages: "));
        }
        return pageNumber;
    };
    let read = prompt("Read?")
    /*let read = () => {
        let yesno = prompt("Is the book read?");
        yesno.toLowerCase();
        while(yesno != 'yes' || yesno != 'no'){
            yesno = prompt("Is the book read?");
        }
        return yesno;
    }*/
    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
    addTest();
}

addEventListener("DOMContentLoaded", () => {
    addTest();
})