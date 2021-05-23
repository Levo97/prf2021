import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { HttpClient } from '@angular/common/http'
import { templateJitUrl } from '@angular/compiler';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[]=[]

  constructor(private http: HttpClient, private AppComponent: AppComponent) { }

  ngOnInit(): void {
    this.http.post<Product[]>("http://localhost:3000/products", {responseType: 'text', witCredentials: true}).subscribe(data =>
      this.products =data

    )
    this.AppComponent.ngOnInit();

  }
 addCart(tmp : Product){
    let cartAll = localStorage.getItem('cart');
    if(cartAll){
      var cart = JSON.parse(cartAll);
      cart.push(tmp)
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cart = []
      cart.push(tmp)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
}
