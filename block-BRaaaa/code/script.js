let input = document.querySelector('input');
let ul = document.querySelector('ul');

let allMovies = [];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    createUI();
    event.target.value = '';
  }
});

function createUI() {
  allMovies.forEach((elem) => {
    let list = document.createElement('li');
    list.classList.add('list');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = elem.watched;
    checkbox.classList.add('checkbox');

    let movieName = document.createElement('h3');
    movieName.innerText = elem.name;
    movieName.classList.add('movieName');

    let cross = document.createElement('p');
    cross.innerText = 'watch';

    cross.addEventListener('click', () => {
      if (cross.innerText === 'watch') {
        cross.innerText = 'watched';
        cross.style.color = ' green';
      } else {
        cross.innerText = 'watch';
        cross.style.color = 'red';
      }
    });

    list.append(checkbox, movieName, cross);
    ul.append(list);
  });
  allMovies = [];
}