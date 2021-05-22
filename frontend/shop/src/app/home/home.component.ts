import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[]=[]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post<Product[]>("http://localhost:3000/products", {responseType: 'text', witCredentials: true}).subscribe(data =>
      this.products =data
    )
  }
 addCart(tmp : Product){
    alert(tmp.name+" hozzáadva akosárhoz!")
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
