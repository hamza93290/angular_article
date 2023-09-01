import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getData(): Article[]{
    console.log("dataaa");
    return []
  }
}
