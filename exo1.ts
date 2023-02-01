import {
  searchImages,
  log,
  getData,
  composeMozaic,
  sendToServer,
} from './cbAPI';

function exo1(req: string) {
  searchImages(req, (urls) => {
    // Obtenir les données des urls
    var DataArray = [];
    for (let i = 0; i < urls.length; i++) {
      getData(urls[i], (data) => {
        DataArray.push(data);
        if (DataArray.length === urls.length) {
          composeMozaic(DataArray, (data) => {
            sendToServer(data, (rep) => {
              log('fini');
            });
          });
        }
      });
    }
    // Une fois obtenu on en fais une mozaique

    // On renvoie l'image au server
  });
}

const bt1 = document.querySelector('#bt1') as HTMLElement;
bt1.onclick = () => exo1('chats');
