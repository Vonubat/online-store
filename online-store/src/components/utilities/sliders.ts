import * as noUiSlider from 'nouislider';
import { IGoodDeatails } from '../types';

export class Sliders {
  public quantitySlider: noUiSlider.API;
  public yearSlider: noUiSlider.API;
  public formatForSlider: noUiSlider.Formatter;
  public rangeFilter: HTMLDivElement;

  constructor() {
    this.formatForSlider = {
      from: function (formattedValue: string): number {
        return Number(formattedValue);
      },
      to: function (numericValue: number): number {
        return Math.round(numericValue);
      },
    };

    this.quantitySlider = noUiSlider.create(document.getElementById('slider-quantity') as noUiSlider.target, {
      start: [1, 30],
      connect: true,
      range: {
        min: 1,
        max: 30,
      },
      format: this.formatForSlider,
      tooltips: {
        // tooltips are output only, so only a "to" is needed
        to: function (numericValue: number): string {
          return numericValue.toFixed(0);
        },
      },
    });

    this.yearSlider = noUiSlider.create(document.getElementById('slider-year') as noUiSlider.target, {
      start: [2002, 2022],
      connect: true,
      range: {
        min: 2002,
        max: 2022,
      },
      format: this.formatForSlider,
      tooltips: {
        // tooltips are output only, so only a "to" is needed
        to: function (numericValue: number): string {
          return numericValue.toFixed(0);
        },
      },
    });

    this.formatForSlider = {
      from: function (formattedValue: string): number {
        return Number(formattedValue);
      },
      to: function (numericValue: number): number {
        return Math.round(numericValue);
      },
    };

    this.rangeFilter = document.getElementById('range-filter') as HTMLDivElement;
  }

  public setter(): void {
    const quantityValues: number[] = this.quantitySlider.get() as number[];
    const yearValues: number[] = this.yearSlider.get() as number[];
    localStorage.setItem('quantityStart', `${quantityValues[0]}`);
    localStorage.setItem('quantityEnd', `${quantityValues[1]}`);
    localStorage.setItem('yearStart', `${yearValues[0]}`);
    localStorage.setItem('yearEnd', `${yearValues[1]}`);
  }

  public filter(event: Event, data: IGoodDeatails[]): IGoodDeatails[] {
    const quantityStart: string = localStorage.getItem('quantityStart') || '';
    const quantityEnd: string = localStorage.getItem('quantityEnd') || '';
    const yearStart: string = localStorage.getItem('yearStart') || '';
    const yearEnd: string = localStorage.getItem('yearEnd') || '';

    if (quantityStart && quantityEnd && yearStart && yearEnd) {
      this.quantitySlider.set([+quantityStart, +quantityEnd]);
      this.yearSlider.set([+yearStart, +yearEnd]);
      return data.filter((item: IGoodDeatails): IGoodDeatails | undefined => {
        if (
          item.quantity >= +quantityStart &&
          item.quantity <= +quantityEnd &&
          item.year >= +yearStart &&
          item.year <= +yearEnd
        ) {
          return item;
        } else {
        }
        return;
      });
    } else {
      if (event.type === 'DOMContentLoaded') {
        this.quantitySlider.reset();
        this.yearSlider.reset();
      }
      return data;
    }
  }
}
export default Sliders;

// type EventCallback = (this: API, values: (number | string)[], handleNumber: number, unencoded: number[], tap: boolean, locations: number[], slider: API) => void
