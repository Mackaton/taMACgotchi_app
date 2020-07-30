import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GardenPage } from './garden.page';

describe('GardenPage', () => {
  let component: GardenPage;
  let fixture: ComponentFixture<GardenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GardenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
