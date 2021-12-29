import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  urlArticles = 'http://localhost:8080/articles';
  article: any;

  constructor(private Http: HttpClient) { }

  listArticles() {
    return this.Http.get(this.urlArticles + '/list');
  }
  createArticle(myform) {
    this.article = {
      'label': myform.value.articleLabel,
      'price': myform.value.articlePrice,
      'picture': myform.value.articlePicture,
      'provider' : myform.value.articleProvider
    }
    return this.Http.post(this.urlArticles + '/add', this.article);
  }

  updateArticle(myObj) {
    return this.Http.put(this.urlArticles + '/' + myObj['id'], myObj);
  }
  deleteArticle(myObj) {
    return this.Http.delete(this.urlArticles + '/' + myObj['id'], myObj)
  }
  getArticle(id) {
    return this.Http.get(this.urlArticles + '/' + id)
  }

}
