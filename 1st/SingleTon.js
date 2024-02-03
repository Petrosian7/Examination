class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
  fetch(url) {
    return this._fetchDataFromURL(url);
  }
  async _fetchDataFromURL(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
const instance = new Singleton();
const instance2 = new Singleton();
console.log(instance === instance2);
console.log(instance.fetch(instance.url));
Object.freeze(instance);
