
/*=====КАРТА=====*/
  ymaps.ready(init);

  function init () {
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты
          center:[59.939034783290936,30.32326835653081],
          // Масштаб карты
          zoom: 17,
          // Выключаем все управление картой
          controls: []
      }); 
              
      var myGeoObjects = [];
      
      /*Указываем координаты метки*/
      myGeoObjects = new ymaps.Placemark([59.93853143250099,30.32419640084996],{
                      balloonContentBody: 'Офис компании \'NЁRDS\'',
                      },{
                      iconLayout: 'default#image',
                      // Путь до нашей картинки
                      iconImageHref: 'img/map-marker.png', 
                      // Размеры иконки
                      iconImageSize: [231, 190],
                      // Смещение верхнего угла относительно основания иконки
                      iconImageOffset: [-155, -210]
      });
                  
      var clusterer = new ymaps.Clusterer({
          clusterDisableClickZoom: false,
          clusterOpenBalloonOnClick: false,
      });
      
      clusterer.add(myGeoObjects);
      myMap.geoObjects.add(clusterer);
      /* Отключаем zoom*/
      myMap.behaviors.disable('scrollZoom');
  }


  /*=====ПОПАП=====*/
 
  var link = document.querySelector(".mod");
  var popup = document.querySelector(".modal-write");
  var close = popup.querySelector(".modal-close");
  var form = popup.querySelector("form");
  var name = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  var comment = popup.querySelector("[name=comment]");

  var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");

  });

  form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !comment.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Необходимо заполнить все поля!");
    } else {
      if (isStoragesuport) {
        localStorage.setItem("namt", name.value);
    }
  }
  });

//закрытие по esc
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");

      }
    }
   });
