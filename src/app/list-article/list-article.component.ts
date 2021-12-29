import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  articles: any;

  constructor(private service: ArticleService, private router: Router) { }

  ngOnInit() {
    this.service.listArticles().subscribe(
      response => {
        this.articles = response;
      }
    );
  }

  deleteArticle(myObj) {
    this.service.deleteArticle(myObj).subscribe(response => {
      console.log(response);
      this.refreshListArticles();
    })
  }
  refreshListArticles() {
    this.service.listArticles().subscribe(
      response => {
        this.articles = response;
      }
    );
  }
  updateArticle(myObj) {
    this.router.navigate(['updateArticle' + '/' + myObj['id']]);
  }


}

