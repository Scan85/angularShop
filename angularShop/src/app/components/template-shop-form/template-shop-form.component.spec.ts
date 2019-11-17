import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateShopFormComponent } from './template-shop-form.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../_service/data.service';
import { Shop } from '../../_interface/shop';


describe('TemplateShopFormComponent', () => {
  let component: TemplateShopFormComponent;
  let fixture: ComponentFixture<TemplateShopFormComponent>;
  let serviceStub: any;
  let product = {
    "id": 1,
    "description": "Amazon Stick",
    "quantity": 10,
    "position": 1,
    "status": false
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TemplateShopFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateShopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*
  it('should create', (product) => {
    expect(component).toBeTruthy();
  });
  */
});
