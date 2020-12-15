import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardCustomerPage } from './dashboard-customer.page';

describe('DashboardCustomerPage', () => {
  let component: DashboardCustomerPage;
  let fixture: ComponentFixture<DashboardCustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
