import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'primaprime';

  @ViewChild('canvas3d1', { static: true })
  canvas3d1!: ElementRef;
  spline1!: Application;

  @ViewChild('canvas3d2', { static: true })
  canvas3d2!: ElementRef;
  spline2!: Application;

  ngOnInit(): void {
    this.initCanvas(this.canvas3d1, 'https://prod.spline.design/oaIEWq6IabiJg6oQ/scene.splinecode');
    this.initCanvas(this.canvas3d2, 'https://prod.spline.design/oaIEWq6IabiJg6oQ/scene.splinecode');
  }

  initCanvas(canvasElement: ElementRef, sceneUrl: string) {
    if (canvasElement && canvasElement.nativeElement) {
      const splineApp = new Application(canvasElement.nativeElement);
      splineApp.load(sceneUrl);
      // You can store splineApp in an array or manage it as needed
    }
  }
}
