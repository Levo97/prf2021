import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[]=[
    {itemid: 1, name:"alma", description: "nagyon finom", prize: 10, img_name: "assets/img/alma.png", quantity:1}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
