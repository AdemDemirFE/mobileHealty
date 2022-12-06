import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KullanimSozlesmesiPage } from './kullanim-sozlesmesi.page';

describe('KullanimSozlesmesiPage', () => {
  let component: KullanimSozlesmesiPage;
  let fixture: ComponentFixture<KullanimSozlesmesiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KullanimSozlesmesiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KullanimSozlesmesiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
