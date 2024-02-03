class Singleton {
  constructor(url) {
    if (!Singleton.instance) {
      this.#fetchFromUrl(url)
        .then((d) => d.json())
        .then((d) => {
          const newData = d.groupBy("id");
          this.data = newData;
          Singleton.instance = this;
        });
    }
    return Singleton.instance;
  }

  async #fetchFromUrl(url) {
    return await fetch(url);
  }

  getData() {
    return this.data;
  }
}

const groupBy = function (groupParam) {
  return this.reduce(function (aggr, val) {
    const key = val[groupParam];
    aggr[key] = aggr[key] || [];
    aggr[key].push(val);
    return aggr;
  }, {});
};

Array.prototype.groupBy = groupBy;
