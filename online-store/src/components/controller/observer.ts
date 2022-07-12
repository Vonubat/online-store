import Executor from './executor';

class Observer extends Executor {
  constructor() {
    super();
  }

  observeSearch(): void {
    this.search.searchInput.addEventListener('click', this.executeAll.bind(this));
    this.search.searchInput.addEventListener('input', this.executeAll.bind(this));
  }

  observeColor(): void {
    this.color.blue.addEventListener('click', this.executeAll.bind(this));
    this.color.black.addEventListener('click', this.executeAll.bind(this));
    this.color.green.addEventListener('click', this.executeAll.bind(this));
    this.color.red.addEventListener('click', this.executeAll.bind(this));
    this.color.white.addEventListener('click', this.executeAll.bind(this));
    this.color.gray.addEventListener('click', this.executeAll.bind(this));
  }
}

export default Observer;
