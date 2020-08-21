import { Component, OnInit } from '@angular/core';
import {Post} from './post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: 'Blog';
  // posts: Post[] = [];

  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyASsE-BVsFEgtEwIcYo14XWaLkl0PnLh8Y',
      authDomain: 'blog-project-oc.firebaseapp.com',
      databaseURL: 'https://blog-project-oc.firebaseio.com',
      projectId: 'blog-project-oc',
      storageBucket: 'blog-project-oc.appspot.com',
      messagingSenderId: '248892316678',
      appId: '1:248892316678:web:d95a7fd33e32fd1d8df787'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  ngOnInit(): void {
    /*this.posts.push(new Post('Mon premier Post', 'C\'est le contenu de mon premier post', 0, new Date()));
    this.posts.push(new Post('Mon deuxième Post', 'C\'est le contenu de mon deuxième post', 0, new Date()));
    this.posts.push(new Post('Encore un Post', 'C\'est le contenu de ce post', 0, new Date()));*/
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
