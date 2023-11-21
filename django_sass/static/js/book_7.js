// Задаем JSON-строку книг
var booksJson = "{\"book_0\": {\"title\": \"Middle of Nowhere\", \"author\": \"Ridley Pearson\", \"image\": \"http://images.amazon.com/images/P/0786889608.01.MZZZZZZZ.jpg\", \"description\": \"Known for his meticulous, fascinating research, as well as his ability to create exciting plot twists that inevitably, a month or two later, seem to have anticipated real-life headlines, Ridley Pearson has genered praise as a \\\"master\\\" of the suspense novel. In Middle of Nowhere, the \\\"Blu Flu\\\" has struck the Seattle Police force and a majority of the officers are on a unofficial strike, with the exception of a few, including Detective Lou Boldt, who is committed to the job. When a string of robberies and the brutal assault of a female cop rock the city, the pressure of isolation threatens Boldt's psyche and his marriage. With the help of psychologist Daphne Matthews and Sergeant John LaMoia, Boldt is able to make progress on both the assault and the robberies, but things soon spin out of control, and Bodt's refusal to drop the case puts his own life at risk. Filled with the fast-paced, spiraling action that has made Pearson's previous novels \\\"irresistable\\\" (Los Angeles Times Book Review) works of suspense that \\\"grip the imagination\\\" (People magazine), this offering from \\\"the best thriller writer alive\\\" (Booklist) is certain to keep the reader breathless.\"}}";

// Анализируем JSON-строку в JavaScript-объект
var books7 = JSON.parse(booksJson);

window.addEventListener('load', function(){
  // Берем элемент для вывода
  var output7 = document.getElementById('output7');

  // Перебираем все книги в объекте
  for (var book in books7) {
    // Создаем элементы для вывода информации о книге
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // Настраиваем элементы
    h3.innerHTML = books7[book].title;
    p1.innerHTML = "<b>Author:</b> " + books7[book].author;
    p2.innerHTML = "<b>Description:</b> " + books7[book].description;
    img.src = books7[book].image;
    img.style.width = "200px";

    // Добавляем элементы в div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // Добавляем div в output
    output7.appendChild(div);
  }
});
