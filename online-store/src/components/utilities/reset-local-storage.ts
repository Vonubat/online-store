import Search from './search-filter';

export class ResetLocalStorage extends Search {
  resetLocalStorage: HTMLButtonElement;
  constructor() {
    super();
    this.resetLocalStorage = document.getElementById('reset-local-storage') as HTMLButtonElement;
  }

  reset(): void {
    this.searchInput.value = '';
    localStorage.clear();
  }
}
export default ResetLocalStorage;
