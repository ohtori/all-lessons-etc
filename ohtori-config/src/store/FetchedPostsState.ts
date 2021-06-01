import { makeAutoObservable } from "mobx";

class FetchedPosts {
  posts: any[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  //commented is example for setPosts withiut fetch
  setPosts(/*posts: any[]*/) {
    //this.posts = posts;
    fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10').then(res => res.json()).then(result => this.posts = result);  }
}

export default new FetchedPosts();