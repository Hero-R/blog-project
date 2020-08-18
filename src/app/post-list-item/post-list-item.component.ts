import {Component, Input, OnInit} from '@angular/core';

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
  like = 0;
  dislike = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onLike() {
    this.like++;
    this.postLoveIts = this.like - this.dislike;
  }

  onDislike() {
    this.dislike++;
    this.postLoveIts = this.like - this.dislike;
  }

  getColor() {
    if (this.postLoveIts > 0){
      return 'green';
    }
    else if (this.postLoveIts < 0){
      return 'red';
    }
  }

}
