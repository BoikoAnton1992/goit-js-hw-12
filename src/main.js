import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';
import getImagesFromServer from './js/pixabay-api';
import createGalleryMarkup from './js/render-functions';
import iziToast from 'izitoast';
import cross from './img/cross.png';

const search = document.querySelector('.search');
const loader = document.querySelector('.loader');
const searchForm = document.querySelector('.input-container');
const loadMore = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

let page;
let searchValue;

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

function resetPage() {
  gallery.innerHTML = null;
}

function showError() {
  hideLoader();
  return iziToast.error({
    message:
      'Sorry, there are no images matching <br>your search query. Please try again!',
    position: 'topRight',
    backgroundColor: '#ef4040',
    titleColor: '#ffffff',
    messageColor: '#ffffff',
    iconUrl: cross,
    theme: 'dark',
    close: false,
  });
}

function initializeLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

async function showImages() {
  showLoader();
  const data = await getImagesFromServer(searchValue, page);
  if (data.length < 1) return showError();
  createGalleryMarkup(data);
  initializeLightbox();
  hideLoader();
}

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  resetPage();
  searchValue = search.value.trim();
  page = 1;
  showImages(searchValue);
});

loadMore.addEventListener('click', () => {
  page++;
  showImages();
});
