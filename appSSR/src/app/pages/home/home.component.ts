import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { TweenMax, TimelineMax } from 'gsap';
declare var TweenMax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //
  // @ViewChild('headline') headline;
  // @ViewChildren('infoSpan') infoSpan !: QueryList<any>;
  constructor() { }

  ngOnInit() {
    // this.layerAnimation();
  }
  // layerAnimation() {
  //   // const t1: TimelineMax = new TimelineMax();
  //   TweenMax.addLabel('d');
  //   TweenMax.from(this.headline.nativeElement, 0.5, {x: -100, opacity: 0}, 'd+=1');
  //   TweenMax.from(this.infoSpan.nativeElement, 0.5, {x: -100, opacity: 0}, 0.15, 'd+=1.5');
  //
  //   return TweenMax;
  //
  // }
}


//
// let t1 = new TimelineMax({});
// t1.addLabel('d');
// t1.staggerFrom(".grid__box .grid__box-item", 0.2, {height:0, ease: Power2.easeOut}, 0.15);
// t1.from(".header__box-logo img", .5, {y: -100, opacity:0}, "d+=0.2");
// t1.staggerFrom(".header__box-nav a", 0.5, {x: -50, opacity:0}, 0.25, "d+=0.2");
// t1.from("#burger", 0.5, {x: 50, opacity:0}, 0.25, "d+=0.2");


// t1.from("h1", 0.5, { x:-100, opacity:0 }, "d+=0.5");
// t1.staggerFrom(".info-block span", 0.5, { x:-100, opacity:0}, 0.15, "d+=0.5");
// t1.from(".order", 0.5, { x:-100, opacity:0}, "d+=0.5");
// t1.staggerFrom(".social a", 0.5, { scale:0,opacity:0}, 0.15, "d+=1");
// t1.from(".first .img", 0.3, { x:100, opacity:0 }, "d+=1.2");
//
