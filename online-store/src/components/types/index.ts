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

export type TColorValue = 'blue' | 'black' | 'green' | 'red' | 'white' | 'gray';

export const allColors: TColorValue[] = ['blue', 'black', 'green', 'red', 'white', 'gray'];

export type TCameraValue = 1 | 2 | 3 | 4;

export const allCameras: TCameraValue[] = [1, 2, 3, 4];

export type TBrandValue = 'apple' | 'samsung' | 'xiaomi' | 'sony' | 'microsoft' | 'google' | 'nothing' | 'oneplus';

export const allBrands: TBrandValue[] = [
  'apple',
  'samsung',
  'xiaomi',
  'sony',
  'microsoft',
  'google',
  'nothing',
  'oneplus',
];

export type TSortValue =
  | 'name-ascent'
  | 'name-descent'
  | 'year-ascent'
  | 'year-descent'
  | 'quantity-ascent'
  | 'quantity-descent';

export const allSorts: TSortValue[] = [
  'name-ascent',
  'name-descent',
  'year-ascent',
  'year-descent',
  'quantity-ascent',
  'quantity-descent',
];

export interface PartialFormatter {
  to: (value: number) => string | number;
  from?: (value: string) => number | false;
}
export interface Formatter extends PartialFormatter {
  from: (value: string) => number | false;
}
