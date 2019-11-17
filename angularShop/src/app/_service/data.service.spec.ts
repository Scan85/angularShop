import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule  } from "@angular/common/http/testing";
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Shop } from '../_interface/shop';

describe('DataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should get products from json', inject([DataService], (service: DataService) => {
    expect(service.getProducts).toBeTruthy();
  }));
});
