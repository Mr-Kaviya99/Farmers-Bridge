import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BidDetailService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  saveBid(userId: any, listingId: any, data: any): Observable<any> {
    console.log(data)
    return this.http.post(this.baseUrl + 'bid-details/create?userId=' + userId + '&listingId=' + listingId, data);
  }
}
