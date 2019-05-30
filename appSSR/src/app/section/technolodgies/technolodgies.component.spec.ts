import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnolodgiesComponent } from './technolodgies.component';

describe('TechnolodgiesComponent', () => {
  let component: TechnolodgiesComponent;
  let fixture: ComponentFixture<TechnolodgiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnolodgiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnolodgiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
