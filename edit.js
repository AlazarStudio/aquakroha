function getData(tableName, id) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: "admin/includes/CRUD/getDataFromDB.php",
      type: "POST",
      data: {
        id: id,
        tableName: tableName,
      },
      dataType: "json",
      success: function (data) {
        let dataArray = Object.values(data);
        resolve(dataArray);
      },
      error: function (xhr, status, error) {
        console.error("Error:", xhr, status, error);
        reject(error);
      },
    });
  });
}

function stringToImageArray(imageString) {
  return imageString.split(",").map((image) => image.trim());
}

function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

// ----------------------------------------------------------------

// Функция для отображения всплывающего окна с сообщением
function showPopup(message, success) {
  var popup = document.getElementById("popup");
  var popupMessage = document.getElementById("popup-message");
  success
    ? $(".popup-content").css("background", "green")
    : $(".popup-content").css("background", "red");

  popupMessage.innerHTML = message; // Устанавливаем сообщение во всплывающее окно
  popup.style.display = "flex"; // Отображаем всплывающее окно
}

// Функция для закрытия всплывающего окна
function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none"; // Скрываем всплывающее окно
}

// ----------------------------------------------------------------
let modal = $(".modal-content").empty();

getData("gallery").then((response) => {
  let mass = [];

  response.forEach((element) => {
    mass.push(stringToImageArray(element.img));
  });

  let block = $(".gallery_full").empty();
  let fullWidthCount = 0;

  mass.forEach((element) => {
    if (fullWidthCount == 0) {
      block.append(`
            <img src="admin/img/${element}" alt="" class="fullWidth">
        `);
    } else if (fullWidthCount != 5 && fullWidthCount != 6) {
      block.append(`
            <img src="admin/img/${element}" alt="" class="halfWidth">
        `);
    } else if (fullWidthCount == 5) {
      block.append(`
            <img src="admin/img/${element}" alt="" class="fullWidth">
        `);
    } else if (fullWidthCount == 6) {
      block.append(`
            <img src="admin/img/${element}" alt="" class="fullWidth">
        `);
      fullWidthCount = 0;
    }

    fullWidthCount++;
  });
});

getData("gallery").then((response) => {
  let mass = [];
  let imgsMax = 9;
  let imgsCount = 0;

  response.forEach((element) => {
    if (imgsCount < imgsMax) {
      mass.push(stringToImageArray(element.img));
      imgsCount++;
    }
  });

  let block = $(".gallery_main").empty();
  let fullWidthCount = 0;

  mass.forEach((element) => {
    if (fullWidthCount == 0) {
      block.append(`
            <img src="admin/img/${element}" alt="" class="fullWidth">
        `);
    } else if (fullWidthCount != 5 && fullWidthCount != 6) {
      block.append(`
            <img src="admin/img/${element}" alt="" class="halfWidth">
        `);
    } else if (fullWidthCount == 5) {
      block.append(`
            <img src="admin/img/${element}" alt="" class="fullWidth">
        `);
    } else if (fullWidthCount == 6) {
      block.append(`
            <img src="admin/img/${element}" alt="" class="fullWidth">
        `);
      fullWidthCount = 0;
    }

    fullWidthCount++;
  });
});

// ------------------------------------------------------------------------------------------------

getData("faq").then((response) => {
  let block = $(".faq").empty();

  response.forEach((element) => {
    block.append(`
      <div class="accordion-item">
        <button class="accordion-button" id="accordion-button-${element.id}" aria-expanded="false">
            <span class="accordion-title">
                ${element.title}
            </span>
            <span class="accordion-icon">
                <img src="refs/akkordion_arrow.png" alt="">
            </span>
        </button>
        <div class="accordion-content">
            <div class="line"></div>
            <p>
                ${element.text}
            </p>
        </div>
      </div>
    `);
  });

  initializeAccordion();
});

function initializeAccordion() {
  var accButtons = document.querySelectorAll(".accordion .accordion-button");

  accButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var content = this.nextElementSibling;
      var icon = this.querySelector(".accordion-icon img");
      var isExpanded = this.getAttribute("aria-expanded") === "true";

      accButtons.forEach(function (otherBtn) {
        if (otherBtn !== btn) {
          otherBtn.setAttribute("aria-expanded", "false");
          otherBtn.nextElementSibling.style.maxHeight = "0";

          setTimeout(function () {
            otherBtn.querySelector(".accordion-icon img").src =
              "refs/akkordion_arrow.png";
          }, 100);
          otherBtn.querySelector(".accordion-icon img").style.transform =
            "rotate(0deg)";
        }
      });

      this.setAttribute("aria-expanded", !isExpanded);
      content.style.maxHeight = isExpanded ? "0" : content.scrollHeight + "px";
      setTimeout(function () {
        icon.src = isExpanded
          ? "refs/akkordion_arrow.png"
          : "refs/akkordion_close.png";
      }, 100);
      icon.style.transform = isExpanded ? "rotate(0deg)" : "rotate(270deg)";
    });
  });
}

getData("feedback").then((response) => {
  let block = $(".feedbackSwiper").empty();

  response.forEach((element) => {
    block.append(`
    <swiper-slide style="height: 500px;">
      <div class="feedback_slide">
          <div class="feedback_slide__img">
              <img src="admin/img/${stringToImageArray(element.img)}" alt="">
          </div>
          <div class="feedback_slide__title">
              ${element.title}
          </div>
          <div class="feedback_slide__text">
              ${element.text}
          </div>
      </div>
    </swiper-slide>
    `);
  });
});

getData("video").then((response) => {
  let block = $(".videoSwiper").empty();

  response.forEach((element) => {
    block.append(`
      <swiper-slide>
        <div class="video_frame">
          
            ${element.text}
          
        </div>
      </swiper-slide>
    `);
  });
});
