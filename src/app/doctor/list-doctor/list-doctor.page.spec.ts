import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListDoctorPage } from './list-doctor.page';

describe('ListDoctorPage', () => {
  let component: ListDoctorPage;
  let fixture: ComponentFixture<ListDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
