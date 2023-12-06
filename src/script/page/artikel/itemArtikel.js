import DataSource from '../../config/dataResource.js';
import dataEndPoint from '../../config/dataEndPoint.js';
import detailArtikel from '../detailArtikel/detailArtikel.js';
import elementArtikel from './elementItemArtikel.js';

const itemArtikel = () => {
  const boxItem = document.querySelector('.item-artikel');
  DataSource.getItmes(dataEndPoint.ARTIKEL)
    .then((response) => response.json())
    .then((data) => {
      const allTeam = data.Artikel;
      allTeam.forEach((items) => {
        const newItem = document.createElement('div');
        newItem.classList.add('box-item-artikel');
        newItem.onclick = () => {
          window.location.hash = `#detailArtikel/${items.id}`;
          detailArtikel();
        };
        elementArtikel(boxItem, items, newItem);
      });
    });
};

export default itemArtikel;