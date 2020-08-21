import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  /*
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;
  */

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  onLike() {
    this.postsService.likePost(this.post);
  }

  onDislike() {
    this.postsService.dislikePost(this.post);
  }

  getColor() {
    if (this.post.loveIts > 0){
      return 'green';
    }
    else if (this.post.loveIts < 0){
      return 'red';
    }
  }

  onRemove() {
    this.postsService.removePost(this.post);
  }
}
