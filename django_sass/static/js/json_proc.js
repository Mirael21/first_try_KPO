var xhr = new XMLHttpRequest();
xhr.open("GET", "get_books/", true);
xhr.onreadystatechange = function() {
if (xhr.readyState === 4 && xhr.status === 200) {
var books = JSON.parse(xhr.responseText);
books = JSON.parse(books);
let books_title = [];


for (var i = 0; i < 5; i++) {
var bookKey = "book_" + i;
var book = books[bookKey];


  if (book && book.title && book.author && book.description && book.image) {


    var backContent = document.createElement("section");
    backContent.classList.add("section-back");
    backContent.innerHTML = "<h1>" + book.title + "</h1>  <p>" + book.author + "</p>" + "<p>" + book.description + "</p><img src='" + book.image + "' alt='" + book.title + "'>";
    books_title.push(book.title);


    var backElement = document.getElementById("b" + (i + 1));

    if (backElement) {

      backElement.appendChild(backContent);

    }
  }
  }




for (var i = 5; i < 10; i++) {
  var bookKey = "book_" + i;
  var book = books[bookKey];


  if (book && book.title && book.author && book.description && book.image) {

    var frontContent = document.createElement("section");
    frontContent.classList.add("section-front");
    frontContent.innerHTML = "<h1>" + book.title + "</h1>  <p>" + book.author + "</p>" + "<p>" + book.description + "</p><img ?lass = 'book-image' src='" + book.image + "' alt='" + book.title + "'>";

    books_title.push(book.title);


    var frontElement = document.getElementById("f" + (i - 3));


    if (frontElement) {
      frontElement.appendChild(frontContent);

    }

  }
}

displayBook(books_title);
}

}

;
xhr.send();



function displayBook(book) {
// Update HTML elements with book data


console.log(book);
let rate = [0,0,0,0,0,0,0,0,0,0];


// Attach event listener for rating submission

document.getElementById("submit-rating1").addEventListener("click", function() {
var rating = document.getElementById("rating1").value;


rate[0] = rating;
console.log(rate);

if (rate[0] > 0 && rate[1] > 0 && rate[2] > 0 && rate[3] > 0 && rate[4] > 0 && rate[5] > 0 && rate[6] > 0 && rate[7] > 0 && rate[8] > 0 && rate[9] > 0 ){
        saveRating(book, rate);
}
});

document.getElementById("submit-rating2").addEventListener("click", function() {
var rating = document.getElementById("rating2").value;

rate[1] = rating;
console.log(rate);

if (rate[0] > 0 && rate[1] > 0 && rate[2] > 0 && rate[3] > 0 && rate[4] > 0 && rate[5] > 0 && rate[6] > 0 && rate[7] > 0 && rate[8] > 0 && rate[9] > 0 ){
        saveRating(book, rate);
}
});

document.getElementById("submit-rating3").addEventListener("click", function() {
var rating = document.getElementById("rating3").value;

rate[2] = rating;
console.log(rate);

if (rate[0] > 0 && rate[1] > 0 && rate[2] > 0 && rate[3] > 0 && rate[4] > 0 && rate[5] > 0 && rate[6] > 0 && rate[7] > 0 && rate[8] > 0 && rate[9] > 0 ){
        saveRating(book, rate);
}
});

document.getElementById("submit-rating4").addEventListener("click", function() {
var rating = document.getElementById("rating4").value;


rate[3] = rating;
console.log(rate);

if (rate[0] > 0 && rate[1] > 0 && rate[2] > 0 && rate[3] > 0 && rate[4] > 0 && rate[5] > 0 && rate[6] > 0 && rate[7] > 0 && rate[8] > 0 && rate[9] > 0 ){
        saveRating(book, rate);
}
});

document.getElementById("submit-rating5").addEventListener("click", function() {
var rating = document.getElementById("rating5").value;


rate[4] = rating;
console.log(rate);

if (rate[0] > 0 && rate[1] > 0 && rate[2] > 0 && rate[3] > 0 && rate[4] > 0 && rate[5] > 0 && rate[6] > 0 && rate[7] > 0 && rate[8] > 0 && rate[9] > 0 ){
        saveRating(book, rate);
}
});

document.getElementById("submit-rating6").addEventListener("click", function() {
var rating = document.getElementById("rating6").value;


rate[5] = rating;
console.log(rate);
if (rate[0] > 0 && rate[1] > 0 && rate[2] > 0 && rate[3] > 0 && rate[4] > 0 && rate[5] > 0 && rate[6] > 0 && rate[7] > 0 && rate[8] > 0 && rate[9] > 0 ){
        saveRating(book, rate);
}
});

document.getElementById("submit-rating7").addEventListener("click", function() {
var rating = document.getElementById("rating7").value;


rate[6] = rating;
console.log(rate);

if (rate[0] > 0 && rate[1] > 0 && rate[2] > 0 && rate[3] > 0 && rate[4] > 0 && rate[5] > 0 && rate[6] > 0 && rate[7] > 0 && rate[8] > 0 && rate[9] > 0 ){
        saveRating(book, rate);
}
});

document.getElementById("submit-rating8").addEventListener("click", function() {
var rating = document.getElementById("rating8").value;


rate[7] = rating;
console.log(rate);

if (rate[0] > 0 && rate[1] > 0 && rate[2] > 0 && rate[3] > 0 && rate[4] > 0 && rate[5] > 0 && rate[6] > 0 && rate[7] > 0 && rate[8] > 0 && rate[9] > 0 ){
        saveRating(book, rate);
}
});

document.getElementById("submit-rating9").addEventListener("click", function() {
var rating = document.getElementById("rating9").value;


rate[8] = rating;
console.log(rate);

if (rate[0] > 0 && rate[1] > 0 && rate[2] > 0 && rate[3] > 0 && rate[4] > 0 && rate[5] > 0 && rate[6] > 0 && rate[7] > 0 && rate[8] > 0 && rate[9] > 0 ){
        saveRating(book, rate);
}
});

document.getElementById("submit-rating10").addEventListener("click", function() {
var rating = document.getElementById("rating10").value;


rate[9] = rating;
console.log(rate);


if (rate[0] > 0 && rate[1] > 0 && rate[2] > 0 && rate[3] > 0 && rate[4] > 0 && rate[5] > 0 && rate[6] > 0 && rate[7] > 0 && rate[8] > 0 && rate[9] > 0 ){

        saveRating(book, rate);
}
});


}






