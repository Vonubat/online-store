import Executor from './executor';

class Observer extends Executor {
  searchInput: HTMLInputElement;
  constructor() {
    super();
    this.searchInput = document.getElementById('search-filter') as HTMLInputElement;
  }

  observeSearch(): void {
    this.searchInput.addEventListener('keyup', this.executeSearch.bind(this));
    this.searchInput.addEventListener('click', this.executeSearch.bind(this));
  }
}

export default Observer;
