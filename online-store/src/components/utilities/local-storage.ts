import { IGoodDeatails } from '../types/index';

export class LocalStorage {
  resetLocalStorage: HTMLButtonElement;
  constructor() {
    this.resetLocalStorage = document.getElementById('reset-local-storage') as HTMLButtonElement;
  }

  save(data: IGoodDeatails[]): void {
    localStorage.setItem('data', `${JSON.stringify(data)}`);
  }

  reset(event: Event): void {
    if ((event.target as HTMLElement).id === 'reset-local-storage') {
      localStorage.clear();
      location.reload();
    }
  }
}
export default LocalStorage;
