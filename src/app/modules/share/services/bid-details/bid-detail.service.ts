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

  saveBid(userId: any, listingId: any, bidAmount:any): Observable<any> {
    return this.http.post(this.baseUrl + 'bid-details/create?userId=' + userId + '&listingId=' + listingId,
      {
        bidPrice:bidAmount
      });
  }

  getAllBidDetailsByListingId(page: any, pageSize: any, listingId: any):Observable<any> {
    return this.http.get<any>(this.baseUrl + 'bid-details/get-all-by-listing/'+listingId+'?page=' + page + '&size=' + pageSize);
  }
}
