// ������ JSON-������ ����
var booksJson = "{\"book_0\": {\"title\": \"BODY FARM\", \"author\": \"Patricia Cornwell\", \"image\": \"http://images.amazon.com/images/P/0684195976.01.MZZZZZZZ.jpg\", \"description\": \"And where did the killer obtain the unique blaze-orange duct tape, with which he bound Emily and her mother?\"}}";

// ����������� JSON-������ � JavaScript-������
var books1 = JSON.parse(booksJson);

document.addEventListener("DOMContentLoaded", function() {

  // ����� ������� ��� ������
  var output1 = document.getElementById('output1');

  // ���������� ��� ����� � �������
  for (var book in books1) {
    // ������� �������� ��� ������ ���������� � �����
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // ����������� ��������
    h3.innerHTML = books1[book].title;
    p1.innerHTML = "<b>Author:</b> " + books1[book].author;
    p2.innerHTML = "<b>Description:</b> " + books1[book].description;
    img.src = books1[book].image;
    img.style.width = "200px";

    // ��������� �������� � div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // ��������� div � output
    output1.appendChild(div);
  }
});