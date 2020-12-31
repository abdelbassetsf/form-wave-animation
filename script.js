const labels = document.querySelectorAll('.form-control label');
const email = document.getElementById('email');
const password = document.getElementById('password');

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((char, index) => {
      const span = `<span style="transition-delay:${
        index * 100
      }ms">${char}</span>`;
      return span;
    })
    .join('');
});

function handleLabelInputPosition(element, labelIndex) {
  element.addEventListener('input', e => {
    if (e.target.value) {
      labels[labelIndex].classList.add('shrink');
    } else {
      labels[labelIndex].classList.remove('shrink');
    }
  });
}

handleLabelInputPosition(email, 0);
handleLabelInputPosition(password, 1);
