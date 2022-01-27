const bookControl= document.querySelector(".book");
const books = Array.from(document.querySelectorAll(".font-size"))


const fontsizeChange = function(event){
   let index = books.findIndex((book) =>
   book.classList.contains("font-size_active"));
   let target = event.target;
   event.preventDefault();

books[index].classList.remove("font-size_active");
target.classList.toggle("font-size_active")

if (target.classList.contains("font-size_small")){
   bookControl.classList.remove("book_fs-big")
   bookControl.classList.add("book_fs-small")   
} else if (target.classList.contains("font-size_big")){
   bookControl.classList.remove("book_fs-small")
   bookControl.classList.add("book_fs-big") 
} else {
   bookControl.classList.remove("book_fs-small", "book_fs-big")
}
}

bookControl.addEventListener("click", fontsizeChange)