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
  $('#menuButton').click(function (event) {
    event.stopPropagation();
    $('#menu').toggle(500);

    var img = $(this).find('img');

    if (img.attr('src') === 'refs/burger.png') {
      $(this).css('transform', 'rotate(-360deg)');

      setTimeout(function () {
        img.attr('src', 'refs/closeBurger.png');
      }, 250);
    } else {
      $(this).css('transform', 'rotate(0deg)');

      setTimeout(function () {
        img.attr('src', 'refs/burger.png');
      }, 250);
    }
  });

  $(document).click(function (event) {
    if (!$(event.target).closest('#menu, #menuButton').length) {
      $('#menu').hide(500);
      $('#menuButton').css('transform', 'rotate(0deg)');

      setTimeout(function () {
        $('#menuButton').find('img').attr('src', 'refs/burger.png');
      }, 250);
    }
  });

  $('#menu').click(function (event) {
    event.stopPropagation();
  });
});


$(document).ready(function () {
  // Функция для проверки видимости элемента на экране
  function checkVisibility(element) {
    var $element = $(element);
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    var elementTop = $element.offset().top;
    var elementBottom = elementTop + $element.height();

    return elementBottom <= windowBottom && elementTop >= windowTop;
  }

  // Функция для анимации элементов при скролле
  function animateOnScroll() {
    $('.itemMove_1').each(function () {
      if (checkVisibility(this) && !$(this).hasClass('is_visible__itemMove_1')) {
        $(this).addClass('is_visible__itemMove_1');
      }
    });
    $('.itemMove_2').each(function () {
      if (checkVisibility(this) && !$(this).hasClass('is_visible__itemMove_2')) {
        $(this).addClass('is_visible__itemMove_2');
      }
    });
    $('.itemMove_3').each(function () {
      if (checkVisibility(this) && !$(this).hasClass('is_visible__itemMove_3')) {
        $(this).addClass('is_visible__itemMove_3');
      }
    });

    $('.rightSide_itemMove_1').each(function () {
      if (checkVisibility(this) && !$(this).hasClass('is_visible__rightSide_itemMove_1')) {
        $(this).addClass('is_visible__rightSide_itemMove_1');
      }
    });
    $('.rightSide_itemMove_2').each(function () {
      if (checkVisibility(this) && !$(this).hasClass('is_visible__rightSide_itemMove_2')) {
        $(this).addClass('is_visible__rightSide_itemMove_2');
      }
    });
    $('.rightSide_itemMove_3').each(function () {
      if (checkVisibility(this) && !$(this).hasClass('is_visible__rightSide_itemMove_3')) {
        $(this).addClass('is_visible__rightSide_itemMove_3');
      }
    });
  }

  // Вызов функции при скролле и при загрузке страницы
  $(window).on('scroll', animateOnScroll);
  animateOnScroll();
});


$(document).ready(function () {
  const buttons = document.querySelectorAll('.animateButton');
  if (buttons) {
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.animationPlayState = 'running'; // Запускаем анимацию
      });

      button.addEventListener('mouseleave', () => {
        button.style.animationPlayState = 'paused'; // Пауза анимации
      });
    });
  }
});