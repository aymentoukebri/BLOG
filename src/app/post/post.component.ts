import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() PostName:string;
  @Input() Content:string;
  @Input() created_at=new Date();
  @Input()loveIts:number=0;
  @Input()DontLoveIts:number=0;

  
  constructor() { }

  ngOnInit() {
  }
  Ilike()
  {
     this.loveIts ++;
  }
  Idontlike()
  {
    this.DontLoveIts++;
  }

}
