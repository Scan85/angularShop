import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './_service/data.service';
import { PageListComponent } from './page-list/page-list.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PageListComponent
      ],
      providers: [DataService]
    }).compileComponents();
  }));
  
  /*
  it('should create the app', inject([DataService], (service: DataService) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
  it(`should have as title 'angularShop'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angularShop');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angularShop app is running!');
  });*/
});
