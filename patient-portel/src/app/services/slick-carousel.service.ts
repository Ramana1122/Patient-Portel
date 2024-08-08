import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlickCarouselService {
  initSlick(selector: string, options: any): void {
    (window as any).$(document).ready(() => {
      (window as any).$(selector).slick(options);
    });
  }

  initializeSlickCarousel(selector: string) {
    $(selector).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }



  initializeSlickCarouse2(selector: string) {
    $(selector).slick(this.getSlickOptions());
  }

  private getSlickOptions(): any {
    return {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  }
  





  
}
