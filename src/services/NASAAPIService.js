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

  // getAsteroids(startDate = '2015-09-07', endDate) {
  //   const params = [`start_date=${startDate}`];
  //
  //   if(endDate) {
  //     params.push(`end_date=${endDate}`)
  //   }
  //
  //   return this.getResource('/neo/rest/v1/feed', params);
  // }
  //
  // getAsteroid(asteroid_id) {
  //   return this.getResource(`/neo/rest/v1/neo/${asteroid_id}`);
  // }

  getPictureOfTheDay = async (date) => {
    return this.getResource('/planetary/apod', date && [`date=${date}`]);
  }

  getMarsWeather = async () => {
    return this.getResource('/insight_weather/', ['feedtype=json', 'ver=1.0']);
  }
}