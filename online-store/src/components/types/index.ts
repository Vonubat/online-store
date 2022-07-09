export interface IGoods {
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

export interface IData {
  status: boolean;
  data: Readonly<IGoods>[];
}
