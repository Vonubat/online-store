import noUiSlider from 'nouislider';
import { Formatter } from '../types';

export class Sliders {
  quantitySlider: HTMLDivElement;
  yearSlider: HTMLDivElement;

  constructor() {
    this.quantitySlider = document.getElementById('slider-quantity') as HTMLDivElement;
    this.yearSlider = document.getElementById('slider-year') as HTMLDivElement;
  }

  create(): void {
    const formatForSlider: Formatter = {
      from: function (formattedValue: string): number {
        return Number(formattedValue);
      },
      to: function (numericValue: number): number {
        return Math.round(numericValue);
      },
    };

    noUiSlider.create(this.quantitySlider, {
      start: [1, 30],
      connect: true,
      range: {
        min: 1,
        max: 30,
      },
      format: formatForSlider,
      tooltips: {
        // tooltips are output only, so only a "to" is needed
        to: function (numericValue: number): string {
          return numericValue.toFixed(0);
        },
      },
    });

    noUiSlider.create(this.yearSlider, {
      start: [2002, 2022],
      connect: true,
      range: {
        min: 2002,
        max: 2022,
      },
      format: formatForSlider,
      tooltips: {
        // tooltips are output only, so only a "to" is needed
        to: function (numericValue: number): string {
          return numericValue.toFixed(0);
        },
      },
    });
  }
}
export default Sliders;
