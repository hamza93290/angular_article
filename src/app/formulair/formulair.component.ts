import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../article/article.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-formulair',
  templateUrl: './formulair.component.html',
  styleUrls: ['./formulair.component.css']
})
export class FormulairComponent implements OnInit, OnDestroy {

  title = 'tp-article';
  articles: Article[] = [];
  updateOn = false

  myForm : FormGroup
  titreIn : FormControl
  linkIn : FormControl

  selectedArticle: Article = new Article ('dummy','link')

  constructor( private service: HttpService , fb : FormBuilder){
    this.myForm = fb.group({
      'titreIn': ['', Validators.required],
      'linkIn': ['', Validators.required]
    })
    this.titreIn = this.myForm.controls['titreIn'] as FormControl
    this.linkIn = this.myForm.controls['linkIn'] as FormControl

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
