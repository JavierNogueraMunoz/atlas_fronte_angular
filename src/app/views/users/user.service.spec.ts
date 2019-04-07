import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('CustomHttpService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [UsersService],
      });

      service = TestBed.get(UsersService);
      httpMock = TestBed.get(HttpTestingController);
  });
  it('should get the data successful', () => {
    const param = {
      _dni: 'dni:75127876D',
      dni:'75127876D'
    };
    service.getUser(param._dni).subscribe((data: any) => {
       expect(data.dni).toBe(param.dni); 
    });
  });
  it('should post the data successful', () => {
    const param = {
      dni: '75127876D'
    };
    service.addUser(param).subscribe((data: any) => {
       expect(data.dni).toBe(param.dni); 
    });
  });
});