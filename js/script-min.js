function init(){var e,o=new ymaps.Map("map",{center:[59.939034783290936,30.32326835653081],zoom:17,controls:[]});e=new ymaps.Placemark([59.93853143250099,30.32419640084996],{balloonContentBody:"Офис компании 'NЁRDS'"},{iconLayout:"default#image",iconImageHref:"img/map-marker.png",iconImageSize:[231,190],iconImageOffset:[-155,-210]});var a=new ymaps.Clusterer({clusterDisableClickZoom:!1,clusterOpenBalloonOnClick:!1});a.add(e),o.geoObjects.add(a),o.behaviors.disable("scrollZoom")}ymaps.ready(init);var link=document.querySelector(".mod"),popup=document.querySelector(".modal-write"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),name=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),comment=popup.querySelector("[name=comment]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("name")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage?(name.value=storage,email.focus()):name.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){name.value&&email.value&&comment.value?isStoragesuport&&localStorage.setItem("namt",name.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"),console.log("Необходимо заполнить все поля!"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});