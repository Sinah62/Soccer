import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountPage } from './count.page';

describe('CountPage', () => {
  let component: CountPage;
  let fixture: ComponentFixture<CountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
