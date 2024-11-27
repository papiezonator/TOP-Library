//variables


/*let object = {
    author: 'author1',
    title: 'title1'
}

let object1 = {
    author: 'author2',
    title: 'title2'
}*/

const myLibrary = [
    
];


//displaying the objects
function addTest() {
    let newDiv = document.createElement("div");
    let para = document.createElement("p");
    
    for (let i = 0; i < myLibrary.length; i++) {
        let newAuthor = document.createTextNode(`Author: ${myLibrary[i].author}`);
        let newTitle = document.createTextNode(`Title: ${myLibrary[i].title}`);
        let newPages = document.createTextNode(`Number of pages: ${myLibrary[i].pages}`);
        para.appendChild(newAuthor);
        para.appendChild(newTitle);
        para.appendChild(newPages);
        newDiv.appendChild(para);
        document.body.appendChild(newDiv);
    }   

}


let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
let yesRead = document.querySelector("#yes-button");
let noRead = document.querySelector("#no-button");

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
    let read = prompt("read? :");
    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
    addTest();
}

    