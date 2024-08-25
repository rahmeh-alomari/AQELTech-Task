import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  carouselItems = [
    { src: '../../../assets/images/blog-1.jpg', alt: 'Image 1' },
    { src: '../../../assets/images/blog-2.png', alt: 'Image 2' },
    { src: '../../../assets/images/blog-3.jpg', alt: 'Image 3' },
    { src: '../../../assets/images/blog-4.webp', alt: 'Image 4' },
    { src: '../../../assets/images/blog-5.png', alt: 'Image 5' }
  ];
  customOptions: any = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>', 
      '<i class="fa fa-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3      }
    }
  }

  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel(this.customOptions);
  }
}