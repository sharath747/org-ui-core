import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-media-detector',
  templateUrl: './media-detector.component.html',
  styleUrls: ['./media-detector.component.css']
})
export class MediaDetectorComponent implements OnInit {
  @ViewChild('detector') detector: ElementRef;
  screenSize = '';
  constructor() { }

  ngOnInit() {
    this.onResize();
  }

  onResize() {
    console.log('Window resize happened' + this.screenSize);
  }

}
