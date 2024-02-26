import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  saveProduct(data: any): Observable<any> {
    console.log(data)
    return this.http.post(this.baseUrl + 'product/create', data);
  }

  getAllProducts(page: number | undefined, pageSize: number | undefined, productType: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'allUser?productType=' + productType + '?page=' + page + '&size=' + pageSize);
  }

  editProduct(productId: any, data: {}): Observable<any> {
    return this.http.post(this.baseUrl + 'product/update?productId', data);
  }

  deleteProduct(productId: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'product/delete/' + productId);
  }

  productById(productId: any): Observable<any> {
    return this.http.get(this.baseUrl + 'product/' + productId);
  }
}
