import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  article!: Article;
  articleId!: number;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => this.articleId = data.id);
    this.getArticle(this.articleId);
  }

  getArticle(id: number) {
    this.articlesService.getArticle(id).subscribe((data: any) => this.article = data);
  }

}
