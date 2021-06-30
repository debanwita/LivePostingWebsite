import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}
  //first functionality - save
  saveData() {
    //step - 1 - get list if posts from post.service
    const listOfPosts: Post[] = this.postService.getPosts();
    //step-2 - send the list of posts to backend
    /*
    Data path :
    https://live-posts-d5842-default-rtdb.firebaseio.com/
    */
    this.http
      .put(
        'https://live-posts-d5842-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  //second functionality - fetch
  fetchData() {
    //step 1
    this.http
      .get<Post[]>(
        'https://live-posts-d5842-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);

          //step 2 - send to post.service
          this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();
  }
}
