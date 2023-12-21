let questions = [
    {
      text: 'Кто главный краш Николь?',
      variants: ['Александ Юрьевич', 'Лемех', 'Иванов', 'Корсак'],
      right: 0
    },
    {
      text: 'Какая самая маленькая планета в солнечной системе?',
      variants: ['Марс', 'Уран', 'Меркурий', 'Нептун'],
      right: 2
    },
    {
      text: 'Какая самая легкая планета в солнечной системе',
      variants: ['Уран', 'Венера', 'Меркурий', 'Сатурн'],
      right: 1
    }
];

let html = '';

  questions.forEach((question, index) => {
    html += `<div>
      <p>${question.text}</p>
      ${question.variants.map((variant, i) => `
        <label>
          <input type="radio" name="question${index}" value="${i}">
          ${variant}
        </label>
      `).join('')}
    </div>`;
  });

  document.getElementById('test').innerHTML = html;

  document.getElementById('button').addEventListener('click', function() {
    let answers = questions.map(question => question.right);
    const questionsDivs = document.querySelectorAll('#test > div');
    questionsDivs.forEach((questionDiv, index) => {
      const inputs = questionDiv.querySelectorAll('input[type="radio"]');
      inputs.forEach((input, i) => {
        if (input.checked) {
          if (i === answers[index]) {
            input.parentElement.classList.add('right');
          } else {
            input.parentElement.classList.add('wrong');
          }
        }
      });
    });
  });