function saveRating(book, rate) {
// Use AJAX to save rating
var xhr = new XMLHttpRequest();
xhr.open("POST", "save_rating/", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

var data = {
"book_0": {"title": book[0], "rating": rate[0]},
"book_1": {"title": book[1], "rating": rate[1]},
"book_2": {"title": book[2], "rating": rate[2]},
"book_3": {"title": book[3], "rating": rate[3]},
"book_4": {"title": book[4], "rating": rate[4]},
"book_5": {"title": book[5], "rating": rate[5]},
"book_6": {"title": book[6], "rating": rate[6]},
"book_7": {"title": book[7], "rating": rate[7]},
"book_8": {"title": book[8], "rating": rate[8]},
"book_9": {"title": book[9], "rating": rate[9]}


};
console.log(data);

xhr.onreadystatechange = function() {
if (xhr.readyState === 4 && xhr.status === 200) {
    console.log("Rating saved successfully!");
    var books_rec = JSON.parse(xhr.responseText);
    books_rec = JSON.parse(books_rec);


    console.log(books_rec);
    console.log("something");


    var recbookKey1 = "book_0";
    var book = books_rec[recbookKey1];


  if (book && book.title && book.author && book.description && book.image) {


    var backContent = document.createElement("section");
    backContent.classList.add("section-back");
    backContent.innerHTML = "<h1>" + book.title + "</h1>  <p>" + book.author + "</p>" + "<p>" + book.description + "</p><img src='" + book.image + "' alt='" + book.title + "'>";
    var backElement = document.getElementById("b6");

    if (backElement) {

      backElement.appendChild(backContent);

    }
}


 var recbookKey2 = "book_1";
    var book = books_rec[recbookKey2];


  if (book && book.title && book.author && book.description && book.image) {


    var frontContent = document.createElement("section");
    frontContent.classList.add("section-front");
    frontContent.innerHTML = "<h1>" + book.title + "</h1>  <p>" + book.author + "</p>" + "<p>" + book.description + "</p><img src='" + book.image + "' alt='" + book.title + "'>";
    var frontElement = document.getElementById("f7");

    if (frontElement) {

      frontElement.appendChild(frontContent);

    }
}

}
};

xhr.send(JSON.stringify(data));
}