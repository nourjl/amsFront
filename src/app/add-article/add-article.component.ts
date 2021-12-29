import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  article: any;

  constructor(private service: ArticleService, private router: Router) { }

  ngOnInit(): void {
  }

  createArticle(myform) {
    this.service.createArticle(myform).subscribe(
      response => {
        console.log(response);
      }
    );
    this.router.navigate(['listArticle']);
  }

}

