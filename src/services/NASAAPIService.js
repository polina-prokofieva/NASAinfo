export default class NASAAPIService {
  _apiBase = 'https://api.nasa.gov';
  _apiImages = 'https://images-api.nasa.gov/search?media_type=image&page=1';
  _apiKey = 'Z1FMxuzDUZu2v1JXYMHQSg40SzLpgua05AfFeELa';
  _apiKeyParam = `api_key=${this._apiKey}`;

  catchError = (result, url) => {
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, received ${result.status}`);
    }
  }

  getResource = async (url, params = []) => {
    const fullUrl = `${this._apiBase}${url}?${params.concat([this._apiKeyParam]).join('&')}`
    const result = await fetch(fullUrl);

    this.catchError(result, fullUrl);

    return await result.json();
  }

  getPictureOfTheDay = async (date) => {
    return this.getResource('/planetary/apod', date && [`date=${date}`]);
  }

  getTransfer = async () => {
    return this.getResource('/techtransfer/patent/');
  }

  getImages = async () => {
    const images = await fetch(this._apiImages);

    this.catchError(images, this._apiImages);

    return await images.json();
  }
}