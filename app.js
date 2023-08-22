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
// const overlord = new Book("Overlord","Kugane Maruyama",15,false).addBookToLibrary();


const container = document.querySelector('.container');
const btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    const newDiv = document.createElement('div');
    newDiv.classList.add('book');
    container.appendChild(newDiv);
    
    const lastBookIndex = myLibrary.length-1;

    //addd title
    const title = document.createElement('h1');
    title.textContent = `${myLibrary[lastBookIndex].title}`;
    newDiv.appendChild(title);

    //add author and pages

    const subtitle = document.createElement('p');
    subtitle.textContent = `by ${myLibrary[lastBookIndex].author} , ${myLibrary[lastBookIndex].volumes} Volumes`;
    newDiv.appendChild(subtitle);

    const readStatus = document.createElement('button');
    readStatus.classList.add('read-status');
    newDiv.appendChild(readStatus);
    

})




//grab the btns

const openModal = document.querySelector('#open-btn');
const closeModal = document.querySelector('#close-btn');
const modal = document.getElementById('modal');

//modal related functions etc

openModal.addEventListener('click',()=>{
    modal.showModal();
})


closeModal.addEventListener('click',()=>{
    modal.close();
})