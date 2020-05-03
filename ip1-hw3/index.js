const arr1 = ['img/apple.png', 'img/banana.png', 'img/grape.png', 'img/kiwi.png', 'img/orange.png', 'img/peach.png', 'img/strawberry.png'];
const arr2 = ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange', 'Peach', 'Strawberry'];
const button = document.getElementById('button');
const altTag = document.getElementById("altTag");
const img = document.getElementById('img');

eventListeners();
function eventListeners() {
  button.addEventListener('click', setImg);
}
function setImg() {
  const rnd = Math.floor(Math.random() * 7);
  img.src = arr1[rnd];
  img.title = arr2[rnd];
  altTag.innerHTML = arr2[rnd];
}
