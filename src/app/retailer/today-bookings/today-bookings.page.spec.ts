import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodayBookingsPage } from './today-bookings.page';

describe('TodayBookingsPage', () => {
  let component: TodayBookingsPage;
  let fixture: ComponentFixture<TodayBookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayBookingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodayBookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
