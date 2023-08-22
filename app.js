const myLibrary = [];

function Book(title,author,volumes,read){
    this.title = title;
    this.author = author;
    this.volumes = volumes;
    this.read = read;
}

Book.prototype = {
addBookToLibrary(){
    myLibrary.push(this);
    return this;
}
}

const reZero = new Book("Re Zero","Tappei Nagatsuki",30,true).addBookToLibrary();
const overlord = new Book("Overlord","Kugane Maruyama",15,false).addBookToLibrary();



console.log(myLibrary)
