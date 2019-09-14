import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GalleryItem, Gallery, ImageSize, ThumbnailsPosition, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: GalleryItem[];

  ngOnInit() {
    // Set gallery items array
    this.images = [
      new ImageItem({ src: 'https://preview.ibb.co/jrsA6R/img12.jpg', thumb: 'https://preview.ibb.co/jrsA6R/img12.jpg' }),
      new ImageItem({ src: 'https://preview.ibb.co/kPE1D6/clouds.jpg', thumb: 'https://preview.ibb.co/kPE1D6/clouds.jpg' }),
      // ... more items
    ];
  }
}

const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  },
  {
    srcUrl:     'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
  }
];