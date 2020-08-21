import { Injectable } from '@angular/core';
import {Post} from '../post';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();


  constructor() {
    /*this.getPosts();*/
  }

  // Save and emit the Subject
  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    /*this.posts.push(new Post('Mon premier Post', 'C\'est le contenu de mon premier post', 0, new Date()));
    this.posts.push(new Post('Mon deuxième Post', 'C\'est le contenu de mon deuxième post', 0, new Date()));
    this.posts.push(new Post('Encore un Post', 'C\'est le contenu de ce post', 0, new Date()));
    this.emitPosts();*/

    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  likePost(post: Post) {
    post.like++;
    post.loveIts = post.like - post.dislike;
    this.savePosts();
    this.emitPosts();
    // return post.like - post.dislike;
  }

  dislikePost(post: Post) {
    post.dislike++;
    post.loveIts = post.like - post.dislike;
    this.savePosts();
    this.emitPosts();
    // return post.like - post.dislike;
  }

  addNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postElement) => {
        if (postElement === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
}
