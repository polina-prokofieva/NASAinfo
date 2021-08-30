import NASAAPIService from './services/NASAAPIService';

import GalleryPage from "./components/Pages/GalleryPage/GalleryPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import TransferPage from "./components/Pages/TransferPage/TransferPage";

const nasaService = new NASAAPIService();

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    getData: nasaService.getPictureOfTheDay,
    exact: true
  }, {
    name: 'Home',
    component: HomePage,
    getData: nasaService.getPictureOfTheDay,
    top: true
  }, {
    name: 'Gallery',
    component: GalleryPage,
    getData: nasaService.getImages,
    top: true
  }, {
    name: 'Transfer',
    component: TransferPage,
    getData: nasaService.getTransfer,
    top: true
  }
];

routes.forEach(page => {
  page.path = page.path || `/${page.name.toLowerCase()}`;
});

const topRoutes = routes.filter(route => route.top);

export { routes, topRoutes };
