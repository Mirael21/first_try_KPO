// Задаем JSON-строку книг
var booksJson = "{\"book_0\": {\"title\": \"BODY FARM\", \"author\": \"Patricia Cornwell\", \"image\": \"http://images.amazon.com/images/P/0684195976.01.MZZZZZZZ.jpg\", \"description\": \"And where did the killer obtain the unique blaze-orange duct tape, with which he bound Emily and her mother?\"}}";

// Анализируем JSON-строку в JavaScript-объект
var books1 = JSON.parse(booksJson);

document.addEventListener("DOMContentLoaded", function() {

  // Берем элемент для вывода
  var output1 = document.getElementById('output1');

  // Перебираем все книги в объекте
  for (var book in books1) {
    // Создаем элементы для вывода информации о книге
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // Настраиваем элементы
    h3.innerHTML = books1[book].title;
    p1.innerHTML = "<b>Author:</b> " + books1[book].author;
    p2.innerHTML = "<b>Description:</b> " + books1[book].description;
    img.src = books1[book].image;
    img.style.width = "200px";

    // Добавляем элементы в div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // Добавляем div в output
    output1.appendChild(div);
  }
});