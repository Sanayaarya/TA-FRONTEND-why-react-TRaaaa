let input = document.querySelector('.movie');
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

function elem(type, attr = {}, ...children) {
  let element = document.createElement(type);

  children.forEach((child) => {
    for (let key in attr) {
      if (key.startsWith('data-')) {
        element.startsWith(key.attr[key]);
      } else {
        element[key] = attr[key];
      }
    }

    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === 'string') {
      var node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function createUI() {
  event.preventDefault();
  ul.innerHTML = '';
  allMovies.forEach((each) => {
    var list = elem(
      'li',
      { className: 'list' },
      elem('input', {
        type: 'checkbox',
        className: 'checkbox',
        checked: each.watched,
      }),
      elem('h3', {}, each.name),
      elem('p', { className: 'cross' }, '❌')
    );

    ul.append(list);

    var cross = document.querySelector('.cross');

    cross.addEventListener('click', () => {
      list.style.display = 'none';
    });
  });
}