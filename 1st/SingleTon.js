class Singleton {
  static instance;

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

const singleton1 = new Singleton();
const singleton2 = Singleton.getInstance();
const singleton3 = Singleton.getInstance();
console.log(singleton2 === singleton3);
