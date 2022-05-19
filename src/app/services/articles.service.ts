import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=100');
  }

  getArticle(id: number) {
    return this.http.get('https://api.spaceflightnewsapi.net/v3/articles/' + id);
  }
}
