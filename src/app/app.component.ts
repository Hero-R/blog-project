import { Component, OnInit } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: 'Blog';
  posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.posts.push(new Post('Mon premier Post', 'C\'est le contenu de mon premier post', 0, new Date()));
    this.posts.push(new Post('Mon deuxième Post', 'C\'est le contenu de mon deuxième post', 0, new Date()));
    this.posts.push(new Post('Encore un Post', 'C\'est le contenu de ce post', 0, new Date()));
  }

  /*posts = [
    {
      title: 'Mon premier Post',
      content: 'C\'est le contenu de mon premier post',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Mon deuxième Post',
      content: 'C\'est le contenu de mon deuxième post',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Encore un post',
      content: 'C\'est le contenu de ce post',
      loveIts: 0,
      createdAt: new Date()
    }
  ];*/

}
