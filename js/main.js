/*   popup   */

var link = document.querySelectorAll(".btn-popup");
var popup = document.querySelector(".cart-popup");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("cart-popup--hide");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.add("cart-popup--hide");
  }
});

/*   header   */

var navList = document.querySelector(".main-nav");
var navBtn = document.querySelector(".page-header__toggle");

navList.classList.add("main-nav--js");
navBtn.classList.remove("page-header__toggle--hidden");
navBtn.classList.add("page-header__toggle--open");

navBtn.addEventListener("click", function () {
  navList.classList.toggle("main-nav--js");
  navBtn.classList.toggle("page-header__toggle--open");
})

/*   map   */

function initMap() {
  var mishka = {
    lat: 59.938568,
    lng: 30.322747
  };
  var map = new google.maps.Map(document.querySelector(".js-map"), {
    zoom: 17,
    center: mishka,
    disableDefaultUI: true
  });
  var image = "../img/icon-map-pin.svg";
  var marker = new google.maps.Marker({
    position: mishka,
    map: map,
    icon: image
  });
}
