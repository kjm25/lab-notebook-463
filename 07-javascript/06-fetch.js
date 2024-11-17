const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((book) => {
        bookToDOM(book);
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      const loading = document.getElementById("loading");
      app.removeChild(loading);
    });
};

function bookToDOM(book) {
  console.log(book);

  let bookCard = document.createElement("div");
  let title = document.createElement("h4");
  let author = document.createElement("p");
  let published = document.createElement("p");
  let pages = document.createElement("p");

  title.textContent = book.name;
  author.textContent = `by ${book.authors[0]}`;
  published.textContent = book.released.substr(0, 4);
  pages.textContent = `${book.numberOfPages} pages`;

  bookCard.style.display = "flex";
  bookCard.style.flexDirection = "column";
  bookCard.style.alignItems = "center";
  bookCard.style.marginTop = "20px";

  bookCard.append(title);
  bookCard.append(author);
  bookCard.append(published);
  bookCard.append(pages);

  app.append(bookCard);
}

fetchData(url);
