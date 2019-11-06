import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarTopComponent } from './top-bar-top.component';

describe('TopBarTopComponent', () => {
  let component: TopBarTopComponent;
  let fixture: ComponentFixture<TopBarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
