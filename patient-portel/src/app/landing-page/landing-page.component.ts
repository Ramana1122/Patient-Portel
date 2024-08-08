import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SlickCarouselService } from '../services/slick-carousel.service';
import 'slick-carousel';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {
  @ViewChild('sliderContainer', { static: false }) sliderContainer!: ElementRef;
  title = 'patient-portel';
  slickOptions = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  constructor(private el: ElementRef,private slickCarouselService: SlickCarouselService) { }

  ngAfterViewInit(): void {
     if (this.sliderContainer) {
      this.slickCarouselService.initializeSlickCarousel('.doctor-slider');
    }
    // Initialize slick carousel after view is initialized
    $(this.el.nativeElement.querySelector('.specialities-slider')).slick(this.slickOptions);
    
    this.slickCarouselService.initializeSlickCarousel('.features-slider');
  }

}
