// Задаем JSON-строку книг
var booksJson = "{\"book_0\": {\"title\": \"Narcissus in Chains (Anita Blake Vampire Hunter (Hardcover))\", \"author\": \"Laurell K. Hamilton\", \"image\": \"http://images.amazon.com/images/P/0425181685.01.MZZZZZZZ.jpg\", \"description\": \"A woman merges the powers of the vampire and the werewolf who have infected her to help the innocents she has sworn to protect.\"}}";

// Анализируем JSON-строку в JavaScript-объект
var books4 = JSON.parse(booksJson);

window.addEventListener('load', function(){
  // Берем элемент для вывода
  var output4 = document.getElementById('output4');

  // Перебираем все книги в объекте
  for (var book in books4) {
    // Создаем элементы для вывода информации о книге
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // Настраиваем элементы
    h3.innerHTML = books4[book].title;
    p1.innerHTML = "<b>Author:</b> " + books4[book].author;
    p2.innerHTML = "<b>Description:</b> " + books4[book].description;
    img.src = books4[book].image;
    img.style.width = "200px";

    // Добавляем элементы в div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // Добавляем div в output
    output4.appendChild(div);
  }
});
