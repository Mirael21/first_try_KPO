// Задаем JSON-строку книг
var booksJson3 = "{\"book_0\": {\"title\": \"Crazy in Alabama\", \"author\": \"Mark Childress\", \"image\": \"http://images.amazon.com/images/P/0345432479.01.MZZZZZZZ.jpg\", \"description\": \"In Alabama during the racially restless summer of 1965, an orphan boy comes of age, and his aunt escapes from an unhappy marriage.\"}}";

// Анализируем JSON-строку в JavaScript-объект
var books3 = JSON.parse(booksJson);

window.addEventListener('load', function(){
  // Берем элемент для вывода
  var output3 = document.getElementById('output3');

  // Перебираем все книги в объекте
  for (var book in books3) {
    // Создаем элементы для вывода информации о книге
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // Настраиваем элементы
    h3.innerHTML = books3[book].title;
    p1.innerHTML = "<b>Author:</b> " + books3[book].author;
    p2.innerHTML = "<b>Description:</b> " + books3[book].description;
    img.src = books3[book].image;
    img.style.width = "200px";

    // Добавляем элементы в div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // Добавляем div в output
    output3.appendChild(div);
  }
});
