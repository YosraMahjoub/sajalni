import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDemComponent } from './create-dem.component';

describe('CreateDemComponent', () => {
  let component: CreateDemComponent;
  let fixture: ComponentFixture<CreateDemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
