import { IGoodDeatails } from '../types/index';

export class Search {
  searchInput: HTMLInputElement;
  constructor() {
    this.searchInput = document.getElementById('search-filter') as HTMLInputElement;
  }

  search(data: IGoodDeatails[], value: string): IGoodDeatails[] {
    return data.filter((item: IGoodDeatails): IGoodDeatails | undefined => {
      const ItemValue: string = item.phone_name.toLowerCase();
      const searchValue = new RegExp(`${value.toLowerCase()}`);
      if (ItemValue.match(searchValue)) {
        return item;
      } else return;
    });
  }
}

export default Search;
