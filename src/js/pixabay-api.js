import axios from 'axios';

const KEY = '42554743-967d4a87bc85b22a32926b61b';
const BASE_URI = 'https://pixabay.com/api/';

export default async function getImagesFromServer(searchvalue, page) {
  const LINK = `${BASE_URI}?key=${KEY}&q=${searchvalue}&page=${page}&per_page=18`;
  return await axios
    .get(LINK)
    .then(({ data }) => data.hits)
    .catch(error => {
      console.error('Error while fetching images from pixabay:', error.message);
    });
}
