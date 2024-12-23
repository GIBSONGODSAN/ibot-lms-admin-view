import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsDashboardComponent } from './statistics-dashboard.component';

describe('StatisticsDashboardComponent', () => {
  let component: StatisticsDashboardComponent;
  let fixture: ComponentFixture<StatisticsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
