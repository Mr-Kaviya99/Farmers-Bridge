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
    console.log(email)
    console.log(password)
    return this.http.get<any>(this.baseUrl + 'login/' + email + '/' +password,
      {observe: 'response' as 'body'})
      .pipe(map(data => {
        return data;
      }));
  }

  public getUserData(
    token: string
  ): Observable<any> {
    return this.http.get(this.baseUrl + 'user/details?token=' + token);
  }

  public setAvatar(
    user: string,
    formData: any,
  ): Observable<any> {
    return this.http.post(this.baseUrl + 'user-avatar/user/manage?user=' + user, formData);
  }

  backup():Observable<any>{
    return this.http.get(this.baseUrl + 'backup/create-and-download');
  }

}
