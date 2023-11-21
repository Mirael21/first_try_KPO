// Задаем JSON-строку книг
var booksJson = "{\"book_0\": {\"title\": \"The Remains of the Day (Vintage International)\", \"author\": \"Kazuo Ishiguro\", \"image\": \"http://images.amazon.com/images/P/0679731725.01.MZZZZZZZ.jpg\", \"description\": \"BOOKER PRIZE WINNER \\u2022 From the winner of the Nobel Prize in Literature, here is \\u201can intricate and dazzling novel\\u201d (The New York Times) about the perfect butler and his fading, insular world in post-World War II England. This is Kazuo Ishiguro's profoundly compelling portrait of a butler named Stevens. Stevens, at the end of three decades of service at Darlington Hall, spending a day on a country drive, embarks as well on a journey through the past in an effort to reassure himself that he has served humanity by serving the \\\"great gentleman,\\\" Lord Darlington. But lurking in his memory are doubts about the true nature of Lord Darlington's \\\"greatness,\\\" and much graver doubts about the nature of his own life.\"}}";

// Анализируем JSON-строку в JavaScript-объект
var books2 = JSON.parse(booksJson);

window.addEventListener('load', function(){
  // Берем элемент для вывода
  var output2 = document.getElementById('output2');

  // Перебираем все книги в объекте
  for (var book in books2) {
    // Создаем элементы для вывода информации о книге
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // Настраиваем элементы
    h3.innerHTML = books2[book].title;
    p1.innerHTML = "<b>Author:</b> " + books2[book].author;
    p2.innerHTML = "<b>Description:</b> " + books2[book].description;
    img.src = books2[book].image;
    img.style.width = "200px";

    // Добавляем элементы в div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // Добавляем div в output
    output2.appendChild(div);
  }
});
