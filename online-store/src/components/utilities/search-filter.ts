import { IGoodDeatails } from '../types/index';

export class Search {
  search(data: IGoodDeatails[], value: string): IGoodDeatails[] {
    return data.filter((item: IGoodDeatails) => {
      const ItemValue = item.phone_name.toLowerCase();
      const searchValue = new RegExp(`${value.toLowerCase()}`);
      if (ItemValue.match(searchValue)) {
        return item;
      } else return;
    });
  }
}

export default Search;
