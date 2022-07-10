export interface IGoodDeatails {
  phone_name: string;
  brand: string;
  year: number;
  color: string;
  camera: number;
  popular: boolean;
  quantity: number;
  price: number;
  slug: string;
}

export interface IGoods {
  status: boolean;
  filters?: { [index: string]: string };
  data: Readonly<IGoodDeatails>[];
}
