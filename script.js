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

// Images
const imageURLS = [
  'image-product-1.jpg',
  'image-product-2.jpg',
  'image-product-3.jpg',
  'image-product-4.jpg',
];
const mobileNextButton = document.querySelector('#mobile-next-image');
const mobilePrevButton = document.querySelector('#mobile-prev-image');
const mobileMainImage = document.querySelector('#mobile-main-image');

let currentImage = 0;

function mobileNextImage() {
  if (currentImage === imageURLS.length - 1) {
    currentImage = 0;
  } else {
    currentImage++;
  }
  mobileMainImage.src = `./imgs/${imageURLS[currentImage]}`;
}

function mobilePrevImage() {
  if (currentImage === 0) {
    currentImage = 3;
  } else {
    currentImage--;
  }
  mobileMainImage.src = `./imgs/${imageURLS[currentImage]}`;
}

mobilePrevButton.addEventListener('click', mobilePrevImage);
mobileNextButton.addEventListener('click', mobileNextImage);

// Desktop Thumbnail Click
function changeImage(e) {
  currentImage = e.target.getAttribute('image');

  // Update main image
  document.querySelector(
    '#desktop-main-image'
  ).src = `./imgs/${imageURLS[currentImage]}`;

  // Change thumb active states
  document.querySelector('.thumb-box.active').classList.remove('active');
  document
    .querySelector(`.thumb-box[value="${currentImage}"]`)
    .classList.add('active');
}

// Thumnail event listeners
document.querySelectorAll('.thumb-box').forEach((thumb) => {
  thumb.addEventListener('click', (e) => changeImage(e));
});

function toggleImagesModal(show) {
  if (show) {
    document.querySelector('#images-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  } else {
    document.querySelector('#images-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

document
  .querySelector('#desktop-main-image')
  .addEventListener('click', () => toggleImagesModal(true));

document
  .querySelector('#images-modal')
  .addEventListener('click', () => toggleImagesModal(false));

document.querySelector('#modal-main-image').addEventListener('click', (e) => {
  e.stopPropagation();
});
