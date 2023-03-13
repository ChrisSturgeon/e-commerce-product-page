// Navigation element variables
const hamburgerOpen = document.querySelector('#hamburger-open');
const hamburgerClose = document.querySelector('#hamburger-close');
const sideModal = document.querySelector('#side-modal');
const sideBar = document.querySelector('#side-bar');

// Displays mobile side-navigation bar
function showSideNav() {
  sideModal.style.display = 'block';
  setTimeout(() => {
    sideModal.classList.add('modal-in');
    sideBar.classList.add('out');
  }, 1);
}

// Hides mobile side-navigation bar
function hideSideNav() {
  sideBar.classList.remove('out');
  sideModal.classList.remove('modal-in');
  setTimeout(() => {
    sideModal.style.display = 'none';
  }, 250);
}

// Prevent click on mobile sidebar from bubbling
sideBar.addEventListener('click', (event) => {
  event.stopPropagation();
});

// Mobile navigation event listeners
hamburgerOpen.addEventListener('click', showSideNav);
hamburgerClose.addEventListener('click', hideSideNav);
sideModal.addEventListener('click', hideSideNav);

// **** Images ****
const imageURLS = [
  'image-product-1.jpg',
  'image-product-2.jpg',
  'image-product-3.jpg',
  'image-product-4.jpg',
];

// Image Variables
const mobileMainImage = document.querySelector('#mobile-main-image');
const desktopMainImage = document.querySelector('#desktop-main-image');
const modalMainImage = document.querySelector('#modal-main-image');
let currentImage = 0;

// Updates all main images to current image
function updateMainImages() {
  mobileMainImage.src = `./imgs/${imageURLS[currentImage]}`;
  desktopMainImage.src = `./imgs/${imageURLS[currentImage]}`;
  modalMainImage.src = `./imgs/${imageURLS[currentImage]}`;
}

// Changes active thumbnail class to current image
function updateThumbnails() {
  document.querySelectorAll('.thumb-box.active').forEach((thumbnail) => {
    thumbnail.classList.remove('active');
  });

  document
    .querySelectorAll(`.thumb-box[value="${currentImage}"]`)
    .forEach((thumbnail) => {
      thumbnail.classList.add('active');
    });
}

// Switches main image to next in order
function nextImage() {
  if (currentImage === imageURLS.length - 1) {
    currentImage = 0;
  } else {
    currentImage++;
  }
  updateMainImages();
  updateThumbnails();
}

// Switches main image to previous in order
function prevImage() {
  if (currentImage === 0) {
    currentImage = 3;
  } else {
    currentImage--;
  }
  updateMainImages();
  updateThumbnails();
}

// Switches main image to clicked image
function selectImage(e) {
  e.stopPropagation();
  currentImage = e.target.getAttribute('image');
  updateMainImages();
  updateThumbnails();
}

// Shows/hides image lightbox
function toggleImagesModal(show) {
  if (show) {
    document.querySelector('#images-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleImagesModal(false);
      }
    });
  } else {
    document.querySelector('#images-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Add event listeners for opening and closing modal
document
  .querySelector('#desktop-main-image')
  .addEventListener('click', () => toggleImagesModal(true));

document
  .querySelector('#desktop-main-image')
  .addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      toggleImagesModal(true);
    }
  });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    toggleImagesModal(true);
  }
});

// Prevent click on modal main image from closing modal
document
  .querySelector('#images-modal')
  .addEventListener('click', () => toggleImagesModal(false));

document.querySelector('#modal-main-image').addEventListener('click', (e) => {
  e.stopPropagation();
});

// Previous image event listeners
document.querySelectorAll('.prev-image').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    prevImage();
  });
});

// Next image event listeners
document.querySelectorAll('.next-image').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    nextImage();
  });
});

// Thumbnail event listeners
document.querySelectorAll('.thumb-box').forEach((thumb) => {
  thumb.addEventListener('click', (e) => selectImage(e));
});

// Keyboard event listeners
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    nextImage();
  }

  if (e.key === 'ArrowLeft') {
    prevImage();
  }
});
