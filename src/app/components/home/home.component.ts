import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[] = [];
  searchedArticles: Article[] | any = [];
  articlesCount!: number;
  search!: any;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.articlesService.getArticles()
      .subscribe((data: any) => {
        this.articles = data;
        this.searchedArticles = this.articles;
        this.articlesCount = this.articles.length;
      });
  }
  isSearchCompleted(ev: Event) {
    let values = ((ev.target as HTMLInputElement).value).split(' ');
    if (values.indexOf('') > -1) {
      values = values.slice(0, -1);
    }
    //console.log(values);

    let titleArticles = values.map(value => {
      return this.articles.filter(article => {
        if (article.title.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return article;
        }
        return;
      });
    });

    let descArticles = values.map(value => {
      return this.articles.filter(article => {
        if (article.summary.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return article;
        }
        return;
      });
    });

    if ((ev.target as HTMLInputElement).value === '') {
      this.searchedArticles = this.articles;
    } else {
      this.searchedArticles = [...new Set([
        ...(new Set(titleArticles.flat(Infinity))), 
        ...(new Set(descArticles.flat(Infinity)))
      ])];
    }
  }

}
