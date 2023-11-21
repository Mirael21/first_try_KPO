// Задаем JSON-строку книг
var booksJson = "{\"book_0\": {\"title\": \"Die falsche F\\u00c3?\\u00c2\\u00a4hrte.\", \"author\": \"Henning Mankell\", \"image\": \"http://images.amazon.com/images/P/3423204206.01.MZZZZZZZ.jpg\", \"description\": \"Kommissar Kurt Wallander von der Kriminalpolizei im schwedischen Ystad sucht einen Serienm\\u00f6rder, der, als Indianer verkleidet, mit einer Axt seine Opfer erschl\\u00e4gt und sie anschliessend skalpiert.\"}}";

// Анализируем JSON-строку в JavaScript-объект
var books10 = JSON.parse(booksJson);

window.addEventListener('load', function(){
  // Берем элемент для вывода
  var output10 = document.getElementById('output10');

  // Перебираем все книги в объекте
  for (var book in books10) {
    // Создаем элементы для вывода информации о книге
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // Настраиваем элементы
    h3.innerHTML = books10[book].title;
    p1.innerHTML = "<b>Author:</b> " + books10[book].author;
    p2.innerHTML = "<b>Description:</b> " + books10[book].description;
    img.src = books10[book].image;
    img.style.width = "200px";

    // Добавляем элементы в div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // Добавляем div в output
    output10.appendChild(div);
  }
});
