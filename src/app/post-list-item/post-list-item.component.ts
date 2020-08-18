import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;


  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  onLike() {
    this.postLoveIts = this.postsService.likePost();
  }

  onDislike() {
    this.postLoveIts = this.postsService.dislikePost();
  }

  getColor() {
    if (this.postLoveIts > 0){
      return 'green';
    }
    else if (this.postLoveIts < 0){
      return 'red';
    }
  }

  onRemove() {
    // this.postsService.removePost(new Post());
  }
}
