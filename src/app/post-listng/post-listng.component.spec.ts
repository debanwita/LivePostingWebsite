import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListngComponent } from './post-listng.component';

describe('PostListngComponent', () => {
  let component: PostListngComponent;
  let fixture: ComponentFixture<PostListngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
