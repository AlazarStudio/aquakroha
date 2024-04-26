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

// ------------------------------------------------------------------------------------------------

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
