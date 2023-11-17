import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'primaprime';

  @ViewChild('canvas3d', { static: true })
  canvas3d!: ElementRef;
  spline!: Application;

  ngOnInit(): void {
    if (this.canvas3d && this.canvas3d.nativeElement) {
      this.spline = new Application(this.canvas3d.nativeElement);
      this.spline.load('https://prod.spline.design/oaIEWq6IabiJg6oQ/scene.splinecode');
    }
  }
}

