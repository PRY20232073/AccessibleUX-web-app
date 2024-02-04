import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interfaces-pages',
  templateUrl: './interfaces-pages.component.html',
  styleUrls: ['./interfaces-pages.component.css']
})
export class InterfacesPagesComponent  implements OnInit {
  vista=1;
  ngOnInit() {
    this.vista=1;
  }
  changeViewTest(vista:number){
    this.vista=vista;
    console.log(this.vista);
  }
}
