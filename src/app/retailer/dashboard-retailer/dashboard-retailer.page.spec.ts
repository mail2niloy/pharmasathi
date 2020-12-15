import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardRetailerPage } from './dashboard-retailer.page';

describe('DashboardRetailerPage', () => {
  let component: DashboardRetailerPage;
  let fixture: ComponentFixture<DashboardRetailerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRetailerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardRetailerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
