import { Component, OnInit } from '@angular/core';
import { POSTS } from '../appData/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts = POSTS;

  constructor() { 
    console.log(this.posts);
  }

  toggleLike(e){
    e.showLike = !e.showLike;
  }
  ngOnInit() {
  }

}
