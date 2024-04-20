document.addEventListener('DOMContentLoaded', function () {
    var accButtons = document.querySelectorAll('.accordion .accordion-button');
  
    accButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var content = this.nextElementSibling;
        var icon = this.querySelector('.accordion-icon img');
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
  
        // Закрытие всех открытых секций и возврат иконок в исходное состояние
        accButtons.forEach(function (otherBtn) {
          if (otherBtn !== btn) {
            otherBtn.setAttribute('aria-expanded', 'false');
            otherBtn.nextElementSibling.style.maxHeight = '0';
            otherBtn.querySelector('.accordion-icon img').src = 'refs/akkordion_arrow.png';
            otherBtn.querySelector('.accordion-icon img').style.transform = 'rotate(0deg)';
          }
        });
  
        // Переключаем состояние aria-expanded, высоту и источник иконки для текущего элемента
        this.setAttribute('aria-expanded', !isExpanded);
        content.style.maxHeight = isExpanded ? '0' : content.scrollHeight + 'px';
        icon.src = isExpanded ? 'refs/akkordion_arrow.png' : 'refs/akkordion_close.png';
        icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(270deg)';
      });
    });
  });
  