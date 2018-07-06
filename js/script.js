var popup = document.querySelector(".search");

var form = document.querySelector(".hotel-search");

var link = document.querySelector(".search-button");

var isPopupVisible = false;

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("arriaval");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (isPopupVisible) {
    popup.classList.remove("modal-show");
    isPopupVisible = false;
  } else {
    popup.classList.add("modal-show");
    isPopupVisible = true;
  }

});


form.addEventListener("submit", function (evt) {
  if (!arriaval.value || !departure.value) {
    evt.preventDefault();
    form.classList.remove("modal-error");
    form.offsetWidth = popup.offsetWidth;
    form.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("arrival", arriaval.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (form.classList.contains("modal-show")) {
      form.classList.remove("modal-show");
      form.classList.remove("modal-error");
    }
  }
});
