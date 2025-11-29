// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Products {

  constructor(private http: HttpClient) {}
  // constructor(private http: HttpClient) {}

  // getProduct(){
  //   const url = "https://dummyjson.com/products"
  //   return this.http.get(url);
  // }
}
