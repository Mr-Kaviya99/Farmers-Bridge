import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'users/login?email=' + email + '&password=' + password,
      {observe: 'response' as 'body'})
      .pipe(map(data => {
        return data;
      }));
  }

  public register(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'users/create', data);
  }

  public getUserById(userId: any): Observable<any> {
    return this.http.get(this.baseUrl + 'getById' + userId);
  }

  public getAllUsers(page: number | undefined, pageSize: number | undefined, roleType: any): Observable<any> {
    console.log(roleType)
    return this.http.get<any>(this.baseUrl + 'users/get-all?role='+roleType+'&page=' + page + '&size=' + pageSize);
  }

  public restrictUser(userId: any) {
    return this.http.put<any>(this.baseUrl + 'users/restrict?userId='+userId,{})
  }

}
