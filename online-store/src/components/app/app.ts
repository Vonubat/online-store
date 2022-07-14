import Observer from './../controller/observer';

export class App extends Observer {
  constructor() {
    super();
  }

  start(): void {
    this.observeDOMContentLoaded();
    this.observeSearch();
    this.observeColor();
    this.observeCamera();
    this.observeBrand();
    this.observePopular();
    this.observeSort();
    this.observeSliders();
    this.observeLocalStorage();
  }
}

export default App;
