const myLibrary = [];

// function Book(title, author, volumes, read) {
//   this.title = title;
//   this.author = author;
//   this.volumes = volumes;
//   this.read = read;
// }

// Book.prototype = {
//   addBookToLibrary() {
//     myLibrary.push(this);
//     return this;
//   },
// };

class Book {
  constructor(title, author, volumes, read){
    this.title = title;
    this.author = author;
    this.volumes = volumes;
    this.read = read;
  }

  addBookToLibrary(){
    myLibrary.push(this);
    return this;
  }
}

const container = document.querySelector(".container");

function createCard(book) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("title");
  container.appendChild(newDiv);

  const lastBookIndex = myLibrary.length - 1;

  //add title
  const title = document.createElement("h1");
  title.textContent = `${myLibrary[lastBookIndex].title}`;
  newDiv.appendChild(title);

  //add author and pages

  const subtitle = document.createElement("p");
  subtitle.textContent = `by ${myLibrary[lastBookIndex].author} , ${myLibrary[lastBookIndex].volumes} Volumes`;
  newDiv.appendChild(subtitle);

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("title-btn");
  newDiv.appendChild(btnDiv);
  const readLabel = document.createElement("label");
  readLabel.setAttribute("for", "read-status");
  readLabel.textContent = "read-status :";
  btnDiv.appendChild(readLabel);
  const readStatus = document.createElement("button");

  if (myLibrary[lastBookIndex].read) {
    readStatus.textContent = "Read";
  } else if (myLibrary[lastBookIndex].read === false) {
    readStatus.textContent = "Unread";
  }

  readStatus.addEventListener("click", () => {
    book.read = !book.read; // Toggle the read status
    readStatus.textContent = book.read ? "Read" : "Unread"; // Update button text
  });

  readStatus.setAttribute("id", "read-status");
  btnDiv.appendChild(readStatus);
}

//grab the btns

const openModal = document.querySelector("#open-btn");
const closeModal = document.querySelector("#close-btn");
const modal = document.getElementById("modal");

//modal related functions etc

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

// grab the form data

const form = document.getElementById("add-book");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const volsInput = document.getElementById("volumes");
  const readInput = document.getElementById("read");

  const title = titleInput.value;
  const author = authorInput.value;
  const vols = volsInput.value;
  const book = readInput.value;

  let readUnread;

  if (readInput.value === "read") {
    readUnread = true;
  } else if (readInput.value === "unread") {
    readUnread = false;
  }

  const newBook = new Book(title, author, vols, readUnread);

  newBook.addBookToLibrary();

  createCard(newBook);
  form.reset();
  modal.close();
});