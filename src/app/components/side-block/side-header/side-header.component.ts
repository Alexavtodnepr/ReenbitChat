import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.scss']
})
export class SideHeaderComponent implements OnInit {
  openSearch: boolean = true;
  burgerTogle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  shownInput() {
    this.openSearch = !this.openSearch;
  }

  toggle() {
    this.burgerTogle = !this.burgerTogle;
  }
}
