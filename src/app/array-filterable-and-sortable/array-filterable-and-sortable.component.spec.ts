import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFilterableAndSortableComponent } from './array-filterable-and-sortable.component';

describe('ArrayFilterableAndSortableComponent', () => {
  let component: ArrayFilterableAndSortableComponent;
  let fixture: ComponentFixture<ArrayFilterableAndSortableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayFilterableAndSortableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayFilterableAndSortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
