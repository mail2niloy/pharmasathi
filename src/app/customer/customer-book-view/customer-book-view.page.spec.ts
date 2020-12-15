import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerBookViewPage } from './customer-book-view.page';

describe('CustomerBookViewPage', () => {
  let component: CustomerBookViewPage;
  let fixture: ComponentFixture<CustomerBookViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBookViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerBookViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
