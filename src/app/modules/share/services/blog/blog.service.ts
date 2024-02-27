import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  saveBlog(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'blogs/create', data);
  }

  getAllBlogs(page: number | undefined, pageSize: number | undefined): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'blogs/get-all-paginated?page=' + page + '&size=' + pageSize);
  }

  deleteBlog(blogId: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'blogs/' + blogId);
  }


  blogById(blogId: any): Observable<any> {
    return this.http.get(this.baseUrl + 'blogs/get-by-id?blogId=' + blogId);
  }
}
