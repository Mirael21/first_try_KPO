// ������ JSON-������ ����
var booksJson = "{\"book_0\": {\"title\": \"Narcissus in Chains (Anita Blake Vampire Hunter (Hardcover))\", \"author\": \"Laurell K. Hamilton\", \"image\": \"http://images.amazon.com/images/P/0425181685.01.MZZZZZZZ.jpg\", \"description\": \"A woman merges the powers of the vampire and the werewolf who have infected her to help the innocents she has sworn to protect.\"}}";

// ����������� JSON-������ � JavaScript-������
var books4 = JSON.parse(booksJson);

window.addEventListener('load', function(){
  // ����� ������� ��� ������
  var output4 = document.getElementById('output4');

  // ���������� ��� ����� � �������
  for (var book in books4) {
    // ������� �������� ��� ������ ���������� � �����
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var img= document.createElement('img');

    // ����������� ��������
    h3.innerHTML = books4[book].title;
    p1.innerHTML = "<b>Author:</b> " + books4[book].author;
    p2.innerHTML = "<b>Description:</b> " + books4[book].description;
    img.src = books4[book].image;
    img.style.width = "200px";

    // ��������� �������� � div

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);

    // ��������� div � output
    output4.appendChild(div);
  }
});
