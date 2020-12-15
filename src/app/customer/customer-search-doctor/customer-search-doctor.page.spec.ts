import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerSearchDoctorPage } from './customer-search-doctor.page';

describe('CustomerSearchDoctorPage', () => {
  let component: CustomerSearchDoctorPage;
  let fixture: ComponentFixture<CustomerSearchDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSearchDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerSearchDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
