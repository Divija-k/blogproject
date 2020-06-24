import { Component, OnInit } from '@angular/core';
import { HttpreqService } from '../httpreq.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public Blog:any;
  constructor(private httpreqService: HttpreqService,private _route: ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    let id= this._route.snapshot.paramMap.get('blogId');
    this.Blog= this.httpreqService.getSingleBlog(id).subscribe(
      (data:any)=>{
        this.Blog= data["data"];
    },
  (error: any)=>{
    console.log("error occured.");
    }
    )
  }
 public delete():any{
   this.httpreqService.deleteBlog(this.Blog.blogId).subscribe(
     ( data: any)=>{
      setTimeout(()=>{
        this._router.navigate(['/home'])},1000)
      },
     ( error: any)=>{
        console.log("error occured");
      }
    );
 }

}
