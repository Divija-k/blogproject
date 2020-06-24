import { Component, OnInit } from '@angular/core';
import { HttpreqService } from '../httpreq.service';
@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css']
})
export class BlogMainComponent implements OnInit {
  
  public Blogs: any;
  constructor(private httpreqService: HttpreqService) { }

  ngOnInit() {
              this.Blogs= this.httpreqService.getAllBlogs().subscribe(
                (data: any)=>{
                      this.Blogs= data["data"];
                  },
                (error: any)=>{
                  console.log("error occured.");
                  }
              )
              
  }
  

}
