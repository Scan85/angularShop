import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule  } from "@angular/common/http/testing";
import { PageListComponent } from './page-list.component';
import { TemplateHeaderComponent } from '../components/template-header/template-header.component';
import { TemplateShopFormComponent } from '../components/template-shop-form/template-shop-form.component';
import { TemplateShopComponent } from '../components/template-shop/template-shop.component';
import { DataService } from '../_service/data.service';

describe('PageListComponent', () => {
  let component: PageListComponent;
  let fixture: ComponentFixture<PageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListComponent ],
      imports: [HttpClientTestingModule, TemplateHeaderComponent, TemplateShopFormComponent, TemplateShopComponent],
      providers: [HttpClientTestingModule, DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
