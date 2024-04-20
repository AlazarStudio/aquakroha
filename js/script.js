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

          setTimeout(function () {
            otherBtn.querySelector('.accordion-icon img').src = 'refs/akkordion_arrow.png';
          }, 100)
          otherBtn.querySelector('.accordion-icon img').style.transform = 'rotate(0deg)';
        }
      });

      this.setAttribute('aria-expanded', !isExpanded);
      content.style.maxHeight = isExpanded ? '0' : content.scrollHeight + 'px';
      setTimeout(function () {
        icon.src = isExpanded ? 'refs/akkordion_arrow.png' : 'refs/akkordion_close.png';
      }, 100)
      icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(270deg)';
    });
  });
});

$(document).ready(function () {
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

document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('.galery img');
  var fullscreenDiv = document.createElement('div');
  fullscreenDiv.classList.add('fullscreen-bg', 'hidden');

  var imgTag = document.createElement('img');
  fullscreenDiv.appendChild(imgTag);

  var closeButton = document.createElement('button');
  closeButton.textContent = '×';
  closeButton.classList.add('close-btn');
  fullscreenDiv.appendChild(closeButton);

  document.body.appendChild(fullscreenDiv);

  images.forEach(function (img) {
    img.addEventListener('click', function () {
      imgTag.src = img.src;
      fullscreenDiv.classList.replace('hidden', 'visible');
      document.body.classList.add('body-no-scroll');
    });
  });

  closeButton.addEventListener('click', function () {
    fullscreenDiv.classList.replace('visible', 'hidden');
    document.body.classList.remove('body-no-scroll');
  });

  fullscreenDiv.addEventListener('click', function (e) {
    if (e.target === fullscreenDiv) {
      fullscreenDiv.classList.replace('visible', 'hidden');
      document.body.classList.remove('body-no-scroll');
    }
  });
});

$(document).ready(function () {
  $('#menuButton').click(function () {
    $('#menu').toggle(300);

    var img = $(this).find('img');

    if (img.attr('src') == 'refs/burger.png') {
      $('#menuButton').css('transform', 'rotate(-360deg)')
      
      setTimeout(function () {
        img.attr('src', 'refs/closeBurger.png');
      }, 250)
    } else {
      $('#menuButton').css('transform', 'rotate(0deg)')

      setTimeout(function () {
        img.attr('src', 'refs/burger.png');
      }, 250)
    }
  });
});
