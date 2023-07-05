import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  toTop: any;

  ngOnInit(): void {
    this.toTop = document.querySelector('.to-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) this.toTop.classList.add('active');
      else this.toTop.classList.remove('active');
    });
  }

  backToTop() {
    console.log(document.getElementById('home'));
    document.getElementById('home')!.scrollIntoView(true);
  }
}
