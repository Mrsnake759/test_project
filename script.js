document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const button = header.querySelector('.accordion-button');

    if (content.classList.contains('open')) {
      content.classList.remove('open');
      content.style.maxHeight = 0;
      button.textContent = '+';
    } else {
      document.querySelectorAll('.accordion-content').forEach(item => {
        item.classList.remove('open');
        item.style.maxHeight = 0;
      });
      document.querySelectorAll('.accordion-button').forEach(btn => {
        btn.textContent = '+';
      });

      content.classList.add('open');
      requestAnimationFrame(() => {
        content.style.maxHeight = content.scrollHeight + 30 + 'px';
      });
      button.textContent = '-';
    }
  });
});
