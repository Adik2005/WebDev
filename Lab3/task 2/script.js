const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');
const errorEl = document.getElementById('error');

function setError(message) {
  errorEl.textContent = message;
}

function createTodoItem(text) {
  // <li class="item">
  //   <input type="checkbox" />
  //   <span>text</span>
  //   <button>Delete</button>
  // </li>

  const li = document.createElement('li');
  li.classList.add('item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  checkbox.setAttribute('aria-label', 'Mark as done');

  const span = document.createElement('span');
  span.classList.add('text');
  span.textContent = text;

  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.classList.add('delete');
  delBtn.textContent = 'Delete';

  checkbox.addEventListener('change', () => {
    li.classList.toggle('done', checkbox.checked);
  });

  delBtn.addEventListener('click', () => {
    list.removeChild(li); // removeChild requirement
  });

  li.appendChild(checkbox); // appendChild requirement
  li.appendChild(span);
  li.appendChild(delBtn);

  return li;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = input.value.trim();
  if (value.length === 0) {
    setError('Please type a task.');
    return;
  }

  setError('');
  const item = createTodoItem(value);
  list.appendChild(item);

  input.value = '';
  input.focus();
});
