const form = document.querySelector('form');
const commentList = document.querySelector('#comment-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = e.target.name.value;
  const comment = e.target.comment.value;

  if (name && comment) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.textContent = name;
    p.textContent = comment;

    li.appendChild(h3);
    li.appendChild(p);
commentList.appendChild(li);

e.target.name.value = '';
e.target.comment.value = '';
  }
});