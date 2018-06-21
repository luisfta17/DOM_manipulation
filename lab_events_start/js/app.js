document.addEventListener('DOMContentLoaded', () => {
  const readingList = document.querySelector('#reading-list');
  const form = document.querySelector('#new-item-form');
  const deleteButton = document.querySelector('#delete-all');





  const handleForm = function (event) {
    event.preventDefault();
    const form = event.target;
    const titleInput = form.title.value;
    const authorInput = form.author.value;
    const categoryInput = form.category.value;
    const text = `I want to read ${titleInput} from the author: ${authorInput} that belongs to ${categoryInput}`;
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    readingList.append(paragraph);
    form.reset();

  }

  const resetForm = function (event) {
    readingList.innerHTML = "";
  }




  form.addEventListener('submit', handleForm);
  deleteButton.addEventListener('click', resetForm);
})
