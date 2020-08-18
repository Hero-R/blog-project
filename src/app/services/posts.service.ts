import { Injectable } from '@angular/core';
import {Post} from '../post';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();


  constructor() { }

  // Save and emit the Subject
  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  likePost() {
    /* this.like++;
    return this.like - this.dislike; */
  }

  dislikePost() {
    /* this.dislike++;
    return this.like - this.dislike; */
  }
  addNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postElement) => {
        return true;
      }
    )
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }
}
