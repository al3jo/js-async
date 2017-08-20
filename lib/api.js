class Api {
  constructor() {
    this.server = { id: 1, host: "server1.domain.com", type: 1 };
    this.versions = [
      { date: new Date("2016-03-21"), version: "1.0" },
      { date: new Date("2017-05-07"), version: "2.1" },
      { date: new Date("2016-04-11"), version: "1.1" },
      { date: new Date("2017-07-19"), version: "3.0" },
      { date: new Date("2016-07-09"), version: "2.0" }
    ];
    this.versions.sort(this._compare);
  }

  _compare(l, r) {
    if (l.version < r.version) {
      return 1;
    } else if (l.version > r.version) {
      return -1;
    } else {
      return 0;
    }
  }

  _getDelay() {
    // random number between 200 and 1000.
    return Math.floor(Math.random() * 800) + 200;
  }

  getServer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.server), this._getDelay());
    });
  }

  getVersions(serverId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.versions), this._getDelay());
    });
  }

  throwError() {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => reject(new Error("Intentional error.")),
        this._getDelay()
      );
    });
  }
}

export default Api;
