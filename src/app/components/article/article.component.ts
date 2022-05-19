import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleComponent implements OnInit {

  @Input()
  article!: Article;

  @Input()
  search!: any;

  @Input()
  filtered!: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  getHighlighterClass(): string {
    return "'highlight'";
  }
}
