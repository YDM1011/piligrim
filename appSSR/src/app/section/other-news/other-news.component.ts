import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-news',
  templateUrl: './other-news.component.html',
  styleUrls: ['./other-news.component.scss']
})
export class OtherNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onActivate() {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 30 ); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
