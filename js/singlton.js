class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.data = "a";
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  #fetchFromUrl(url) {
    fetch(url)
      .then((data) => data.json())
      .then((data) => (this.data = data));
  }

  getData() {
    return this.data;
  }
}
