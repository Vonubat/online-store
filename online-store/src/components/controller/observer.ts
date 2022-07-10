import Executor from './executor';

class Observer extends Executor {
  searchInput: HTMLInputElement;
  constructor() {
    super();
    this.searchInput = document.getElementById('search-filter') as HTMLInputElement;
  }

  observe(): void {
    this.searchInput.addEventListener('keydown', this.execute.bind(this));
  }
}

export default Observer;
