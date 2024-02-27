import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  saveListing(data: any, userId: any): Observable<any> {
    console.log(data)
    return this.http.post(this.baseUrl + 'listings/create?userId=' + userId, data);
  }

  getAllListings(page: number | undefined, pageSize: number | undefined, role: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'listings/get-all-paginated?role=' + role + '&page=' + page + '&size=' + pageSize);
  }

  editListing(listingId: any, data: {}): Observable<any> {
    return this.http.post(this.baseUrl + 'listings/update?listingId', data);
  }

  deleteListing(listingId: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'listings/' + listingId);
  }

  listingById(listingId: any): Observable<any> {
    return this.http.get(this.baseUrl + 'listings/get-by-id?listingId=' + listingId);
  }

  getAllListingsByUserId(page: number | undefined, pageSize: number | undefined, userId: any) {
    return this.http.get(this.baseUrl + 'listings/get-all-by-user/' + userId + '?page=' + page + '&size=' + pageSize);
  }
}
