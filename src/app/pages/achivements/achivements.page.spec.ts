import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AchivementsPage } from './achivements.page';

describe('AchivementsPage', () => {
  let component: AchivementsPage;
  let fixture: ComponentFixture<AchivementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchivementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AchivementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
