import Executor from './executor';

class Observer extends Executor {
  searchInput: HTMLInputElement;
  constructor() {
    super();
    this.searchInput = document.querySelector('#search-filter') as HTMLInputElement;
  }

  observe(): void {
    this.searchInput.addEventListener('keyup', this.execute.bind(this, this.loader));
  }
}

export default Observer;
