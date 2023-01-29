import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemClientComponent } from './list-dem-client.component';

describe('ListDemClientComponent', () => {
  let component: ListDemClientComponent;
  let fixture: ComponentFixture<ListDemClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
