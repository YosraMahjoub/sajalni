import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlldemComponent } from './list-alldem.component';

describe('ListAlldemComponent', () => {
  let component: ListAlldemComponent;
  let fixture: ComponentFixture<ListAlldemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlldemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlldemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
