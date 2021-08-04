export default class NASAAPIService {
  _apiBase = 'https://api.nasa.gov';
  _apiKey = 'Z1FMxuzDUZu2v1JXYMHQSg40SzLpgua05AfFeELa';
  _apiKeyParam = `api_key=${this._apiKey}`;

  getResource = async (url, params = []) => {
    const fullUrl = `${this._apiBase}${url}?${params.concat([this._apiKeyParam]).join('&')}`
    const res = await fetch(fullUrl);

    if (!res.ok) {
      throw new Error(`Could not fetch ${fullUrl}, received ${res.status}`);
    }

    return await res.json();
  }

  getPictureOfTheDay = async (date) => {
    return this.getResource('/planetary/apod', date && [`date=${date}`]);
  }

  getTransfer = async () => {
    return this.getResource('/techtransfer/patent/');
  }
}