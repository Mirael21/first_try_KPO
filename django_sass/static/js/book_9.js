// ������ JSON-������ ����
var booksJson = "{\"book_0\": {\"title\": \"Portrait of a Killer: Jack the Ripper -- Case Closed\", \"author\": \"Patricia Cornwell\", \"image\": \"http://images.amazon.com/images/P/0399149325.01.MZZZZZZZ.jpg\", \"description\": \"Examines the century-old series of murders that terrorized London in the 1880s, drawing on research, state-of-the-art forensic science, and insights into the criminal mind to reveal the true identity of the infamous Jack the Ripper.\"}}";

// ����������� JSON-������ � JavaScript-������
var books9 = JSON.parse(booksJson);

window.addEventListener('load', function(){
  // ����� ������� ��� ������
  var output9 = document.getElementById('output9');

  // ���������� ��� ����� � �������
  for (var book in books9) {
    // ������� �������� ��� ������ ���������� � �����
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // ����������� ��������
    h3.innerHTML = books9[book].title;
    p1.innerHTML = "<b>Author:</b> " + books9[book].author;
    p2.innerHTML = "<b>Description:</b> " + books9[book].description;
    img.src = books9[book].image;
    img.style.width = "200px";

    // ��������� �������� � div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // ��������� div � output
    output9.appendChild(div);
  }
});
