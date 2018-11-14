import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
   {
     title:"Mon Premier Post",
     content:"Je suis aymen , j'habite à el mourouj , j'ai 22 ans ",
     loveIts:0,
     DontLoveIts:0

   },
   {
     title:"Mon deuxiemme Post",
     content:"Je suis yosra , j'habite à toulouse, j'ai 22 ans",
     loveIts:0,
     DontLoveIts:0
   },
   {
     title:"Encore un Post",
     content:"Vive la TUNISIE",
     loveIts:0,
     DontLoveIts:0
   }

  ]
}
