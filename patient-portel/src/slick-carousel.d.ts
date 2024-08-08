// src/custom-typings/slick-carousel.d.ts
import * as $ from 'jquery';

declare module 'slick-carousel' {
  interface SlickOptions {
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    dots?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: {
        slidesToShow: number;
      };
    }>;
  }

  interface JQuery {
    slick(options?: SlickOptions): JQuery;
  }
}
