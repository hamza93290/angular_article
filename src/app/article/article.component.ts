import { Component , EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Article  } from './article.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

   @Input()
   articles! :Article[];

   @Output()
   articleSelected = new EventEmitter<Article>()

   constructor(private service: HttpService){

   }

   getArticles(){
    this.service.getArticles().subscribe(data => this.articles = data)
  }
  deleteArticle( id: number){

    this.service.deleteArticle(id).subscribe(data => {this.getArticles()})
    console.log("l'article " + id + " a ete supprimer");
    
  }

  selectArticle(article : Article){

    this.articleSelected.emit(article)

  }


   ngOnInit() {
    
   }


  // @Input()
  // article:  Article
  // constructor() {
  //   this.article = new Article('','',0)
  // }



  // voteUp() : boolean{
  //   this.article.voteUp()
  //   return false
  // }
  //  voteDown() : boolean{
  //   this.article.voteDown()
  //   return false
  //  }
}
