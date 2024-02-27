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

  saveProduct(data: any, userId: any): Observable<any> {
    console.log(data)
    return this.http.post(this.baseUrl + 'products/create?userId=' + userId, data);
  }

  getAllProducts(page: number | undefined, pageSize: number | undefined, productType: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'products/get-all-paginated?productType=' + productType + '&page=' + page + '&size=' + pageSize);
  }

  editProduct(productId: any, data: {}): Observable<any> {
    return this.http.put(this.baseUrl + 'products/' + productId, data);
  }

  deleteProduct(productId: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'products/' + productId);
  }

  productById(productId: any): Observable<any> {
    return this.http.get(this.baseUrl + 'products/get-by-id/' + productId);
  }

  getAllProductsByUserId(page: number | undefined, pageSize: number | undefined, userId: any) {
    return this.http.get<any>(this.baseUrl + 'products/get-all-by-user/'+userId+'?page=' + page + '&size=' + pageSize);

  }
}
