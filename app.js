const myLibrary = [];

function Book(title, author, volumes, read) {
  this.title = title;
  this.author = author;
  this.volumes = volumes;
  this.read = read;
}

Book.prototype = {
  addBookToLibrary() {
    myLibrary.push(this);
    return this;
  },
};

const container = document.querySelector(".container");

function createCard() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("title");
  container.appendChild(newDiv);

  const lastBookIndex = myLibrary.length - 1;

  //addd title
  const title = document.createElement("h1");
  title.textContent = `${myLibrary[lastBookIndex].title}`;
  newDiv.appendChild(title);

  //add author and pages

  const subtitle = document.createElement("p");
  subtitle.textContent = `by ${myLibrary[lastBookIndex].author} , ${myLibrary[lastBookIndex].volumes} Volumes`;
  newDiv.appendChild(subtitle);

  const readLabel = document.createElement("label");
  readLabel.setAttribute("for", "read-status");
  readLabel.textContent = "read-status :";
  newDiv.appendChild(readLabel);
  const readStatus = document.createElement("button");
  readStatus.textContent = "Read";
  readStatus.setAttribute("id", "read-status");
  newDiv.appendChild(readStatus);
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

//try grab the form data

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

  let readUnread;

  if (readInput.value === "read") {
    readUnread = true;
  } else if (readInput.value === "unread") {
    readUnread = false;
  }

  const newBook = new Book(title, author, vols, readUnread);

  // console.dir(newBook);

  newBook.addBookToLibrary();
  console.log(myLibrary);

  createCard();
  form.reset();
});
