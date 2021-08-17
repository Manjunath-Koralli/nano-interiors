import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  images = [
    "assets/images/proj-1.jpg",
    "assets/images/proj-2jpg",
    "assets/images/proj-3.jpg"
  ]
  ngOnInit(): void {
  }

}
