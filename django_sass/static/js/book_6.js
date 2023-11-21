// ������ JSON-������ ����
var booksJson = "{\"book_0\": {\"title\": \"Russka : The Novel of Russia\", \"author\": \"EDWARD RUTHERFURD\", \"image\": \"http://images.amazon.com/images/P/0804109729.01.MZZZZZZZ.jpg\", \"description\": \"Four families, divided by ethnicity but united in shaping the destiny of their land, face love, hate, happiness, and hardship as Russia is transformed through history. Reprint.\"}}";

// ����������� JSON-������ � JavaScript-������
var books6 = JSON.parse(booksJson);

window.addEventListener('load', function(){
  // ����� ������� ��� ������
  var output6 = document.getElementById('output6');

  // ���������� ��� ����� � �������
  for (var book in books6) {
    // ������� �������� ��� ������ ���������� � �����
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // ����������� ��������
    h3.innerHTML = books6[book].title;
    p1.innerHTML = "<b>Author:</b> " + books6[book].author;
    p2.innerHTML = "<b>Description:</b> " + books6[book].description;
    img.src = books6[book].image;
    img.style.width = "200px";

    // ��������� �������� � div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // ��������� div � output
    output6.appendChild(div);
  }
});
