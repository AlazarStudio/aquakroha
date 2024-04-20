document.addEventListener('DOMContentLoaded', function () {
  var accButtons = document.querySelectorAll('.accordion .accordion-button');

  accButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var content = this.nextElementSibling;
      var icon = this.querySelector('.accordion-icon img');
      var isExpanded = this.getAttribute('aria-expanded') === 'true';

      accButtons.forEach(function (otherBtn) {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherBtn.nextElementSibling.style.maxHeight = '0';
          otherBtn.querySelector('.accordion-icon img').src = 'refs/akkordion_arrow.png';
          otherBtn.querySelector('.accordion-icon img').style.transform = 'rotate(0deg)';
        }
      });

      this.setAttribute('aria-expanded', !isExpanded);
      content.style.maxHeight = isExpanded ? '0' : content.scrollHeight + 'px';
      icon.src = isExpanded ? 'refs/akkordion_arrow.png' : 'refs/akkordion_close.png';
      icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(270deg)';
    });
  });
});

$(document).ready(function() {
  let active_block = null;

  $('.blog_info__btns___button').click(function () {
    let block_id = $(this).attr('data_block_info');
    let block = $(`#${block_id}`);
    let textBlock = $(`#${block_id} .blog_info__text`);

    $('.blog').not(block).css('max-height', '580px');
    $('.blog_info__text').not(textBlock).css('max-height', '360px');
    $('.blog_info__btns___button').not(this).html('Подробнее <img src="refs/Polygon 7.png" alt="">');
    
    if (active_block !== block_id) {
      block.css('max-height', '2000px'); 
      textBlock.css('max-height', '2000px');
      $(this).html('Свернуть <img src="refs/Polygon 8.png" alt="">');
      active_block = block_id;
    } else {
      block.css('max-height', '580px');
      textBlock.css('max-height', '360px');
      $(this).html('Подробнее <img src="refs/Polygon 7.png" alt="">');
      active_block = null;
    }
  });
});