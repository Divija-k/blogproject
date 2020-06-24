import { Component, OnInit} from '@angular/core';
import { HttpreqService } from '../httpreq.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogtitle:any;
  public blogdes:any;
  public blogbody:any;
  public category:any;
  public possiblecategories =["comedy","Technical","Sports","Entertainment","Literature"];
  constructor(private http:HttpreqService, private route: Router) {
    
   }

  ngOnInit(): void {
  }
  //creating object of our own
  public createBlog():any{
      let blogData= {
        title: this.blogtitle,
        description: this.blogdes,
        blogBody: this.blogbody,
        category: this.category
      }// end of our own object

      this.http.create(blogData).subscribe(
        (data:any)=>{ 
           alert("blog posted successfully");
      setTimeout(() => {
        this.route.navigate(['/home']);
      }, 1000);
      },
        (error:any)=>{  console.log("error");}
      );


  }
  
  
  

}
