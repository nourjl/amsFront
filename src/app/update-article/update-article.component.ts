import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  public id;
  public articleToUpdate;
  public label;
  public price;
  public picture;
  public provider;

  constructor(private service: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );

    this.articleToUpdate = this.service.getArticle(this.id).subscribe(
      response => {
        this.label = response["label"];
        this.price = response["price"];
        this.picture = response["picture"];
        this.provider = response["provider"];
      }
    );
  }
  updateArticle() {
    this.articleToUpdate = {
      'label': this.label,
      'price': this.price,
      'picture': this.picture,
      'provider' : this.provider,
      'id': this.id
    }
    
    this.service.updateArticle(this.articleToUpdate).subscribe(
      response => {
        console.log(response);
      }
    );
    this.router.navigate(['listArticle']);
  }



}
