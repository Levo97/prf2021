import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) {
    this.sum = 0
  }

  products: Product[] = []
  sum : number

  ngOnInit(): void {
    this.http.post<Product[]>(environment.Url+"/products", {responseType: 'text', witCredentials: true}).subscribe(data =>
      this.products =data
    )

  }

  remove(product: Product){



      this.ngOnInit()

  }

}
