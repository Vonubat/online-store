import { IGoodDeatails } from '../types/index';

export class Search {
  public searchInput: HTMLInputElement;
  constructor() {
    this.searchInput = document.getElementById('search-filter') as HTMLInputElement;
  }

  public search(event: Event, data: IGoodDeatails[]): IGoodDeatails[] {
    let inputValue: string;

    // check on saved search value and set the search value
    if (
      typeof (event.target as HTMLInputElement).value === 'undefined' ||
      (event.target as HTMLInputElement).value === 'cameraEvent' // exclude camera-filter event
    ) {
      inputValue = localStorage.getItem('search') || '';
    } else {
      inputValue = (event.target as HTMLInputElement).value;
    }

    if ((event.target as HTMLInputElement).type === 'DOMContentLoaded' && localStorage.getItem('search')) {
      (event.target as HTMLInputElement).value = localStorage.getItem('search') || '';
      inputValue = localStorage.getItem('search') || '';
    }

    localStorage.setItem('search', `${inputValue}`);
    this.searchInput.value = inputValue;

    // filter goods according to search value
    return data.filter((item: IGoodDeatails): IGoodDeatails | undefined => {
      const ItemValue: string = item.phone_name.toLowerCase();
      const searchValue = new RegExp(`${inputValue.toLowerCase()}`);
      if (ItemValue.match(searchValue)) {
        return item;
      } else return;
    });
  }
}

export default Search;
