import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import{ Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class HttpreqService {
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs/';
  public authToken= 'MjFkYzFmYjJkNjg5YWE1MDZiYWUyYmY3N2IyMGM1ZThlNjg3OTU5MTc1Yzc2ZmJmZjY2MTZmMjA0NjdiYmUxZjM3YWE5NzFhYTY4ODBmZmZhOGIzN2Q3ZDMyODI5MTc0NTZjMDhjNmIzNmU5ZWJlM2NmNTc1NzQyZjNkMmVhMGE4MA==';
  constructor(private _http:HttpClient) { }

  public getAllBlogs():any{
    let response = this._http.get(this.baseUrl+'all?authToken='+this.authToken);
    return response;
  }

  public getSingleBlog( blogId: any):any{
    let response = this._http.get(this.baseUrl+'view/'+blogId+'?authToken='+this.authToken, blogId);
    return response;
  }

  public create(blogData : any):any{
    let response= this._http.post(this.baseUrl+'create'+'?authToken='+this.authToken, blogData);
    return response;
  }
  public edit(blogId: any, blogData:any):any{
    let response= this._http.put(this.baseUrl+blogId+'/edit'+'?authToken='+this.authToken,blogId,blogData);
    return response;
  }
  public deleteBlog(blogId:any):any{
    let response= this._http.post(this.baseUrl+'/view'+'/'+blogId+'/'+'delete?authToken='+this.authToken,blogId);
    return response;
  }

}

