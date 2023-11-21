// Задаем JSON-строку книг
var booksJson = "{\"book_0\": {\"title\": \"Atonement: A Novel\", \"author\": \"Ian McEwan\", \"image\": \"http://images.amazon.com/images/P/0385503954.01.MZZZZZZZ.jpg\", \"description\": \"In 1935 England, thirteen-year-old Briony Tallis witnesses an event involving her sister Cecilia and her childhood friend Robbie Turner, and she becomes the victim of her own imagination, which leads her on a lifelong search for truth and absolution.\"}}";

// Анализируем JSON-строку в JavaScript-объект
var books5 = JSON.parse(booksJson);

window.addEventListener('load', function(){
  // Берем элемент для вывода
  var output5 = document.getElementById('output5');

  // Перебираем все книги в объекте
  for (var book in books5) {
    // Создаем элементы для вывода информации о книге
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // Настраиваем элементы
    h3.innerHTML = books5[book].title;
    p1.innerHTML = "<b>Author:</b> " + books5[book].author;
    p2.innerHTML = "<b>Description:</b> " + books5[book].description;
    img.src = books5[book].image;
    img.style.width = "200px";

    // Добавляем элементы в div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // Добавляем div в output
    output5.appendChild(div);
  }
});
