import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import { HttpreqService } from '../httpreq.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public id:any;
  public Blog:any;
  public possiblecategories =["comedy","Technical","Sports","Entertainment","Literature"];
  constructor(private _route: ActivatedRoute, private _http: HttpreqService) { }

  ngOnInit(): void {
    let id=this._route.snapshot.paramMap.get('blogId');
     this._http.getSingleBlog(id).subscribe(
      (data:any)=>{
        this.Blog= data["data"];
    },
  (error: any)=>{
    console.log("error occured.");
    }
    )
  }
 public editBlog():any{
  this._http.edit(this.Blog.blogId, this.Blog).subscribe(
      (data:any)=>{
        setTimeout(() => {
          console.log("edited successfully");
        },2000);
      },
      (error:any)=>
      {
        console.log("error");
      }
    );
  }
}
