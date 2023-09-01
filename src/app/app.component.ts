import { Component , OnInit, OnDestroy} from '@angular/core';
import { Article } from './article/article.model';
import { ArticleService } from './article.service';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'tp-article';
  articles: Article[] = [];
  updateOn = false

  selectedArticle: Article = new Article ('dummy','link')

  constructor( private service: HttpService){
    

  }

  ngOnDestroy(): void {
  }


  ngOnInit(): void {
    this.service.getArticles().subscribe( restArticles => this.articles = restArticles)
  }

 
  selectArticle(article : Article){

    this.selectedArticle = article;
    this.updateOn = true
    console.log(this.selectedArticle);
    
  }

  addArticle(title:HTMLInputElement , link:HTMLInputElement){
    console.log(`Adding article title : ${title.value} and link : ${link.value}`)
    this.service.addArticle(new Article(title.value , link.value,0)).subscribe(data => {this.ngOnInit()})
   // location.reload()
    return false
  }
  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
  }
}
