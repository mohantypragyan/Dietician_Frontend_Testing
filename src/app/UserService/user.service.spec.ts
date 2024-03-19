import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
 /* it('should update patient by user id', () => {
    const mockReportFile = new File(['dummy report file'], 'report.txt');
    const mockPatientInfo = '{"name":"John","age":30}';
    const mockResponse = { id: 123, name: 'John', age: 30 };
    service.putPatient(456, mockReportFile, mockPatientInfo).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne('http://localhost:5678/dietician/patient/456');
    expect(req.request.method).toBe('PUT');
    const formData = req.request.body;
    expect(formData.get('file')).toBe(mockReportFile);
    expect(formData.get('patientInfo')).toBe(mockPatientInfo);
    req.flush(mockResponse);
  });*/
});
