//Dependency inversion principle

class Fetch {
  request(url) {
    //return fetch(url).then(response => response.json());
    return Promise.resolve('Data from fetch')
  }
}

class LocalStorage {
  get() {
    const dataFromLS = 'Data from ls';
    return dataFromLS;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet() {
    return this.fetch.request('vk.com')
  }
}

class LSClient {
  constructor() {
    this.ls = new LocalStorage();
  }

  clientGet() {
    return this.ls.get('lskey')
  }
}

class Database {
  constructor(client) {
    this.client = client;
  }

  getData(key) {
    return this.client.clientGet(key);
  }
}

const db = new Database(new LSClient());
console.log(db.getData('ranf'));