document.addEventListener("DOMContentLoaded", () => {
    // Get elements from the DOM
    const bookList = document.querySelector("#book-list ul");
    const searchForm = document.getElementById("search-books");
    const addBookForm = document.getElementById("add-book");
    const searchInput = searchForm.querySelector("input");
    const addBookInput = addBookForm.querySelector("input");
  
    // Function to handle searching books
    searchForm.addEventListener("input", (e) => {
      const searchQuery = e.target.value.toLowerCase();
      const books = bookList.querySelectorAll("li");
  
      books.forEach((book) => {
        const bookName = book.querySelector(".name").textContent.toLowerCase();
        if (bookName.includes(searchQuery)) {
          book.style.display = "block"; // Show the book
        } else {
          book.style.display = "none"; // Hide the book
        }
      });
    });
  
    // Function to handle adding a new book
    addBookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const bookName = addBookInput.value.trim();
  
      if (bookName) {
        // Create new list item for the book
        const newBook = document.createElement("li");
        newBook.innerHTML = `
          <span class="name">${bookName}</span>
          <span class="delete">delete</span>
        `;
  
        // Append new book to the list
        bookList.appendChild(newBook);
  
        // Clear the input field after adding the book
        addBookInput.value = "";
      }
    });
  
    // Function to handle deleting a book
    bookList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete")) {
        // Remove the parent <li> of the clicked delete button
        e.target.parentElement.remove();
      }
    });
  });
  