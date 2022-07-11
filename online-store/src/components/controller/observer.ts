import Executor from './executor';

class Observer extends Executor {
  constructor() {
    super();
  }

  observeSearch(): void {
    this.search.searchInput.addEventListener('click', this.executeSearch.bind(this));
    this.search.searchInput.addEventListener('input', this.executeSearch.bind(this));
  }

  observeColor(): void {
    this.color.blue.addEventListener('click', this.executeColor.bind(this, 'blue'));
    this.color.black.addEventListener('click', this.executeColor.bind(this, 'black'));
    this.color.green.addEventListener('click', this.executeColor.bind(this, 'green'));
    this.color.red.addEventListener('click', this.executeColor.bind(this, 'red'));
    this.color.white.addEventListener('click', this.executeColor.bind(this, 'white'));
    this.color.gray.addEventListener('click', this.executeColor.bind(this, 'gray'));
  }
}

export default Observer;
