import NASAAPIService from './services/NASAAPIService';

import GalleryPage from "./components/Pages/GalleryPage/GalleryPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import TransferPage from "./components/Pages/TransferPage/TransferPage";

const nasaService = new NASAAPIService();

const routes = [
  {
    name: 'Home',
    component: HomePage,
    getData: nasaService.getPictureOfTheDay
  }, {
    name: 'Gallery',
    component: GalleryPage,
    getData: nasaService.getPictureOfTheDay
  }, {
    name: 'Transfer',
    component: TransferPage,
    getData: nasaService.getTransfer
  }
];

routes.forEach(page => {
  page.path = `/${page.name.toLowerCase()}`;
});

export { routes };