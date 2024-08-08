import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SlickCarouselService } from 'src/app/services/slick-carousel.service';

@Component({
  selector: 'app-doctor-widget',
  templateUrl: './doctor-widget.component.html',
  styleUrls: ['../stylehome.css']
})
export class DoctorWidgetComponent implements AfterViewInit {
  @ViewChild('sliderContainer', { static: false }) sliderContainer!: ElementRef;
  title = 'patient-portel';
  

  constructor(private el: ElementRef,private slickCarouselService: SlickCarouselService) { }

  ngAfterViewInit(): void {
     if (this.sliderContainer) {
      this.slickCarouselService.initializeSlickCarousel('.doctor-slider');
    }
    // Initialize slick carousel after view is initialized
    // $(this.el.nativeElement.querySelector('.specialities-slider')).slick(this.slickOptions);
    
    this.slickCarouselService.initializeSlickCarouse2('.features-slider');
  }
}
