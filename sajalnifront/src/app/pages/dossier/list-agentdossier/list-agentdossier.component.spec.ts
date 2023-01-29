import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgentdossierComponent } from './list-agentdossier.component';

describe('ListAgentdossierComponent', () => {
  let component: ListAgentdossierComponent;
  let fixture: ComponentFixture<ListAgentdossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAgentdossierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAgentdossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
