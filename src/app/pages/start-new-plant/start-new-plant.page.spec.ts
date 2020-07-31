import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartNewPlantPage } from './start-new-plant.page';

describe('StartNewPlantPage', () => {
  let component: StartNewPlantPage;
  let fixture: ComponentFixture<StartNewPlantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartNewPlantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartNewPlantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
