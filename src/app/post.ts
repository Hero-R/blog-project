export class Post {

  /*title: string;
  content: string;
  loveIts: number;
  createdAt: Date;*/
  like = 0;
  dislike = 0;

  constructor(public title: string, public content: string, public loveIts: number, public createdAt: Date) {

  }
}
