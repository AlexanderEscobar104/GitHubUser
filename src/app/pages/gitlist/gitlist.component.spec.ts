import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitlistComponent } from './gitlist.component';

describe('GitlistComponent', () => {
  let component: GitlistComponent;
  let fixture: ComponentFixture<GitlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
