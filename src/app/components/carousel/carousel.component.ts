import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener  } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    MatGridListModule,
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {

  images: any[] = [];
  mainImage: any;
  currentIndex: number = 0;

  ngOnInit(): void {
    this.images = [
      { src: 'assets/images/img1.webp', alt: 'Image 1', title: 'Title 1' },
      { src: 'assets/images/img2.jpeg', alt: 'Image 2', title: 'Title 2' },
      { src: 'assets/images/img3.webp', alt: 'Image 3', title: 'Title 3' },
      { src: 'assets/images/img4.png', alt: 'Image 4', title: 'Title 4' }
    ];
    this.mainImage = this.images[0];
  }

  setMainImage(image: any) {
    this.mainImage = image;
  }

  isMainImage(image: any) {
    return this.mainImage === image;
  }

  scrollUp() {
    const thumbnails = document.querySelector('.thumbnails');
    thumbnails!.scrollBy({ top: -100, behavior: 'smooth' });
  }

  scrollDown() {
    const thumbnails = document.querySelector('.thumbnails');
    thumbnails!.scrollBy({ top: 100, behavior: 'smooth' });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 768) {
      // Lógica para el modo móvil
    } else {
      // Lógica para el modo escritorio
    }
  }
}
