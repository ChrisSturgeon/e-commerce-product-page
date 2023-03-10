const hamburgerOpen = document.querySelector('#hamburger-open');
const hamburgerClose = document.querySelector('#hamburger-close');
const sideModal = document.querySelector('#side-modal');
const sideBar = document.querySelector('#side-bar');

// Prevent click from bubbling
sideBar.addEventListener('click', (event) => {
  event.stopPropagation();
});

function showSideNav() {
  sideModal.style.display = 'block';
  setTimeout(() => {
    sideModal.classList.add('modal-in');
    sideBar.classList.add('out');
  }, 1);
}

function hideSideNav() {
  sideBar.classList.remove('out');
  sideModal.classList.remove('modal-in');
  setTimeout(() => {
    sideModal.style.display = 'none';
  }, 250);
}

hamburgerOpen.addEventListener('click', showSideNav);
hamburgerClose.addEventListener('click', hideSideNav);
sideModal.addEventListener('click', hideSideNav);

// Controlling mobile images

const imageURLS = ['image-product-1.jpg', 'image-product-2.jpg'];
const mobileNextButton = document.querySelector('#mobile-next-image');
const mainImage = document.querySelector('#main-image');

let currentImage = imageURLS[0];
function mobileNextImage() {
  mainImage.src = `./imgs/${imageURLS[1]}`;
}

mobileNextButton.addEventListener('click', mobileNextImage);
