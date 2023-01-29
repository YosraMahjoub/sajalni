import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDmComponent } from './update-dm.component';

describe('UpdateDmComponent', () => {
  let component: UpdateDmComponent;
  let fixture: ComponentFixture<UpdateDmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
