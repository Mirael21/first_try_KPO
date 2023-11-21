// Задаем JSON-строку книг
var booksJson = "{\"book_0\": {\"title\": \"Portrait of a Killer: Jack the Ripper -- Case Closed\", \"author\": \"Patricia Cornwell\", \"image\": \"http://images.amazon.com/images/P/0399149325.01.MZZZZZZZ.jpg\", \"description\": \"Examines the century-old series of murders that terrorized London in the 1880s, drawing on research, state-of-the-art forensic science, and insights into the criminal mind to reveal the true identity of the infamous Jack the Ripper.\"}}";

// Анализируем JSON-строку в JavaScript-объект
var books9 = JSON.parse(booksJson);

window.addEventListener('load', function(){
  // Берем элемент для вывода
  var output9 = document.getElementById('output9');

  // Перебираем все книги в объекте
  for (var book in books9) {
    // Создаем элементы для вывода информации о книге
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // Настраиваем элементы
    h3.innerHTML = books9[book].title;
    p1.innerHTML = "<b>Author:</b> " + books9[book].author;
    p2.innerHTML = "<b>Description:</b> " + books9[book].description;
    img.src = books9[book].image;
    img.style.width = "200px";

    // Добавляем элементы в div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // Добавляем div в output
    output9.appendChild(div);
  }
});
