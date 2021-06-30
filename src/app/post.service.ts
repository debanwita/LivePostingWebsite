import { Injectable, EventEmitter } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPosts: Post[] = [
    /*
    new Post(
      'Nature',
      'Nature is a British weekly scientific journal founded and based in London,England.As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.',
      'https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'test@test.com',
      new Date(),
      5
    ),
    new Post(
      'Hampi',
      'Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.',
      'https://static.langimg.com/thumb/msid-65513520,imgsize-109732,width-540,height-405,resizemode-75/navbharat-times.jpg',
      'test@test.com',
      new Date(),
      2
    ),
    new Post(
      'Araku Valley',
      'Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. Its surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the areas numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts. A miniature train runs through Padmapuram Gardens, with its sculptures and tree-top huts.',
      'https://www.go2india.in/ap/images/b-araku-valley-shooting.jpg',
      'test@test.com',
      new Date(),
      3
    ),*/
  ];
  //facility 1
  getPosts(): Post[] {
    return this.listOfPosts;
  }
  //facility 2
  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }
  //facility 3
  addPost(post: Post) {
    this.listOfPosts.push(post);
  }

  //facility 4
  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }

  //facility 5
  getPost(index: number) {
    return this.listOfPosts[index];
  }
  //facility 6
  likePost(index: number) {
    this.listOfPosts[index].numberOfLikes += 1;
  }

  //facility 7
  setPosts(listOfPosts: Post[]) {
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts);
  }
}
