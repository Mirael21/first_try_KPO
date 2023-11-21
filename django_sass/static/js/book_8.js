// ������ JSON-������ ����
var booksJson = "{\"book_0\": {\"title\": \"Confessions of a Shopaholic\", \"author\": \"SOPHIE KINSELLA\", \"image\": \"http://images.amazon.com/images/P/0440241413.01.MZZZZZZZ.jpg\", \"description\": \"Financial journalist Rebecca Bloomwood seeks solace from the boredom and pressures in life with her shopping, a solution that brings her close to financial disaster, until she encounters a story that will change her life.\"}}";

// ����������� JSON-������ � JavaScript-������
var books8 = JSON.parse(booksJson);

window.addEventListener('load', function(){
  // ����� ������� ��� ������
  var output8 = document.getElementById('output8');

  // ���������� ��� ����� � �������
  for (var book in books8) {
    // ������� �������� ��� ������ ���������� � �����
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // ����������� ��������
    h3.innerHTML = books8[book].title;
    p1.innerHTML = "<b>Author:</b> " + books8[book].author;
    p2.innerHTML = "<b>Description:</b> " + books8[book].description;
    img.src = books8[book].image;
    img.style.width = "200px";

    // ��������� �������� � div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // ��������� div � output
    output8.appendChild(div);
  }
});
