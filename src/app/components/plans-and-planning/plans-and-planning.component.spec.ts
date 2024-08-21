import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansAndPlanningComponent } from './plans-and-planning.component';

describe('PlansAndPlanningComponent', () => {
  let component: PlansAndPlanningComponent;
  let fixture: ComponentFixture<PlansAndPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansAndPlanningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansAndPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
